# Easy Click Design System (Tokens + UX)

This repo is a **token + docs + recipes** source for Easy Click products.
It is designed to plug into apps that already use **shadcn/ui**.

## What this repo provides

- **Tokens**: `tokens/easyclick.css` (source of truth)
- **ThemeProvider**: data-theme based + anti-FOUC script
- **Docs**: UX manifesto + UX rules
- **Recipes**: copy/paste snippets that use shadcn components

## What this repo does NOT provide

- It does **not** ship a base `Button`, `Dialog`, `Table`, etc.  
  Each consuming app should use its own `@/components/ui/*` from shadcn.

## Quick usage (manual copy)

1) Copy `tokens/easyclick.css` into your app and import it in your `globals.css`.
2) Copy `components/theme/ThemeProvider.tsx`.
3) Add the anti-FOUC script in `app/layout.tsx`.
4) Use recipes in `/recipes` as starting points.

See `docs/consumption.md` for exact steps.

## Local docs site (optional)

This repo still contains a Next.js site for demos and pattern previews.
Run it locally if needed:

```bash
npm install
npm run dev
```
