# Salas Tech — pacote para Vercel

Esta cópia é independente da infraestrutura Manus. Os assets usados pelo site estão em `client/public/assets/`, as rotas da SPA são tratadas por `vercel.json` e Node 24.19.0 é fixado por `.nvmrc` e `package.json`.

## Verificação local

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
```

## Vercel

1. Importe este diretório em um repositório Git.
2. Na Vercel, escolha Node 24.x.
3. Defina `VITE_SITE_URL=https://www.salastech.com.br` em Production e Preview.
4. Faça o deploy. O arquivo `vercel.json` já define build, output, headers e fallback de SPA.

O analytics Manus foi removido deste pacote. Reconfigure um provedor de analytics externo apenas se necessário.
