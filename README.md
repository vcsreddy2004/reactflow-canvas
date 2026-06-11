# App Graph Builder

A responsive React application for visualizing and inspecting service graphs. Built as a take-home assignment demonstrating ReactFlow, TanStack Query, Zustand, and shadcn/ui integration.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Script       | Description                          |
| ------------ | ------------------------------------ |
| `npm run dev`      | Start Vite dev server                |
| `npm run build`    | Type-check and production build      |
| `npm run preview`  | Preview production build             |
| `npm run lint`     | Run ESLint                           |
| `npm run typecheck`| Run TypeScript compiler (no emit)    |

## Features

- **Layout**: Top bar, left icon rail, right app/inspector panel, dotted ReactFlow canvas
- **Responsive**: Right panel becomes a slide-over drawer on screens below `md` (768px), toggled via Zustand
- **ReactFlow**: 3+ nodes per app, drag, select, delete (Backspace/Delete), zoom/pan, fit view
- **Node Inspector**: Status badge, Config/Runtime tabs, synced slider + numeric CPU input, editable name/description
- **TanStack Query**: Mock `GET /apps` and `GET /apps/:appId/graph` with loading/error states and caching
- **Zustand**: `selectedAppId`, `selectedNodeId`, `isMobilePanelOpen`, `activeInspectorTab`

## Key Decisions

- **Mock API**: In-memory data with `setTimeout` latency (~600ms) instead of MSW, keeping the setup lightweight while still demonstrating async fetch patterns.
- **Graph bridge**: A small Zustand bridge connects ReactFlow's internal node state to the inspector panel without prop drilling across the layout tree.
- **Per-app graphs**: Each application has its own node/edge configuration; switching apps refetches via TanStack Query and resets selection.
- **Error simulation**: Top bar toggle sets a global flag that causes mock API calls to reject, useful for testing error UI.

## Known Limitations

- App search and "Add app" button are UI-only (no create flow).
- Left rail navigation icons are static placeholders.
- Node edits are in-memory only and reset when switching apps.
- No persistence layer (localStorage/backend).

## Tech Stack

- React 19 + Vite
- TypeScript (strict)
- @xyflow/react (ReactFlow)
- TanStack Query
- Zustand
- shadcn/ui + Tailwind CSS v4
