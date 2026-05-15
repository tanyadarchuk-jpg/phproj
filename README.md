# Restaurant Analytics Dashboard

A modern internal analytics and reporting web application built with React, Vite, Tailwind CSS, and Lucide React.

## Project structure

- `package.json` — app dependencies and scripts
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — Tailwind CSS content and theme settings
- `postcss.config.js` — PostCSS plugins
- `index.html` — application shell
- `src/main.jsx` — app entrypoint
- `src/App.jsx` — root app component with navigation state
- `src/layout/Layout.jsx` — responsive layout and sticky sidebar
- `src/views/ReportUploader.jsx` — report upload page with drag-and-drop UI
- `src/styles/index.css` — Tailwind CSS imports and base styles

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal.

## Notes

- The left sidebar navigation is responsive and sticky.
- `ReportUploader` includes a drag-and-drop upload area with placeholder data state.
- Next steps: integrate actual CSV/XLSX/JSON parsing, chart components, filtering, and table views.
