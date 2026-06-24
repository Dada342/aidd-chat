# Auth

## Authentication

- **NextAuth v5** (`next-auth@5.0.0-beta.25`) with Credentials provider
- Config: `app/(auth)/auth.config.ts` (base) + `app/(auth)/auth.ts` (providers + handlers)
- Guest users supported via `createGuestUser()` — anonymous sessions with `isAnonymous: true`
- Password hashing: `bcrypt-ts`

## Authorization

- Route protection via NextAuth middleware (`middleware.ts`)
- Public routes: `/login`, `/register`
- All other routes require a valid session
- `auth()` called in Route Handlers and Server Actions to enforce access

## Sessions

- **JWT** strategy (stateless sessions)
- Session payload includes `user.id` and `user.type` (`"guest"` | `"regular"`)
- Token lifetime: NextAuth default (30 days)
