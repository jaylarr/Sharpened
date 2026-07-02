# Sharpened React Architecture

## Phase

React Architecture

## Scope

This document defines the frontend application architecture for the Sharpened website.

It covers:

- Folder structure.
- Component tree.
- Layouts.
- Pages.
- Hooks.
- Utilities.
- Types.
- Constants.
- Assets.
- SEO components.
- Reusable components.
- Routing.
- State management.
- Future scalability.

No implementation code is included.

## Architecture Goals

The architecture should support a focused, production website with a small launch sitemap and room for future growth.

Primary goals:

- Keep pages thin and readable.
- Keep reusable UI components separate from page content.
- Keep content data structured and type-safe.
- Make SEO metadata route-specific.
- Keep form behavior isolated and testable.
- Avoid premature complexity.
- Support future Resources, Case Studies, FAQ, and Workflow Library pages.

Why:

- UX improves because implementation can follow the approved page flow.
- Conversion improves because CTA and form behavior stay consistent.
- Maintainability improves because shared sections and content are reusable.
- Scalability improves because new pages can be added without rewriting the app shell.

## Current Project Snapshot

Current implementation:

- React 19.
- TypeScript.
- Vite.
- TailwindCSS v4 available.
- React Router dependency available.
- Lucide React available.
- Existing layout foundation in `src/layouts/Layout.tsx`.
- Current `src/App.tsx` renders placeholder foundation content.

Architecture implication:

- The project should evolve from a single placeholder page into a route-driven app.
- The existing `Layout` can become the main site shell.
- Header, footer, and navigation should be extracted from `Layout` once routes are introduced.

## Recommended Folder Structure

```text
src/
  app/
    App.tsx
    router.tsx
    routes.ts
    providers.tsx

  assets/
    images/
    logos/
    diagrams/
    icons/

  components/
    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      Tag.tsx
      Accordion.tsx
      FormField.tsx
      TextareaField.tsx
      SelectField.tsx
      Timeline.tsx
      Section.tsx
      Container.tsx
      CTAGroup.tsx
      PrivacyNote.tsx

    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
      SkipLink.tsx
      Main.tsx

    seo/
      SEO.tsx
      JsonLd.tsx

    sections/
      PageHero.tsx
      ProblemGrid.tsx
      ServicesGrid.tsx
      ProcessTimeline.tsx
      TrustSection.tsx
      FAQSection.tsx
      CTABand.tsx
      ContactFormSection.tsx
      BoundarySection.tsx
      DeliverablesGrid.tsx

  constants/
    navigation.ts
    routes.ts
    seo.ts
    site.ts

  content/
    home.ts
    services.ts
    workflowAssessment.ts
    about.ts
    contact.ts
    privacy.ts
    common.ts
    faq.ts

  hooks/
    useActiveRoute.ts
    useDisclosure.ts
    useReducedMotion.ts
    useScrollToTop.ts
    useContactForm.ts

  layouts/
    SiteLayout.tsx
    LegalLayout.tsx

  pages/
    HomePage.tsx
    ServicesPage.tsx
    WorkflowAssessmentPage.tsx
    AboutPage.tsx
    ContactPage.tsx
    PrivacyPolicyPage.tsx
    NotFoundPage.tsx

  schemas/
    contactSchema.ts
    workflowAssessmentSchema.ts

  styles/
    globals.css

  types/
    content.ts
    forms.ts
    navigation.ts
    seo.ts
    ui.ts

  utils/
    cn.ts
    formatters.ts
    getPageMeta.ts
    scroll.ts
```

## Folder Responsibilities

## `app`

Purpose:

- Own application composition.
- Own routing setup.
- Own global providers.

Files:

- `App.tsx`: top-level app entry for router rendering.
- `router.tsx`: route definitions for React Router.
- `routes.ts`: route objects or route metadata.
- `providers.tsx`: global providers if needed later.

Why:

- Keeps app bootstrapping separate from page and UI concerns.

## `components/ui`

Purpose:

- Small reusable primitives.
- No page-specific business logic.
- Used across sections and pages.

Examples:

- Button.
- Card.
- Accordion.
- Timeline.
- Form fields.
- Section.
- Container.

Rule:

- UI components should accept typed props and render predictable UI.
- They should not import page content directly.

## `components/layout`

Purpose:

- Shared site chrome.

Components:

- Header.
- Footer.
- MobileNav.
- SkipLink.
- Main.

Rule:

- Layout components may read navigation constants.
- Layout components should not know page-specific section data.

## `components/sections`

Purpose:

- Reusable content sections that map to the UI specification.

Examples:

- PageHero.
- ProblemGrid.
- ServicesGrid.
- ProcessTimeline.
- FAQSection.
- CTABand.

Rule:

- Sections receive structured content as props.
- Sections should be reusable across pages when content shape matches.

## `components/seo`

Purpose:

- Route-level SEO metadata.
- Structured data helpers.

Components:

- SEO.
- JsonLd.

Rule:

- Every page should provide title, description, canonical path, and optional Open Graph data.

## `content`

Purpose:

- Store structured page content outside components.

Why:

- Keeps pages maintainable.
- Allows future copy changes without digging through UI logic.
- Supports future CMS migration if needed.

Rule:

- Content objects should satisfy TypeScript content types.
- Do not store layout behavior in content unless it is an intentional variant.

## `constants`

Purpose:

- Shared static config.

Examples:

- Navigation labels.
- Route paths.
- Site name.
- CTA labels.
- SEO defaults.

Rule:

- Avoid duplicating route strings in pages and links.

## `types`

Purpose:

- Shared TypeScript contracts.

Examples:

- Page metadata.
- Navigation item.
- CTA.
- Card content.
- FAQ item.
- Timeline step.
- Form values.

## `hooks`

Purpose:

- Reusable behavior.

Examples:

- Disclosure state for accordions/mobile menu.
- Active route detection.
- Reduced motion preference.
- Contact form orchestration.

Rule:

- Keep hooks small and single-purpose.

## `schemas`

Purpose:

- Zod schemas for form validation.

Planned schemas:

- Contact form.
- Workflow Assessment request form.

Rule:

- Form types should be inferred from schemas where possible once implementation begins.

## `assets`

Purpose:

- Local images, logos, workflow diagrams, and static brand assets.

Recommended subfolders:

- `logos`.
- `images`.
- `diagrams`.
- `icons`.

Rule:

- Keep generated or licensed assets documented.
- Avoid unverified stock assets.

## Routing

## Launch Routes

| Route | Page Component | Layout | Purpose |
|---|---|---|---|
| `/` | `HomePage` | `SiteLayout` | Primary marketing funnel |
| `/services` | `ServicesPage` | `SiteLayout` | Service education |
| `/workflow-assessment` | `WorkflowAssessmentPage` | `SiteLayout` | Primary conversion |
| `/about` | `AboutPage` | `SiteLayout` | Trust and positioning |
| `/contact` | `ContactPage` | `SiteLayout` | Inquiry capture |
| `/privacy-policy` | `PrivacyPolicyPage` | `LegalLayout` or `SiteLayout` | Privacy support |
| `*` | `NotFoundPage` | `SiteLayout` | Recovery |

## Future Routes

| Route | Timing |
|---|---|
| `/resources` | After launch content exists |
| `/resources/:slug` | Future SEO content |
| `/case-studies` | After proof assets exist |
| `/case-studies/:slug` | Future case study detail |
| `/faq` | If FAQ grows |
| `/ssdi-workflow-library` | After framework matures |
| `/industries` | Only after expansion is approved |

## Routing Rules

- Define route paths once in a route constant file.
- Use route constants in navigation, CTAs, and tests.
- Use a catch-all route for Not Found.
- Scroll to top on route change.
- Update metadata on route change.

## Layouts

## `SiteLayout`

Used by:

- Home.
- Services.
- Workflow Assessment.
- About.
- Contact.
- Not Found.

Contains:

- SkipLink.
- Header.
- Main.
- Footer.

Behavior:

- Mobile nav state lives in Header or MobileNav.
- Skip link targets main content.
- Footer is consistent across pages.

## `LegalLayout`

Used by:

- Privacy Policy, if a narrower legal layout is preferred.

Contains:

- Same shell as SiteLayout.
- Narrow content container.
- Optional in-page section navigation on desktop.

Recommendation:

- Start with `SiteLayout` plus page-specific container rules unless legal pages expand.

## Page Architecture

Pages should be orchestration components.

Responsibilities:

- Import page content.
- Render SEO metadata.
- Compose sections.
- Pass content into reusable section components.

Pages should not:

- Contain large hardcoded content blocks if the content can live in `content`.
- Own reusable layout logic.
- Duplicate CTA labels or route paths.

## Component Tree

## App Tree

```text
App
  RouterProvider / BrowserRouter
    SiteLayout
      SkipLink
      Header
        DesktopNav
        MobileNav
      Main
        Page
          SEO
          Sections
      Footer
```

## Home Page Tree

```text
HomePage
  SEO
  PageHero
  ProblemGrid
  SolutionSection
  ServicesGrid
  ProcessTimeline
  TrustSection
  FAQSection
  CTABand
```

## Services Page Tree

```text
ServicesPage
  SEO
  PageHero
  AssessmentGatewaySection
  ServicesGrid
  ProcessTimeline
  BoundarySection
  FAQSection
  CTABand
```

## Workflow Assessment Page Tree

```text
WorkflowAssessmentPage
  SEO
  PageHero
  PersonaGrid
  ReviewChecklistSection
  DeliverablesGrid
  ProcessTimeline
  NextStepsSection
  FAQSection
  ContactFormSection
```

## About Page Tree

```text
AboutPage
  SEO
  PageHero
  StorySection
  FounderFitSection
  MissionVisionSection
  ValuesGrid
  PrinciplesList
  CTABand
```

## Contact Page Tree

```text
ContactPage
  SEO
  PageHero
  ContactFormSection
    FitReminder
    ContactForm
  ProcessTimeline
  AlternateContactSection
```

## Privacy Policy Page Tree

```text
PrivacyPolicyPage
  SEO
  LegalPageHeader
  LegalContent
  CTABand
```

## Not Found Page Tree

```text
NotFoundPage
  SEO
  ErrorRecoverySection
```

## Reusable Components

## UI Primitives

Recommended primitives:

- `Button`.
- `Card`.
- `Badge`.
- `Tag`.
- `Accordion`.
- `Container`.
- `Section`.
- `Timeline`.
- `FormField`.
- `TextareaField`.
- `SelectField`.
- `PrivacyNote`.
- `CTAGroup`.

Why:

- These align directly to the design system and UI specification.
- They reduce repeated markup.
- They keep behavior consistent.

## Section Components

Recommended section components:

- `PageHero`.
- `ProblemGrid`.
- `ServicesGrid`.
- `ProcessTimeline`.
- `TrustSection`.
- `FAQSection`.
- `CTABand`.
- `BoundarySection`.
- `DeliverablesGrid`.
- `ReviewChecklistSection`.
- `ContactFormSection`.

Rule:

- Section components can be opinionated, but they should remain content-driven.

## SEO Components

## `SEO`

Responsibilities:

- Set document title.
- Set meta description.
- Set canonical path.
- Set Open Graph title/description.
- Support noindex for Not Found if desired.

Notes:

- React Router SPAs can update metadata client-side.
- For stronger SEO later, consider prerendering or static generation if content expands.

## `JsonLd`

Future structured data:

- Organization.
- WebSite.
- Service.
- FAQPage where appropriate.

Recommendation:

- Add only when copy and business details are final.

## Content Data Model

Recommended content types:

```text
CTA
  label
  href
  variant
  icon

FAQItem
  question
  answer

CardItem
  title
  description
  icon
  cta

TimelineStep
  title
  description
  icon

PageMeta
  title
  description
  path
  image
```

Content should be split by page:

- `home.ts`.
- `services.ts`.
- `workflowAssessment.ts`.
- `about.ts`.
- `contact.ts`.
- `privacy.ts`.
- `faq.ts`.
- `common.ts`.

Why:

- UX improves because content remains consistent.
- Conversion improves because CTAs can be standardized.
- Maintainability improves because content updates do not require component rewrites.
- Scalability improves because future CMS migration is easier.

## Hooks

## Recommended Hooks

| Hook | Purpose |
|---|---|
| `useActiveRoute` | Determine active nav link |
| `useDisclosure` | Open/close state for mobile nav and accordions |
| `useReducedMotion` | Respect motion preferences |
| `useScrollToTop` | Reset scroll on route change |
| `useContactForm` | Manage form submission state |

## Hook Rules

- Hooks should not import page content.
- Hooks should be behavior-only.
- Hooks should be unit-testable when logic is non-trivial.

## Utilities

## Recommended Utilities

| Utility | Purpose |
|---|---|
| `cn` | Class name composition |
| `getPageMeta` | Resolve route/page metadata |
| `scrollToElement` | Support skip or anchor behavior |
| `formatPhone` | Future contact formatting |
| `assertNever` | Exhaustiveness helper for typed variants |

## Utility Rules

- Keep utilities pure when possible.
- Avoid dumping unrelated helpers into one large file.
- Split by domain if utilities grow.

## Types

## Recommended Type Files

| File | Contents |
|---|---|
| `types/ui.ts` | Button variants, card variants, icon names |
| `types/content.ts` | CTA, FAQ item, card item, timeline step |
| `types/navigation.ts` | Nav item, footer link group |
| `types/seo.ts` | Page metadata, Open Graph metadata |
| `types/forms.ts` | Contact and assessment form types |

## Type Rules

- Prefer explicit types for public component props.
- Infer form values from Zod schemas when implemented.
- Use string unions for variants instead of loose strings.
- Keep component prop types close to components if they are not reused elsewhere.

## Constants

## Recommended Constants

| File | Purpose |
|---|---|
| `constants/routes.ts` | Route paths |
| `constants/navigation.ts` | Header/footer navigation |
| `constants/site.ts` | Site name, domain, contact placeholders |
| `constants/seo.ts` | Default SEO fallback data |

## Constants Rules

- Do not duplicate route strings.
- CTA labels should be reused from common content or constants.
- Keep missing client inputs clearly marked until confirmed.

## Assets

## Asset Categories

| Folder | Purpose |
|---|---|
| `assets/logos` | Logo, mark, favicon source |
| `assets/images` | Approved photography |
| `assets/diagrams` | Workflow diagrams and assessment visuals |
| `assets/icons` | Custom icons only if Lucide is insufficient |

## Asset Rules

- Prefer Lucide React for icons.
- Use local optimized assets for production visuals.
- Avoid unverified stock imagery.
- Track source/license for photography.
- Add alt text strategy when assets are selected.

## Forms and Validation

## Planned Forms

1. Contact form.
2. Workflow Assessment request form.

## Validation

Use Zod schemas for:

- Required fields.
- Email format.
- Message length.
- Optional fields.
- Privacy-safe helper messaging.

## Submission State

Expected states:

- Idle.
- Validating.
- Submitting.
- Success.
- Error.

Recommendation:

- Keep form state local unless a global lead workflow is introduced.
- Do not add global state management for simple forms.

## State Management

## Launch State Strategy

Use local React state for:

- Mobile navigation open/closed.
- Accordion open/closed.
- Form field and submission state.
- Temporary UI states.

Avoid global state at launch.

Why:

- The site is mostly static marketing content.
- Global state would add complexity without user value.
- Local state is easier to test and maintain.

## Future State Needs

Consider broader state only if the site adds:

- Authenticated client portal.
- Multi-step assessment wizard.
- Saved user progress.
- Dynamic resources from an API.
- Complex filters/search.

## Routing Strategy

Recommendation:

- Use React Router with browser routing.
- Keep route config centralized.
- Use route-level lazy loading only when page weight grows.

## Route Metadata

Each route should define:

- Path.
- Label.
- Page component.
- SEO title.
- SEO description.
- Navigation visibility.

Why:

- Navigation, routing, and SEO stay aligned.
- Future sitemap generation becomes easier.

## Testing Strategy

Recommended coverage:

- Layout shell renders skip link, header, main, footer.
- Navigation links use correct routes.
- Active route state works.
- Accordion toggles accessibly.
- Forms validate required fields.
- Form success and error states render.
- Pages render one H1.
- Not Found route renders recovery links.

Testing tools:

- Vitest.
- React Testing Library.
- jest-dom.

## Performance Strategy

## Launch

- Keep page components lightweight.
- Avoid unnecessary client state.
- Optimize local images.
- Use SVG/icon components sparingly and consistently.
- Avoid heavy animation.
- Avoid loading unused assets.

## Future

- Lazy-load future content-heavy pages.
- Split resource/case study detail pages if needed.
- Consider prerendering if SEO content expands.

## Accessibility Strategy

Architecture must support:

- Skip link.
- Semantic landmarks.
- One H1 per page.
- Keyboard-accessible navigation.
- Keyboard-accessible accordions.
- Visible focus states.
- Form labels and field errors.
- Reduced motion preference.
- Accessible icon usage.

## Future Scalability

## Future Content Growth

The architecture supports:

- Resources listing and detail pages.
- Case study listing and detail pages.
- FAQ page.
- SSDI Workflow Library.
- Industry expansion.

## Future CMS Migration

The content folder should use structured objects now so a future CMS can replace local data with minimal page rewrite.

CMS-ready boundaries:

- Page content objects.
- Card lists.
- FAQ items.
- Timeline steps.
- SEO metadata.

## Future Service Expansion

If services expand:

- Add service detail routes only after there is enough unique content.
- Keep service cards driven by content data.
- Use route constants to avoid link drift.

## Implementation Order Recommendation

When implementation is approved, build in this order:

1. Route constants and app router.
2. SiteLayout, Header, Footer, SkipLink.
3. UI primitives: Button, Container, Section, Card.
4. SEO component.
5. Content data structures and types.
6. Home page sections.
7. Services page.
8. Workflow Assessment page.
9. Contact form and validation.
10. About, Privacy, Not Found.
11. Tests and QA.

## Architecture Risks

## Risk 1: Over-Componentizing Too Early

Problem:

- Too many tiny abstractions can slow development.

Recommendation:

- Extract reusable pieces only when they repeat or map clearly to the design system.

## Risk 2: Hardcoding Content Inside Components

Problem:

- Future copy changes become expensive.

Recommendation:

- Keep page content in typed content files.

## Risk 3: Adding Global State Too Soon

Problem:

- Global state adds complexity without solving a current problem.

Recommendation:

- Use local state at launch.

## Risk 4: SEO Afterthought

Problem:

- Metadata can become inconsistent across routes.

Recommendation:

- Add route-level metadata before page implementation expands.

## Risk 5: Asset Drift

Problem:

- Random stock imagery or icons can weaken the brand.

Recommendation:

- Centralize approved assets and icon mapping.

## Final React Architecture Summary

Sharpened should use a route-driven, content-driven React architecture. Pages should compose reusable sections from typed content. The app should keep global state minimal, centralize routes and SEO metadata, and use reusable UI primitives aligned with the production design system.

This architecture is intentionally conservative. It supports the current launch website without adding unnecessary application complexity, while leaving clear paths for future resources, case studies, workflow libraries, and service expansion.

No implementation code was created in this phase.
