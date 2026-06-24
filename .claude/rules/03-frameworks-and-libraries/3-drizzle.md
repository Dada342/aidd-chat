---
paths:
  - lib/db/**
---

# Drizzle ORM patterns

Rules for all database query and schema files.

## Migrations

- Never edit migration files in `lib/db/migrations/` by hand.
- Always run `pnpm db:generate` then `pnpm db:migrate` to apply schema changes.

## Queries

- Every query function that returns an array must accept a `limit` param.
- Paginate at the route layer, not inside the query function.
- Never fetch unbounded result sets (no `limit` = a future perf incident).

## Example

```ts
// Bad
export async function getMessagesByChatId(chatId: string) {
  return db.select().from(message).where(eq(message.chatId, chatId));
}

// Good
export async function getMessagesByChatId(chatId: string, limit = 50) {
  return db.select().from(message).where(eq(message.chatId, chatId)).limit(limit);
}
```
