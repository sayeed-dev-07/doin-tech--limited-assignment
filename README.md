# ByteSpace

ByteSpace is a responsive course-discovery experience built for learners and creators. It includes course browsing, course-detail pages, creator profiles, a creator directory, and polished sign-in/sign-up screens.

The project is currently a front-end implementation. Courses, reviews, creators, and authentication form content are powered by local mock data; no database or authentication provider is connected yet.

## Highlights

- Responsive landing page with course, creator, community, and professional-growth sections.
- Course catalogue and dynamic course-detail pages.
- Creator directory and dynamic creator profiles with course listings.
- Responsive sign-in and registration experiences using the existing ByteSpace artwork.
- Animated navigation, cards, and page sections with GSAP.
- Typed mock data and shared component/page prop types.
- Local static image and SVG assets optimized with Next.js `Image`.

## Tech stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | App Router, file-based routing, server/client components, image optimization, and production builds. |
| React 19 | Component-based user interface. |
| TypeScript | Type safety for mock data, route props, and component props. |
| Tailwind CSS 4 | Responsive styling and design tokens through utility classes. |
| GSAP + `@gsap/react` | Entrance, hover, navbar, and scroll-triggered animations. |
| Lucide React | Lightweight interface icons. |
| ESLint | Static code-quality checks. |

## Requirements

- Node.js 20 or newer
- npm (included with Node.js)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Serves the production build after `npm run build`. |
| `npm run lint` | Runs ESLint across the project. |
| `npx tsc --noEmit` | Runs a TypeScript-only type check. |

## Routes

| Route | Description |
| --- | --- |
| `/` | ByteSpace landing page. |
| `/courses` | Course discovery page. |
| `/courses/[id]` | Dynamic course-detail page. Example: `/courses/1`. |
| `/creators` | Directory of creators derived from the course mock data. |
| `/creators/[creatorId]` | Dynamic creator profile and course list. Example: `/creators/pumpeer-studio`. |
| `/login` | Sign-in interface. |
| `/register` | Registration interface. |

`(courses)` and `(signin)` are Next.js route groups. They organize files without appearing in the public URL.

## Folder structure

```text
.
├── app/
│   ├── (courses)/
│   │   ├── _components/             # Shared catalogue controls
│   │   ├── courses/
│   │   │   ├── [id]/                # Dynamic course page and its sections
│   │   │   └── page.tsx             # /courses
│   │   └── creators/
│   │       ├── [creatorId]/         # Dynamic creator profile
│   │       └── page.tsx             # /creators
│   ├── (signin)/
│   │   ├── _components/AuthLayout.tsx
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── fonts/                        # Local Satoshi font
│   ├── globals.css                   # Tailwind import and project tokens
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── not-found.tsx                 # Custom 404 page
│   └── page.tsx                      # Home page
├── components/
│   ├── DiscoverMini/                 # Reusable course card
│   ├── heroMini/                     # Hero visual pieces
│   ├── shared/                       # Navbar and shared UI
│   └── testimonials/                 # Testimonial card
├── public/
│   ├── data/mockData.ts              # Local courses, creators, reviews, and helpers
│   └── images/                       # Image and SVG assets
├── sections/                         # Landing-page sections
├── types/index.ts                    # Shared domain, route, and component prop types
├── next.config.ts                    # Next.js configuration
└── package.json
```

## Data and types

All sample data lives in `public/data/mockData.ts`:

- `courses` supplies the compact cards used in discovery grids.
- `coursesData` supplies rich course details, including an instructor, lessons, reviews, and preview media.
- `getCourseById(id)` resolves a course detail for dynamic course pages.
- `getCreatorById(creatorId)` resolves instructor information for creator pages.

`types/index.ts` is the single source of truth for shared TypeScript types. It contains course, creator, review, data-model, route-prop, and component-prop types. Components should import types from `@/types` instead of declaring duplicate local interfaces.

## Styling and responsiveness

- Tailwind CSS is configured through `app/globals.css`.
- The project uses the ByteSpace palette: Persian blue (`#003BE2`), electric lime (`#D4FB20`), and neutral surfaces.
- Poppins is loaded through `next/font`; Satoshi is loaded locally from `app/fonts/satoshi.woff2`.
- Layouts are mobile-first. Smaller screens use reduced type scales, spacing, and touch-friendly controls; larger layouts activate at Tailwind breakpoints such as `sm`, `md`, and `lg`.

## Animations

Client components that use GSAP are marked with `'use client'`. GSAP powers hover motion, entrance transitions, the responsive navbar behavior, and scroll-triggered section animation. Keep animations scoped to component refs when adding new behavior so cleanup happens correctly on route changes.

## Authentication note

`/login` and `/register` currently provide accessible form layouts only. To make them functional, connect the form submissions to an authentication service or server action, validate input on the server, and replace placeholder recovery/terms links with real routes.

## Build and deployment

Create a production build locally:

```bash
npm run build
npm run start
```

The app can be deployed to any platform that supports Next.js, including Vercel. Ensure the deployment environment uses a supported Node.js version and runs the build command above.

## Contributing

When adding a feature:

1. Keep routes inside the appropriate App Router segment.
2. Add reusable data and prop types to `types/index.ts`.
3. Keep mock-data changes in `public/data/mockData.ts` until a real API is introduced.
4. Test mobile and desktop breakpoints.
5. Run `npx tsc --noEmit` and `npm run build` before handing off changes.
