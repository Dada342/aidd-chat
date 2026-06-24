# Testing

## Strategy

- **E2e only** — no unit or integration tests wired up; the test suite covers user-facing flows end-to-end via a real browser

## Tools

- **Playwright** — browser automation and assertions (`@playwright/test`)
- Config at `playwright.config.ts`

## Conventions

- Tests live in `tests/`
- The suite requires the app running; `PLAYWRIGHT=True` env flag gates test-only code paths

## Run

```bash
pnpm test          # full Playwright suite
```
