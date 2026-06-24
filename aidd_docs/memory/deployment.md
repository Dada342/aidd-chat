# Deployment

## Pipeline

- **GitHub Actions** — two workflows in `.github/workflows/`:
  - `lint.yml` — runs `pnpm check` (Biome) on every push
  - `playwright.yml` — runs `pnpm test` (Playwright e2e) on push
- **Vercel** — automatic deploy on push to `main` via GitHub integration

## Environments

- **Development**: `localhost:3000` (or `3002` if port taken), `.env.local` with `vercel env pull`
- **Production**: Vercel project `aidd-chat` (`Dada342/aidd-chat`)
- Preview deployments created automatically by Vercel on each PR

## Release

- No formal release process — push to `main` triggers a Vercel production deploy
- Rollback via Vercel dashboard (instant promotion of a previous deployment)

## Monitoring

- **Vercel Analytics** (`@vercel/analytics`) — page views and web vitals
- **OpenTelemetry** (`@vercel/otel`) — instrumented in `instrumentation.ts`
- Logs available in Vercel dashboard → project → Functions
