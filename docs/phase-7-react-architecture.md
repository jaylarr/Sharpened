# Sharpened Website - Phase 7 React Architecture

Date: 2026-07-01  
Phase: Phase 7 - React Architecture  
Tech stack: React, TypeScript, TailwindCSS, Vite  
Foundation:

- `docs/phase-2-ux-strategy-information-architecture.md`
- `docs/phase-3-content-strategy-blueprint.md`
- `docs/phase-4-design-system.md`
- `docs/phase-5-wireframes.md`
- `docs/phase-6-high-fidelity-ui-specification.md`

## Scope

This document defines the frontend architecture for the Sharpened website. It covers folder structure, routing, component tree, reusable components, hooks, utilities, types, constants, assets, SEO components, layouts, pages, data structure, and best practices.

This phase does not include implementation code.

## Architectural Principles

- Use a content-driven architecture so page copy, service cards, FAQs, process steps, and navigation can be updated without rewriting page layouts.
- Keep route-level pages thin. Pages should compose sections and pass typed content into reusable components.
- Separate UI primitives from business/domain components.
- Keep components accessible by default.
- Keep SEO metadata route-specific and typed.
- Keep design tokens centralized so Tailwind implementation maps to the approved design system.
- Avoid premature abstraction. Create reusable components around repeated patterns already validated in Phases 3-6.
- Prioritize static performance for Cloudflare Pages.

Why: the site will grow from a focused launch into resources, case studies, and service-detail pages.  
How it improves UX: pages stay consistent and predictable across the funnel.  
How it improves conversion: CTA and trust patterns remain consistent across routes.  
How it improves maintainability: content and components can evolve independently.  
How it improves scalability: new pages can be composed from existing section and content models.

## Recommended Folder Structure

```text
sharpened/
  public/
    favicon/
    images/
    og/
    robots.txt
  src/
    app/
      App.tsx
      router.tsx
      providers/
      error-boundary/
    assets/
      brand/
      icons/
      illustrations/
      photos/
    components/
      ui/
      layout/
      sections/
      seo/
      forms/
      navigation/
      feedback/
    constants/
      brand.ts
      routes.ts
      site.ts
      seo.ts
      navigation.ts
    content/
      pages/
      shared/
      resources/
      services/
      faq/
    data/
      services.ts
      processSteps.ts
      values.ts
      faqs.ts
      navigation.ts
      footer.ts
    hooks/
      useActiveRoute.ts
      useDisclosure.ts
      useFormStatus.ts
      usePrefersReducedMotion.ts
      useScrollToHash.ts
    layouts/
      MarketingLayout.tsx
      LegalLayout.tsx
      ResourceLayout.tsx
    lib/
      analytics/
      seo/
      validation/
      forms/
    pages/
      HomePage.tsx
      AboutPage.tsx
      ServicesPage.tsx
      WorkflowAssessmentPage.tsx
      OperationsOptimizationPage.tsx
      IndustriesPage.tsx
      WhySharpenedPage.tsx
      ContactPage.tsx
      ResourcesPage.tsx
      FAQPage.tsx
      PrivacyPolicyPage.tsx
      NotFoundPage.tsx
    styles/
      globals.css
      tokens.css
    types/
      content.ts
      seo.ts
      forms.ts
      navigation.ts
      routes.ts
    utils/
      cn.ts
      format.ts
      routes.ts
      seo.ts
      validation.ts
    main.tsx
```

Notes:

- The exact file extensions are implementation details, but TypeScript files should be used for typed content, constants, and utilities.
- If content grows substantially, `content/` can later move to MDX or a headless CMS without changing the page composition model.

## Routing

Use React Router with a central route registry.

### Launch Routes

| Route | Page | Layout | Priority |
|---|---|---|---|
| `/` | HomePage | MarketingLayout | Core conversion |
| `/services` | ServicesPage | MarketingLayout | Decision support |
| `/ssdi-workflow-assessment` | WorkflowAssessmentPage | MarketingLayout | Primary conversion |
| `/ssdi-operations-optimization-system` | OperationsOptimizationPage | MarketingLayout | Decision support |
| `/industries` | IndustriesPage | MarketingLayout | Audience clarity |
| `/why-sharpened` | WhySharpenedPage | MarketingLayout | Trust |
| `/about` | AboutPage | MarketingLayout | Trust |
| `/contact` | ContactPage | MarketingLayout | Conversion |
| `/resources` | ResourcesPage | ResourceLayout | Authority |
| `/faq` | FAQPage | MarketingLayout | Objection handling |
| `/privacy-policy` | PrivacyPolicyPage | LegalLayout | Trust/compliance |
| `*` | NotFoundPage | MarketingLayout | Recovery |

### Future Routes

| Route | Page Pattern |
|---|---|
| `/services/intake-automation` | ServiceDetailPage |
| `/services/filing-workflow-automation` | ServiceDetailPage |
| `/services/case-management-automation` | ServiceDetailPage |
| `/services/client-follow-up-automation` | ServiceDetailPage |
| `/ssdi-operations-framework` | FrameworkPage |
| `/case-studies` | CaseStudiesIndexPage |
| `/case-studies/:slug` | CaseStudyDetailPage |
| `/insights` | InsightsIndexPage |
| `/insights/:slug` | InsightDetailPage |
| `/industries/disability-advocates` | IndustryDetailPage |
| `/industries/law-firms` | IndustryDetailPage |
| `/industries/professional-services` | IndustryDetailPage |

Routing best practices:

- Keep route paths centralized in `constants/routes.ts`.
- Navigation should consume the same route constants.
- SEO metadata should map to route IDs or page keys.
- Use hash links only for stable page anchors such as process or FAQ sections.
- Provide a useful Not Found page with links to Home, Services, Workflow Assessment, and Contact.

## Layouts

## Layout: MarketingLayout

Purpose:

- Standard layout for conversion and decision-support pages.

Component tree:

```text
MarketingLayout
  Header
  main
    Outlet / Page
  Footer
```

Responsibilities:

- Render global header and footer.
- Provide skip link target.
- Provide consistent page background.
- Support route transitions if implemented.
- Keep footer CTA available.

## Layout: LegalLayout

Purpose:

- Focused layout for Privacy Policy and future legal utility pages.

Component tree:

```text
LegalLayout
  Header
  main
    LegalPageHeader
    ReadableContent
  Footer
```

Responsibilities:

- Use narrow readable container.
- Avoid aggressive CTA treatment.
- Preserve navigation and contact recovery.

## Layout: ResourceLayout

Purpose:

- Support Resources, future Insights, and Case Studies.

Component tree:

```text
ResourceLayout
  Header
  main
    Outlet / Page
  Footer
```

Responsibilities:

- Support article/resource cards.
- Support future filters and categories.
- Route readers back to Workflow Assessment.

## Page Architecture

## HomePage

Component tree:

```text
HomePage
  SEO
  HeroSection
  ProblemSection
  OutcomesSection
  ServicesSnapshotSection
  WhySharpenedSection
  ProcessSection
  CTASection
  FAQPreviewSection
  FinalCTASection
```

Data sources:

- `content/pages/home`
- `data/services`
- `data/processSteps`
- `data/faqs`
- `data/values`

Conversion path:

- Primary CTA routes to `/ssdi-workflow-assessment`.
- Secondary CTA routes or scrolls to process/services section.

## AboutPage

Component tree:

```text
AboutPage
  SEO
  AboutHeroSection
  OriginStorySection
  MissionVisionSection
  ValuesSection
  HowWeWorkSection
  CTASection
```

Data sources:

- `content/pages/about`
- `data/values`
- `data/processSteps`

## ServicesPage

Component tree:

```text
ServicesPage
  SEO
  ServicesHeroSection
  ServicesProblemSection
  ServiceGroupsSection
  ServiceJourneySection
  BenefitsTrustSection
  FAQPreviewSection
  CTASection
```

Data sources:

- `content/pages/services`
- `data/services`
- `data/processSteps`
- `data/faqs`

## WorkflowAssessmentPage

Component tree:

```text
WorkflowAssessmentPage
  SEO
  AssessmentHeroSection
  AudienceFitSection
  ProblemsUncoveredSection
  ScopeReviewedSection
  AssessmentProcessSection
  DeliverablesTrustSection
  AssessmentFAQSection
  FinalCTASection
```

Data sources:

- `content/pages/workflowAssessment`
- `data/faqs`
- `data/processSteps`

## OperationsOptimizationPage

Component tree:

```text
OperationsOptimizationPage
  SEO
  PageHeroSection
  ProblemSolutionSection
  WorkstreamsSection
  ImplementationProcessSection
  DocumentationQASection
  FAQPreviewSection
  CTASection
```

Data sources:

- `content/pages/operationsOptimization`
- `data/processSteps`
- `data/faqs`

## IndustriesPage

Component tree:

```text
IndustriesPage
  SEO
  PageHeroSection
  PrimaryIndustrySection
  FutureIndustriesSection
  IndustryFitCTASection
```

Data sources:

- `content/pages/industries`
- `data/industries`

## WhySharpenedPage

Component tree:

```text
WhySharpenedPage
  SEO
  PageHeroSection
  DifferentiationSection
  ComparisonSection
  ValuesSection
  ProcessSection
  CTASection
```

Data sources:

- `content/pages/whySharpened`
- `data/values`
- `data/processSteps`

## ContactPage

Component tree:

```text
ContactPage
  SEO
  ContactHeroSection
  ContactFormSection
  WhatHappensNextSection
  ContactFAQPreviewSection
```

Data sources:

- `content/pages/contact`
- `data/faqs`
- `data/processSteps`

Form dependencies:

- React Hook Form.
- Zod schema.
- Future form submission adapter.

## ResourcesPage

Component tree:

```text
ResourcesPage
  SEO
  ResourceHeroSection
  ResourceCategorySection
  FeaturedResourceSection
  ResourceGridSection
  CTASection
```

Data sources:

- `content/pages/resources`
- `content/resources`

Launch behavior:

- If no resources exist yet, show an authority-focused intro and CTA rather than an empty grid.

## FAQPage

Component tree:

```text
FAQPage
  SEO
  FAQHeroSection
  FAQCategoryNav
  FAQAccordionGroups
  CTASection
```

Data sources:

- `data/faqs`

## PrivacyPolicyPage

Component tree:

```text
PrivacyPolicyPage
  SEO
  LegalPageHeader
  PrivacyContent
  PrivacyContactCTA
```

Data sources:

- `content/pages/privacyPolicy`

## Component Organization

## UI Primitives

Folder: `components/ui/`

Recommended components:

- Button.
- LinkButton.
- Card.
- Badge.
- SectionHeader.
- Container.
- IconWrapper.
- Accordion.
- Input.
- Textarea.
- Select.
- Checkbox.
- FormField.
- Skeleton.
- Alert.

Purpose:

- Low-level reusable building blocks.
- No Sharpened-specific business logic.
- Accept accessible labels and semantic props.

## Layout Components

Folder: `components/layout/`

Recommended components:

- PageShell.
- Container.
- Section.
- SplitSection.
- Grid.
- Stack.
- ReadableContent.

Purpose:

- Enforce layout rhythm and container widths.
- Avoid repeating layout wrappers across sections.

## Navigation Components

Folder: `components/navigation/`

Recommended components:

- Header.
- DesktopNav.
- MobileNav.
- Footer.
- FooterLinkGroup.
- SkipLink.

Purpose:

- Route-aware navigation.
- Mobile menu behavior.
- Footer link grouping.

## Section Components

Folder: `components/sections/`

Recommended components:

- HeroSection.
- ProblemSection.
- BenefitsSection.
- ServicesSnapshotSection.
- ProcessSection.
- CTASection.
- FAQPreviewSection.
- TrustSection.
- ValuesSection.
- ContactOptionsSection.
- ResourceGridSection.

Purpose:

- Reusable section-level components tied to marketing page structure.
- Should accept typed content objects rather than hard-coded copy.

## Domain Components

Folder: `components/sections/` or `components/domain/` if the site grows.

Recommended components:

- ServiceCard.
- ValueCard.
- ProcessStep.
- WorkflowVisual.
- AssessmentInquiryPanel.
- TrustPanel.
- ResourceCard.
- IndustryCard.

Purpose:

- Sharpened-specific display patterns.
- Reuse across pages without mixing with primitive UI components.

## Form Components

Folder: `components/forms/`

Recommended components:

- ContactForm.
- AssessmentInquiryForm.
- FormSuccessMessage.
- FormErrorSummary.

Purpose:

- Encapsulate React Hook Form and Zod usage.
- Keep field components reusable.
- Keep submission adapter separate from presentation.

## SEO Components

Folder: `components/seo/`

Recommended components:

- SEO.
- JsonLd.
- BreadcrumbJsonLd.
- OrganizationJsonLd.
- FAQJsonLd.

Purpose:

- Set route-level title, description, canonical URL, OG data, and structured data.
- Keep metadata centralized and typed.

## Routing Components

Folder: `app/`

Recommended components:

- App.
- RouterProvider setup.
- ErrorBoundary.
- RouteFallback.
- ScrollRestoration behavior.

Purpose:

- App-level composition.
- Route-level recovery.

## Hooks

Folder: `hooks/`

Recommended hooks:

| Hook | Purpose |
|---|---|
| `useActiveRoute` | Determine active nav link from current route |
| `useDisclosure` | Toggle mobile menu, accordions, or future dialogs |
| `useFormStatus` | Normalize loading/success/error form states |
| `usePrefersReducedMotion` | Respect reduced-motion preference |
| `useScrollToHash` | Support anchor navigation after route load |
| `useLockBodyScroll` | Lock scroll for mobile menu or future modal |
| `useClickOutside` | Close mobile menu/dropdowns |

Hook best practices:

- Keep hooks focused and framework-agnostic where possible.
- Avoid hooks that mix routing, UI state, and analytics in one place.
- Put browser-only behavior behind effects to avoid hydration-like assumptions if SSR is added later.

## Utilities

Folder: `utils/`

Recommended utilities:

| Utility | Purpose |
|---|---|
| `cn` | Class name composition helper |
| `buildRoute` | Safe route construction for known route constants |
| `isExternalUrl` | Determine link behavior |
| `slugify` | Future resources/case studies |
| `formatPhone` | Future contact display |
| `getSeoMeta` | Resolve page SEO metadata |
| `getFaqByCategory` | Group FAQ entries |
| `validateEmail` | Shared validation helper if needed outside Zod |

Utility best practices:

- Keep utilities pure.
- Prefer typed route constants over string duplication.
- Do not put component logic in utilities.

## Types

Folder: `types/`

Recommended type groups:

### Content Types

- PageContent.
- HeroContent.
- SectionHeaderContent.
- CTAContent.
- ServiceContent.
- BenefitContent.
- ProcessStepContent.
- FAQItem.
- ValueContent.
- ResourceContent.
- IndustryContent.

### SEO Types

- PageSeoMeta.
- OpenGraphMeta.
- JsonLdConfig.
- BreadcrumbItem.

### Form Types

- ContactFormValues.
- AssessmentInquiryValues.
- FormSubmissionState.
- WorkflowArea.

### Navigation Types

- NavItem.
- FooterLinkGroup.
- RouteId.

Typing best practices:

- Content arrays should be typed at declaration.
- Use discriminated unions for card variants only if variants behave differently.
- Do not over-type every styling choice; keep types focused on data shape and component contracts.

## Constants

Folder: `constants/`

Recommended constants:

| File | Contents |
|---|---|
| `brand.ts` | Brand name, tagline options, colors as semantic references |
| `routes.ts` | Route IDs and paths |
| `site.ts` | Site URL, contact email, social links, default locale |
| `navigation.ts` | Header and footer link definitions |
| `seo.ts` | Default title template, default OG image, default description |
| `forms.ts` | Workflow area options, form labels, success copy keys |

Best practices:

- Route paths should not be duplicated in page components.
- Navigation should reference route constants.
- Contact details should live in one place until a CMS exists.

## Assets

Folder: `assets/` and `public/`

Recommended structure:

```text
assets/
  brand/
    logo.svg
    logo-mark.svg
  icons/
  illustrations/
    workflow-map.svg
    assessment-roadmap.svg
  photos/
    team/
    workspace/
public/
  images/
  og/
```

Asset rules:

- SVG logo and illustrations should be optimized.
- Photos should use defined aspect ratios.
- Production should not ship placeholder stock.
- OG images should be stored in public or generated through a defined build workflow later.
- Decorative assets should not be required for layout integrity.

## Data Structure

## Navigation Data

Purpose:

- Drive header and footer from a single source of truth.

Recommended shape:

- id.
- label.
- path.
- isPrimaryCTA.
- showInHeader.
- showInFooter.
- group.

## Service Data

Purpose:

- Reuse service definitions across Home, Services, future detail pages, and internal linking.

Recommended shape:

- id.
- title.
- shortDescription.
- longDescription.
- icon.
- route.
- status: launch or future.
- relatedFaqIds.
- relatedProcessStepIds.
- primaryCta.

## FAQ Data

Purpose:

- Reuse FAQ content across FAQ page and previews.

Recommended shape:

- id.
- category.
- question.
- answer.
- relatedRoutes.
- priority.
- showOnPages.

## Process Step Data

Purpose:

- Reuse assessment and implementation process steps.

Recommended shape:

- id.
- title.
- description.
- icon.
- order.
- processType: assessment, implementation, general.

## Page Content Data

Purpose:

- Keep route-level copy organized and typed.

Recommended shape:

- seo.
- hero.
- sections.
- primaryCta.
- secondaryCta.

Content best practices:

- Keep page content close to page route key.
- Reuse shared arrays where the same service/process/FAQ appears on multiple pages.
- Do not hard-code repeated CTA labels across pages.

## SEO Architecture

## SEO Component

Purpose:

- Provide route-level metadata in one predictable component.

Responsibilities:

- Page title.
- Meta description.
- Canonical URL.
- Open Graph title, description, image.
- Twitter card metadata if used.
- Noindex support for internal/future pages if needed.

## Structured Data

Recommended structured data:

- Organization schema.
- Website schema.
- FAQ schema for FAQ page and major FAQ sections.
- Breadcrumb schema for future nested routes.
- Article schema for future insights/resources.

SEO best practices:

- Every route needs a unique title and description.
- H1 must match page intent but should not be mechanically identical to meta title.
- Use canonical URLs for all public routes.
- Do not index unfinished future pages.
- Use descriptive image alt text for meaningful images.
- Keep route slugs human-readable and stable.

## Form Architecture

Recommended approach:

- Use React Hook Form for form state.
- Use Zod for validation schemas.
- Keep form UI components separate from schema and submission logic.
- Create a form submission adapter that can later connect to email, CRM, serverless endpoint, or third-party booking tool.

Form modules:

- `lib/validation/contactSchema`.
- `lib/validation/assessmentSchema`.
- `lib/forms/submitContact`.
- `lib/forms/submitAssessmentInquiry`.

Form best practices:

- Do not ask for sensitive client/claimant data.
- Preserve field values after submission errors.
- Show field-level and form-level errors.
- Disable duplicate submissions.
- Provide success message with next-step expectation.

## TailwindCSS Architecture

Implementation should map the Phase 4 design system into Tailwind theme configuration.

Token categories:

- Colors.
- Font families.
- Font sizes.
- Spacing.
- Border radius.
- Shadows/elevation.
- Container widths.
- Breakpoints.

Best practices:

- Prefer semantic utility composition through components over scattered one-off class strings.
- Keep repeated style patterns inside reusable components.
- Do not create many arbitrary values if the token scale already covers the need.
- Keep yellow accent usage controlled through CTA and highlight components.
- Avoid nested card styling patterns.

## Vite Architecture

Recommended Vite responsibilities:

- Fast local development.
- Static production build for Cloudflare Pages.
- Asset optimization pipeline.
- Environment variable exposure only for public, non-secret values.

Environment variables:

- Public site URL.
- Public contact endpoint URL, if used.
- Analytics ID, if used.

Best practices:

- Do not expose secrets in client-side environment variables.
- Keep build output compatible with Cloudflare Pages.
- Add redirects/SPA fallback configuration when deployment phase begins.

## Component Tree Overview

```text
App
  Router
    MarketingLayout
      Header
        DesktopNav
        MobileNav
      Page
        SEO
        Page-specific sections
          SectionHeader
          Cards / Forms / ProcessSteps / CTASection / FAQAccordion
      Footer
    LegalLayout
      Header
      Legal page content
      Footer
    ResourceLayout
      Header
      Resource page content
      Footer
```

## Reusable Component Inventory

Must build for launch:

- Header.
- MobileNav.
- Footer.
- Button.
- Card.
- Badge.
- SectionHeader.
- CTASection.
- ProcessSteps.
- FAQAccordion.
- ServiceCard.
- BenefitCard.
- ValueCard.
- TrustPanel.
- WorkflowVisual.
- ContactForm.
- AssessmentInquiryPanel.
- SEO.

Build when needed:

- ResourceCard.
- IndustryCard.
- ServiceDetailTemplate.
- LegalContent.
- Breadcrumbs.
- JsonLd variants.
- CaseStudyCard.
- CategoryFilter.

## Page Template Strategy

Use explicit page components for launch pages rather than a generic page renderer.

Why:

- Each launch page has a distinct conversion role.
- Explicit pages are easier to review and optimize.
- Content-driven sections still prevent duplication.

Future templates:

- ServiceDetailTemplate for service-specific pages.
- ResourceDetailTemplate for insights.
- CaseStudyTemplate for case studies.
- IndustryDetailTemplate for future industry pages.

## Accessibility Architecture

Required practices:

- Skip link in PageShell or MarketingLayout.
- Semantic landmarks: header, main, footer.
- One H1 per route.
- Route changes should move focus to main heading or page wrapper if implemented.
- Mobile menu must trap or manage focus appropriately when open.
- Accordion must be keyboard accessible.
- Forms need labels, descriptions, error associations.
- Buttons and links must be semantically correct.
- Reduced-motion hook should inform animation components.

## Performance Architecture

Recommended practices:

- Route-level lazy loading for non-critical future pages.
- Optimize image assets before production.
- Lazy-load below-fold images.
- Use fixed aspect ratios for media to avoid layout shift.
- Avoid heavy animation libraries for simple interactions.
- Import icons individually to support tree-shaking.
- Keep content data static where possible.
- Avoid client-side fetching for launch content unless a CMS is introduced.

## Testing Architecture

Recommended testing layers:

- Component tests for Button, Header, MobileNav, FAQAccordion, ContactForm.
- Validation tests for Zod schemas.
- Route smoke tests for all launch routes.
- Accessibility checks for navigation, forms, accordions, and headings.
- Visual regression later if the project adds Playwright.

Recommended manual checks:

- Desktop, tablet, and mobile navigation.
- CTA routes.
- Form validation states.
- FAQ keyboard behavior.
- Reduced-motion behavior.
- SEO metadata per page.

## Analytics Architecture - Future

Do not overbuild analytics before launch, but reserve clean event boundaries.

Recommended events:

- Primary CTA click.
- Secondary CTA click.
- Contact form submit success.
- Contact form submit error.
- Assessment inquiry started.
- Assessment inquiry submitted.
- FAQ item opened.
- Resource lead magnet downloaded, future.

Best practices:

- Keep analytics calls in a small adapter.
- Do not scatter analytics logic across UI components.
- Avoid collecting sensitive user-entered message content.

## Best Practices

### React

- Keep components small and purpose-specific.
- Prefer composition over large configurable components.
- Keep page components readable.
- Do not hard-code repeated content in components.
- Use controlled complexity: not every section needs its own abstraction until repeated.

### TypeScript

- Type content data and component props.
- Avoid `any`.
- Use route IDs and content IDs instead of duplicated strings.
- Keep form types derived from validation schemas where possible.

### TailwindCSS

- Map tokens from the design system.
- Centralize repeated patterns into reusable components.
- Avoid arbitrary values unless justified by design tokens.
- Keep class composition readable.

### SEO

- Unique metadata per route.
- Canonical URLs.
- Semantic headings.
- Structured data where useful.
- Clean internal links.

### Accessibility

- Design keyboard-first for navigation, forms, and accordions.
- Maintain color contrast.
- Respect reduced motion.
- Use visible focus states.
- Keep forms clear and forgiving.

### Maintainability

- Put business content in typed data/content files.
- Put display logic in components.
- Put app-level concerns in `app/`.
- Keep constants centralized.
- Add future CMS only after content scale justifies it.

## Architecture Risks

- Over-abstracting too early could make launch pages harder to tune for conversion.
- Hard-coding content into components would slow future updates.
- Building routes for future pages before content exists could create thin, low-quality pages.
- Adding a CMS too early would increase complexity without immediate value.
- Overusing animations or heavy media could hurt performance and professional tone.

Recommended approach:

- Build the launch site with explicit pages, reusable sections, typed content, and clear route constants.
- Add future templates after the first repeated service/resource/case-study page is approved.

## Phase 7 Conclusion

The recommended frontend architecture is a content-driven React + TypeScript + TailwindCSS + Vite marketing site optimized for Cloudflare Pages. It uses explicit route-level pages, reusable section components, typed content/data structures, centralized route and SEO constants, accessible UI primitives, and a scalable asset and content model.

No implementation code has been created in this phase.
