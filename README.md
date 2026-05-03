# Card Management App
  Next.js + TypeScript + Tailwind CSS card management application.


## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (global theme config)
- **State**: Redux Toolkit + LocalStorage
- **Toast**: react-hot-toast
- **Icons**: lucide-react


## Setup
```bash
npm install
npm run dev
```

## Features
- Add Credit / Debit cards with validation
- Lock, Archive, Set Default, Add to GPay actions
- Show/Hide card number
- Card carousel with slider navigation
- Toast notifications for all actions
- LocalStorage persistence
- Responsive design

## Project Structure
```
src/
├── app/                # Next.js pages
│   ├── cards/          # Cards page
│   ├── providers/      # Redux providers
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── assets/
│   └── scss/
│       └── globals.scss # Global styles
├── shared/
│   ├── components/     # UI components
│   │   ├── cards/      # Card components
│   │   ├── footer/     # Footer
│   │   ├── headers/    # Header
│   │   ├── layout/     # Layout
│   │   └── sidebar/    # Sidebar
│   ├── data/           # Static data
│   ├── store/          # Redux setup
│   ├── ui/             # Base components
│   └── utils/          # Helper functions
└── types/              # TypeScript types
```

## Key Components
- **AddCardModal**: Card creation form
- **CardCarousel**: Interactive card carousel for managing cards
- **CardActions**: Lock/archive/default/GPay actions
- **CardView**: Visual card representation

## Styling
- Custom SCSS with responsive design
- Tailwind utilities with custom spacing
- Responsive breakpoints (640px, 1024px, 1280px+)
- Banking-style card design

## Development Notes
- Redux for state management
- Toast notifications for user feedback
- LocalStorage for data persistence
- TypeScript for type safety
