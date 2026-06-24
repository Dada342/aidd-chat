# Project conventions

Baseline standards that apply to all files in this project.

## Package manager

- Use `pnpm` exclusively — never `npm` or `yarn`.

## Documentation

- Every exported function gets a JSDoc comment.
- One-line JSDoc is enough; no multi-paragraph blocks.

## User-facing messages

- Error messages shown to users must be in French.
- Log messages and code comments stay in English.

## Version control

- Commit format: `<emoji> [feature-name] file: description` (Gitmoji).
- Never force-push. Never include `Co-Authored-By`.
