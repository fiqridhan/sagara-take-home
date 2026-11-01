# CEO SUITE — Sagara Technology Frontend Take-Home

Responsive implementation of the supplied CEO SUITE Landing Page and Wisma GKBI Boardroom Product Page.

## Tech Stack

Next.js App Router, React, TypeScript (strict mode), Tailwind CSS, Plus Jakarta Sans, DM Sans, and Next.js Image. Content and product details use typed local data.

## Implemented Pages

- `/` — Landing Page, including workspace search, categories, recommendations, promotions, deals, packages, partners, FAQ, and app promotion.
- `/products/wisma-gkbi-boardroom` — Product Page with photo gallery, pricing, add-ons, location, and similar spaces.

## Features

- Responsive navigation and page sections.
- Search form that moves to recommended spaces.
- Selectable product photos and keyboard-dismissable photo dialog.
- Date input and booking panel with an explicit demo limitation.
- Expandable FAQ answer where the supplied design exposed answer copy.
- Original image and SVG assets exported from the supplied Figma file.

## Project Structure

```text
src/app/          App Router pages and global styles
src/components/   Shared and interactive UI components
src/data/         Typed local content and asset paths
public/assets/    Exported Figma assets
```

## Setup

Requires Node.js compatible with Next.js 16 (Node.js 20.9 or newer).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Static checks: `npm run typecheck` and `npm run lint`.

Format source and project configuration with `npm run format`. Use `npm run format:check` to verify formatting without changing files.

## Design Reference

FigCraft MCP (`figcraft://node/3`) with the local `Untitled.fig` document. The landing and product frames in that document provide the page measurements.

## Technical Decisions

Static sections are Server Components. Client Components own the navigation menu, search form, photo gallery, booking date, and FAQ state. Shared header, footer, space cards, and typed content keep the two pages consistent.

## Known Limitations

- The landing and product designs expose 1920px desktop frames. Mobile layouts are adapted from those frames.
- Authentication, newsletter subscription, app-store downloads, and booking require backend destinations not supplied with the assessment. They do not report false success.
- The workspace instructions prohibit running or building the app, so browser and visual regression checks were not performed.
