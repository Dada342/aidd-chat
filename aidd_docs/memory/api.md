# API

## Style

- **Next.js Route Handlers** (REST-style) under `app/(chat)/api/`
- No versioning, no base path prefix
- Server Actions used for mutations from the UI (`app/(chat)/actions.ts`)

## Resources

- `api/chat/` — start/continue a chat, stream AI response
- `api/document/` — create and fetch AI-generated documents
- `api/files/` — upload files to Vercel Blob
- `api/history/` — list user's past chats
- `api/messages/` — fetch messages for a chat
- `api/models/` — list available LLM models
- `api/suggestions/` — manage document suggestions
- `api/vote/` — upvote/downvote messages

## Contracts

- Responses: JSON for data endpoints, streaming text for `api/chat/`
- Auth: all endpoints require an active NextAuth session (enforced via `auth()` call)
- Errors: HTTP status codes + JSON `{ error: string }`
