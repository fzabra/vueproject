# Vue Project (Updated)

This project was migrated to a modern stack:

- Vue 3
- Vue Router 4
- Pinia
- Vite

## Requirements

- Node.js 20+ (latest LTS recommended)
- npm 10+

## Run the project

```bash
npm install
npm run dev
```

The app runs at:

- http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## What was modernized

- Removed the legacy Vue 2 + webpack setup.
- Migrated from `Vuex` to `Pinia`.
- Updated `vue-router` to the current API (`createRouter`).
- Rewrote components using `script setup`.
- Simplified the global theme and styles.
