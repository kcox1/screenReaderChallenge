# Screen Reader Challenge - Project Architecture

## High-Level Purpose

A **gamified screen reader accessibility training application**. Users must use a screen reader (VoiceOver) to navigate and complete a mission—stopping an evil rocket launch by entering secret color codes without being able to see the screen.

## Architecture Overview

```
screenReaderChallenge (Vue 3 + Vite SPA)
│
├── Frontend Framework: Vue 3 + Vue Router + Pinia (state management)
├── Styling: Currently using visibility:hidden pattern for actual UI hiding
│
├── Core Structure:
│   ├── App.vue - Main layout (header, nav, main, footer)
│   ├── Router (7 routes)
│   ├── Auth Store (login/logout state)
│   └── Views (7 pages in game flow)
│
└── Key Features:
    ├── Authentication (username: BossEvil, password: kitty)
    ├── Cookie persistence
    ├── Expandable components for accessibility
    └── ARIA live regions for announcements
```

## Game Flow

1. **HomeView** → Login required (credentials are BossEvil/kitty)
2. **LaunchControlView** → Hints player to use manual control
3. **CodeBookView** → Displays secret color codes for 3 rocket types (expandable sections)
4. **RocketModelsView** → Background info on which rocket is being launched
5. **ManualControlView** → **Main Gameplay** - Enter 3 hex color codes (without seeing them) to halt rocket
   - Correct codes: `FF0000`, `00FF00`, `0000FF` = Win!
   - Other valid codes trigger status messages
6. **WinView** → Victory screen (navigates after 5-second delay)
7. **HelpView** → (Need to check this)

## Accessibility Approach

- **Everything visually hidden** using CSS (`position: absolute; left: -1000px; ...`)
- **Screen readers can access all content** via semantic HTML and ARIA
- **Live regions** announce success/failure messages
- **Focus management** - heading focus after page load, skip-to-main link
- **Form labels and descriptions** with `aria-describedby`
- **No visual UI** - pure semantic navigation (intentionally blocks sighted users)

## Tech Stack

- **Vue 3** with `<script setup>` composition API
- **Vue Router** for navigation
- **Pinia** for global auth state
- **vue3-cookies** for persistence
- **Vite** as the build tool
- **CSS Grid/Flexbox** hidden from view
