# Influencer Campaign Data Hub

This is the interactive presentation foundation for the Influencer Campaign Data Hub.

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v3
- Framer Motion
- Lucide React
- Zustand

## Installation

```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

To run a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

- `src/components/presentation/`: Reusable presentation architecture components (Shell, Scene, Controls).
- `src/components/ui/`: Reusable, accessible atomic UI components.
- `src/design-system/`: Centralized tokens, animation presets, and Tailwind utilities.
- `src/hooks/`: Navigation, fullscreen, and motion hooks.
- `src/store/`: Zustand state management for presentation progress.
- `src/scenes/`: Individual presentation scene content.
- `src/data/`: Structured presentation definitions.

## How to add a new scene

1. Create a new component in `src/scenes/NewScene.tsx` using the `<Scene>` wrapper.
2. Update `src/data/presentation.ts` to include the scene definition and set `totalSteps`.
3. Add the component to `src/App.tsx` inside `<PresentationShell>`.

## Controls

### Keyboard
- **Next Step/Scene**: Space, ArrowRight, ArrowDown
- **Previous Step/Scene**: ArrowLeft, ArrowUp
- **First Scene**: Home
- **Last Scene**: End
- **Toggle Fullscreen**: F

### Mouse & Trackpad
- **Scroll Down**: Next Step/Scene
- **Scroll Up**: Previous Step/Scene
- **Click**: Click the central safe area to advance. Interactive elements will not trigger navigation.

## Debug Mode

You can enable the presenter controls permanently for development by setting `SHOW_PRESENTER_CONTROLS_BY_DEFAULT = true` in `src/components/presentation/PresenterControls.tsx`.
