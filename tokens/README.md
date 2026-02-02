# Easy Click Tokens

`tokens/easyclick.css` is the single source of truth for Easy Click theming.

## Mapping to shadcn/ui

The file already maps Easy Click brand and semantic tokens to the standard shadcn variables:

- `--primary` → `--brand-primary`
- `--destructive` → `--danger`
- `--card` → `--surface`
- `--muted` → `--surface-muted`
- `--ring` → `--brand-primary`

Import this CSS file before your Tailwind utilities so shadcn components read the same tokens.
