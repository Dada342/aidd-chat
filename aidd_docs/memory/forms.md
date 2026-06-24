# Forms

## Approach

- No dedicated form library — plain React state with Server Actions for submission
- Validation done server-side in Server Actions (`app/(auth)/actions.ts`, `app/(chat)/actions.ts`)
- Zod used for schema validation (`zod` in dependencies)

## Conventions

- Form submissions go through Server Actions, not client-side fetch
- Errors returned as typed objects from Server Actions and displayed inline
- Auth forms (login, register) live in `app/(auth)/login/` and `app/(auth)/register/`
