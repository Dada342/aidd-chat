# Coding Assertions

## Before commit

| Order | Command | Checks |
| ----- | ------- | ------ |
| 1 | `pnpm check` | Biome lint + format (via `ultracite check`) |

## Before push

| Order | Command | Checks |
| ----- | ------- | ------ |
| 1 | `pnpm check` | Biome lint + format |
| 2 | `pnpm build` | TypeScript compile + Next.js build (also runs `db:migrate`) |
| 3 | `pnpm test` | Playwright e2e suite |
