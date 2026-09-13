# Browser UI

This directory contains browser-facing controllers and reusable UI components. It translates game state into controls, panels, queue/dash displays, hotkeys, fullscreen behavior, chat, progress indicators, and other presentation state.

## Key modules

- `interface.ts` is the main UI coordinator and owns most dashboard/control wiring.
- `button.ts` and `progressbar.ts` implement reusable controls.
- `queue.ts` renders and updates the creature turn queue.
- `hotkeys.ts` maps keyboard input to UI/game actions.
- `fullscreen.ts` owns fullscreen-browser integration.
- `chat.ts`, `quickinfo.ts`, `buffs-debuffs.ts`, and `meta-powers.ts` own their focused surfaces.

Markup belongs in [`../templates/`](../templates/README.md) and visual rules in [`../style/`](../style/README.md). Game legality and combat rules belong in the engine/ability layer, not in UI event handlers.

When a UI action changes game state, route it through the same engine methods used by non-UI callers so bots, replay/headless execution, and browser input remain consistent. Keep DOM-dependent code out of shared gameplay modules.

For UI regressions, add Jest/jsdom coverage under `../__tests__/` where practical and run `npm run build` to catch template/style/bundle integration errors.
