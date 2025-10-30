# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SilverStock is a marketing/demo website for an inventory management and point-of-sale application targeting French retail businesses. Built with SvelteKit 5, it features extensive documentation pages, contact forms, and animated marketing content.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier

### Testing
- `npm run test` - Run Playwright e2e tests
- `npm run test:unit` - Run Vitest unit tests

## Architecture

### Tech Stack
- **Framework**: SvelteKit 2 with Svelte 5 (using runes)
- **Styling**: TailwindCSS + Flowbite-Svelte components
- **Animations**: GSAP with ScrollTrigger
- **Forms**: sveltekit-superforms with Zod validation
- **Email**: Mailgun integration for contact form
- **Deployment**: Vercel (analytics and speed insights integrated)

### Directory Structure

```
src/
├── lib/
│   └── components/          # Reusable Svelte components
│       └── +server.js       # Image data exports
├── routes/
│   ├── +layout.svelte       # Root layout with Nav/Footer
│   ├── +layout.js           # Vercel analytics injection
│   ├── +page.svelte         # Home page
│   ├── contact/             # Contact form with server actions
│   ├── fonctionnalite/      # Features page
│   ├── entreprise/          # Company page
│   └── assistance/          # Extensive documentation tree
│       ├── installation/    # Installation guides (Windows/macOS)
│       ├── configuration/   # Configuration docs
│       └── utilisation/     # Feature usage guides
└── app.postcss             # TailwindCSS imports

static/
├── pdf/                    # PDF documentation files
├── svg/                    # Icon assets
└── videos/                 # Tutorial videos
```

### Routing & Pages

This is a documentation-heavy site with nested routes under `/assistance/`:
- Documentation follows a hierarchical structure (installation → configuration → usage)
- Each documentation page embeds PDF files from `/static/pdf/`
- All routes are **French language**

### Component Patterns

#### Layout Components
- `Nav.svelte` - Main navigation (included in root layout)
- `Footer.svelte` - Site footer (included in root layout)
- All pages automatically get Nav/Footer via `+layout.svelte`

#### Marketing Components
Marketing components accept configuration objects as props:
- `CTA.svelte` / `LeftCTA.svelte` - Call-to-action sections with GSAP scroll animations
- `HomeBanners.svelte` - Hero section with background images
- `ThreeIcons.svelte` - Icon feature grid
- `Statistics.svelte`, `PricingCards.svelte`, etc.

Example prop pattern:
```javascript
let ctaData = {
  title: 'Section Title',
  content: 'Section description...',
  src: '/image.jpg',
  alt: 'Alt text'
};
```

### GSAP Animation Patterns

GSAP animations use ScrollTrigger and follow a consistent pattern:

1. **Component-scoped triggers** - Use `bind:this={sectionRef}` and query within that ref
2. **Proper cleanup** - Store ScrollTrigger instances and kill them on component destroy
3. **Register plugin in onMount** - Always call `gsap.registerPlugin(ScrollTrigger)`

Example from `CTA.svelte:18-68`:
```javascript
let ctaSection;

onMount(() => {
  gsap.registerPlugin(ScrollTrigger);
  const triggers = [];

  const ctaContent = ctaSection.querySelector('.cta-content');
  const ctaImage = ctaSection.querySelector('.cta-image');

  const contentAnim = gsap.fromTo(
    ctaContent,
    { opacity: 0, x: -60 },
    {
      opacity: 1, x: 0, ease: 'power2.out',
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 2
      }
    }
  );
  if (contentAnim.scrollTrigger) triggers.push(contentAnim.scrollTrigger);

  return () => {
    triggers.forEach(trigger => trigger.kill());
  };
});
```

**Important**: Root pages like `+page.svelte:16` call `ScrollTrigger.refresh()` after component mount.

### Form Handling

Contact form (`src/routes/contact/+page.server.js`) uses:
- Zod schemas for validation (French error messages)
- sveltekit-superforms for form handling
- Mailgun for email delivery
- Environment variables: `PRIVATE_MAILGUN_KEY`, `PRIVATE_DOMAIN_NAME`

Validation includes:
- HTML/JavaScript injection prevention via regex transforms
- French phone number format validation (`/^(\+33|0)\d{9}$/`)
- Name format validation (letters, spaces, hyphens, apostrophes only)

### Styling

- **TailwindCSS** with Flowbite plugin configured
- **Dark mode** enabled via `class` strategy (`tailwind.config.cjs:15`)
- **PostCSS** with autoprefixer
- **Sass** preprocessor available (using modern compiler API)
- Inline `<style>` blocks for component-specific styles (SVG backgrounds, custom heights)

### Environment Configuration

- Vercel analytics injected in `+layout.js` (mode based on dev environment)
- Vite config includes:
  - Vitest for unit tests (searches `src/**/*.{test,spec}.{js,ts}`)
  - SCSS modern compiler
  - SSR externals: `sveltekit-superforms`
  - Relaxed filesystem restrictions

## Development Notes

### When Adding GSAP Animations
1. Always use `bind:this={refName}` to scope selector queries
2. Register ScrollTrigger in `onMount`
3. Store trigger instances and kill them in cleanup return function
4. Use `scrub` for scroll-linked animations

### When Adding Forms
1. Define Zod schema with French error messages
2. Use `superValidate` in both load function and form actions
3. Include XSS prevention transforms for text inputs
4. Return `fail(400, { form })` on validation errors

### When Adding Documentation Pages
- Follow existing nested route structure under `/assistance/`
- Link to PDF files in `/static/pdf/`
- Use consistent component patterns from existing docs pages
- All content should be in French

### MCP Server
The Svelte MCP server is configured and should be used for:
- Checking Svelte 5 syntax (especially runes usage)
- Validating component code before committing
- Getting official Svelte documentation
