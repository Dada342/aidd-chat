---
paths:
  - lib/**
---

# Architecture: layer boundaries

`lib/` is the innermost layer — it must not depend on outer layers.

## Imports

- Never import from `components/` inside `lib/`.
- Never import from `app/` inside `lib/`.
- Types shared across layers belong in `lib/types.ts`.

## Examples

```ts
// Bad — lib/ importing from components/
import { ArtifactKind } from "@/components/chat/artifact";

// Good — shared type in lib/
import { ArtifactKind } from "@/lib/types";
```
