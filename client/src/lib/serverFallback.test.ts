import { IncomingMessage, ServerResponse } from "node:http";
import fs from "node:fs";
import type { Socket } from "node:net";
import os from "node:os";
import path from "node:path";
import { PassThrough } from "node:stream";
import { describe, expect, it } from "vitest";
import { createApp } from "../../../server/app";

function requestApp(
  app: ReturnType<typeof createApp>,
  url: string,
): Promise<{ status: number; text: string }> {
  return new Promise((resolve, reject) => {
    const socket = new PassThrough() as unknown as Socket;
    const req = new IncomingMessage(socket);
    req.method = "GET";
    req.url = url;
    req.headers = { host: "localhost" };

    const res = new ServerResponse(req);
    res.assignSocket(socket);

    const chunks: Buffer[] = [];
    const origWrite = res.write.bind(res);
    const origEnd = res.end.bind(res);

    res.write = ((chunk: unknown, ...args: unknown[]) => {
      if (chunk) {
        chunks.push(
          Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)),
        );
      }
      return (origWrite as (...a: unknown[]) => boolean)(chunk, ...args);
    }) as typeof res.write;

    res.end = ((chunk?: unknown, ...args: unknown[]) => {
      if (chunk && typeof chunk !== "function") {
        chunks.push(
          Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)),
        );
      }
      const result = (origEnd as (...a: unknown[]) => ServerResponse)(
        chunk,
        ...args,
      );
      resolve({
        status: res.statusCode,
        text: Buffer.concat(chunks).toString("utf8"),
      });
      return result;
    }) as typeof res.end;

    res.on("error", reject);
    app(req, res);
  });
}

describe("Express 5 SPA fallback", () => {
  it("serves index.html at root and deep client routes", async () => {
    const staticPath = fs.mkdtempSync(
      path.join(os.tmpdir(), "salas-tech-test-"),
    );
    fs.writeFileSync(
      path.join(staticPath, "index.html"),
      '<div id="root">Salas Tech</div>',
    );
    const app = createApp(staticPath);
    const root = await requestApp(app, "/");
    const deepRoute = await requestApp(app, "/projetos/lounge-odontologia");
    expect(root.status).toBe(200);
    expect(deepRoute.status).toBe(200);
    expect(deepRoute.text).toContain("Salas Tech");
  });
});
