# Project Brief

## What it is

- Open-source AI chatbot template built with Next.js and the AI SDK, designed as a learning reference and production starting point for AI-powered chat applications.

## Why it exists

- Provides a ready-to-deploy, full-featured chatbot with persistence, auth, and multi-model support so developers can focus on customization rather than plumbing.

## Domain language

| Term | Meaning |
| ---- | ------- |
| Chat | A conversation thread owned by a user, stored in Postgres |
| Message | A single turn in a chat (role: user or assistant), stored as `Message_v2` |
| Document | An AI-generated artifact (text, code, image, sheet) attached to a chat |
| Suggestion | An inline edit proposal on a document |
| Vote | A thumbs-up/down on an assistant message |
| Guest user | An anonymous session user (`isAnonymous: true`) with limited access |
| Stream | A resumable AI response stream tracked in the DB |
| AI Gateway | Vercel's unified LLM proxy; replaced by direct Mistral SDK in this local setup |

## Key features

- Multi-turn chat with streaming AI responses (AI SDK v6)
- Multiple LLM models selectable per conversation (Mistral Large default locally)
- Persistent chat history in Neon Postgres
- File upload and storage via Vercel Blob
- Document creation and inline editing (text, code, image, sheet)
- Guest access (anonymous sessions) and registered users
- Public/private chat visibility
- Rate limiting via Redis
