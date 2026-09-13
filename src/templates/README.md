# Templates

This directory contains HTML fragments used by the browser UI/build for surfaces such as the dashboard, interface controls, pre-match flow, and scoreboard.

Treat templates as structure, not game logic. Dynamic behavior and event handling belong in [`../ui/`](../ui/README.md), while appearance and responsive rules belong in [`../style/`](../style/README.md).

## Guidelines

- Preserve IDs/classes that are queried by UI controllers unless the corresponding TypeScript and styles are updated in the same change.
- Keep repeated control structure consistent so shared UI code can address it predictably.
- Avoid inline behavior; prefer semantic markup plus existing controller bindings.
- When adding a new UI surface, identify the controller and stylesheet that own it and document any stable selectors relied on by tests.

Run `npm run build` after template changes because Webpack processes these fragments and can catch missing assets or loader/template integration problems that a TypeScript-only check will miss.
