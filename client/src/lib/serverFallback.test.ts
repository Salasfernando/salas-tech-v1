import { createServer } from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it, afterEach } from "vitest";
import { createApp } from "../../../server/app";

const servers: ReturnType<typeof createServer>[] = [];

afterEach(async () => {
  await Promise.all(
    servers
      .splice(0)
      .map(
        (server) =>
          new Promise<void>((resolve) => server.close(() => resolve())),
      ),
  );
});

describe("Express 5 SPA fallback", () => {
  it("serves index.html at root and deep client routes", async () => {
    const staticPath = fs.mkdtempSync(
      path.join(os.tmpdir(), "salas-tech-test-"),
    );
    fs.writeFileSync(
      path.join(staticPath, "index.html"),
      '<div id="root">Salas Tech</div>',
    );
    const server = createServer(createApp(staticPath));
    servers.push(server);
    await new Promise<void>((resolve) =>
      server.listen(0, "127.0.0.1", () => resolve()),
    );
    const address = server.address();
    if (!address || typeof address === "string")
      throw new Error("Test server did not expose a port");
    const root = await fetch(`http://127.0.0.1:${address.port}/`);
    const deepRoute = await fetch(
      `http://127.0.0.1:${address.port}/projetos/lounge-odontologia`,
    );
    expect(root.status).toBe(200);
    expect(deepRoute.status).toBe(200);
    expect(await deepRoute.text()).toContain("Salas Tech");
  });
});
