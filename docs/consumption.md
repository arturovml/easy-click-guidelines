# Consumption guide (manual copy)

This repo is a **token + docs + recipes** source. It is not a runtime UI library.

## 1) Tokens

Copy `tokens/easyclick.css` into your app (e.g. `styles/easyclick.css`), then import it
before Tailwind utilities in your `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./easyclick.css";
```

## 2) ThemeProvider (data-theme)

Copy `components/theme/ThemeProvider.tsx` and keep the localStorage key as `easyclick-theme`.

In your `app/layout.tsx`, inject the anti-FOUC script:

```tsx
<Script
  id="easy-click-theme"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          var stored = localStorage.getItem('easyclick-theme');
          var theme = stored === 'dark' ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', theme);
        } catch (e) {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      })();
    `,
  }}
/>
```

## 3) Tailwind token mapping

Ensure Tailwind maps the shadcn variables:

```
background, foreground, card, card-foreground, popover, popover-foreground,
primary, primary-foreground, secondary, secondary-foreground, muted,
muted-foreground, accent, accent-foreground, destructive,
destructive-foreground, border, input, ring
```

## 4) Recipes

Use the markdown recipes in `/recipes` as copy/paste patterns. They assume
shadcn components live under `@/components/ui/*`.
