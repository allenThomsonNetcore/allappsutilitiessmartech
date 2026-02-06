# Netcore Integration Utilities

A React + Vite landing page that lists integration apps as clickable tiles with visual previews.

## Quick start

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`

## Add a new app

1. Drop a preview image into `src/assets` (SVG/PNG/JPG).
2. Add a new entry to `src/data/apps.js`:

```js
{
  id: "unique-id",
  name: "App Name",
  description: "Short summary of what it does.",
  href: "https://your-app-url",
  image: yourImportedPreview,
  tag: "Category"
}
```

That is it. The tile grid updates automatically.
