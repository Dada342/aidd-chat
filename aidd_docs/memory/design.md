# Design

## System

- **shadcn/ui** — component library built on Radix UI primitives, components in `components/ui/`
- **Tailwind CSS v4** — utility-first styling, config via `postcss.config.mjs`
- **next-themes** — light/dark mode toggle, theme provider in `components/theme-provider.tsx`

## Tokens

- Colors and spacing defined via Tailwind CSS variables in `app/globals.css`
- shadcn/ui CSS variables follow the `--background`, `--foreground`, `--primary` convention

## Components

- Base primitives: `components/ui/` (button, input, dialog, dropdown, tooltip, etc.)
- Chat-specific: `components/chat/` (message bubbles, input bar, model selector, sidebar)
- AI-generated content: `components/ai-elements/`

## Accessibility

- Radix UI primitives handle ARIA and keyboard navigation by default
- Focus management delegated to Radix
