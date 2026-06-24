---
paths:
  - app/**
---

# Security baseline

Rules that apply to all Route Handlers and Server Actions.

## Authentication

- Every Route Handler must call `auth()` and return 401 when session is absent.
- Do not add a public Route Handler without an explicit decision to do so.

## Input validation

- URL inputs must be constrained to `https://` — reject `file://`, `gopher://`, etc.
- Use `z.string().url().refine(u => u.startsWith("https://"))` for Zod schemas.
- Replace `z.record(z.unknown())` with typed schemas that enumerate expected fields.

## File storage

- Never use `access: "public"` for Blob uploads without a signed URL + TTL.
- Gate file reads behind `auth()` or use private Blob with short-lived signed URLs.
