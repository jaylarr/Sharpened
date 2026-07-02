# Phase 10 - Launch Preparation

## Launch Readiness Summary

The project is not ready for public launch yet. The current React app builds successfully and passes its existing tests, but implementation has only reached the Phase 8 layout foundation. The site still needs real navigation, footer structure, homepage content, service pages, workflow assessment, contact flow, SEO metadata, robots/sitemap assets, custom 404 handling, analytics decisions, security headers, and Cloudflare Pages configuration.

This document prepares the production deployment plan without changing application code.

## Current Verification Baseline

| Area | Status | Evidence |
| --- | --- | --- |
| Tests | Passing | `npm.cmd test -- src/App.test.tsx src/layouts/Layout.test.tsx` passed 2 test files and 2 tests. |
| Production build | Passing | `npm.cmd run build` completed `tsc -b && vite build`. |
| Build output | Present | Vite generated `dist/` with HTML, CSS, and JS assets. |
| Launch readiness | Not ready | The live site experience is still a placeholder foundation. |
| Git readiness | Not ready | Previous QA found the `.git` directory is not a valid repository. |

## Source Guidance Used

- [Cloudflare Pages React deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/)
- [Cloudflare Pages custom headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Google Search Central robots.txt guide](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google Search Central sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Open Graph protocol](https://ogp.me/)

## Production Deployment Position

### Recommended Launch Decision

Do not launch publicly until the remaining core website sections are implemented and QA-tested.

### Why

The current page does not communicate Sharpened's offer, explain the service model, establish trust, route users to the workflow assessment, or provide a contact conversion path.

### How This Improves UX

Waiting prevents visitors from landing on an unfinished placeholder and leaving without understanding the business.

### How This Improves Conversion

The site should launch only when it has a clear value proposition, primary CTA, proof, service pathways, assessment entry point, and contact flow.

### How This Improves Maintainability

Completing launch infrastructure before public release prevents rushed patches after traffic starts.

### How This Improves Scalability

A complete launch baseline makes future pages, analytics, redirects, and SEO updates easier to manage.

## SEO Launch Requirements

### Current State

The app currently has one static title and meta description in `index.html`.

### Required Before Launch

1. Confirm production domain.
2. Define one canonical URL per indexable page.
3. Add route-specific title and meta description for every page.
4. Add Open Graph metadata for every public page.
5. Add Twitter Card metadata for share previews.
6. Add structured data where appropriate.
7. Add XML sitemap.
8. Add robots.txt.
9. Confirm heading hierarchy on every page.
10. Confirm internal links expose all important pages.

### Recommended Page Metadata Matrix

| Page | SEO Intent | Required Metadata |
| --- | --- | --- |
| Home | Brand and service category discovery | Title, description, canonical, Open Graph, Twitter Card, Organization schema |
| About | Trust, founder credibility, business fit | Title, description, canonical, Open Graph |
| Services | Service discovery and commercial intent | Title, description, canonical, Open Graph, Service schema |
| Workflow Assessment | Conversion and problem diagnosis | Title, description, canonical, Open Graph; consider noindex only if gated or thin |
| Contact | Lead conversion | Title, description, canonical, Open Graph, Local/Organization contact data where applicable |
| 404 | Recovery and navigation | Title, noindex recommendation, helpful links |

### SEO Recommendation

Create a route metadata data structure when React Router is introduced.

Why: Page metadata should not be hard-coded ad hoc.

UX improvement: Search and shared links become clearer before the user lands on the site.

Conversion improvement: Better snippets increase qualified click-through.

Maintainability improvement: Metadata becomes easier to update page by page.

Scalability improvement: New pages can inherit defaults and override only what they need.

## Metadata Requirements

### Required Base Metadata

Every public indexable page should define:

1. `title`
2. `meta name="description"`
3. `link rel="canonical"`
4. `meta name="robots"` when non-default behavior is needed
5. `meta property="og:title"`
6. `meta property="og:description"`
7. `meta property="og:type"`
8. `meta property="og:url"`
9. `meta property="og:image"`
10. `meta name="twitter:card"`
11. `meta name="twitter:title"`
12. `meta name="twitter:description"`
13. `meta name="twitter:image"`

### Metadata Defaults

| Field | Recommended Default |
| --- | --- |
| Site name | Sharpened |
| Locale | `en_US`, unless client specifies another market |
| Open Graph type | `website` for general pages |
| Twitter card | `summary_large_image` |
| Canonical base | Requires confirmed production domain |
| Preview image | Requires final branded social image asset |

## Open Graph

### Current State

No Open Graph metadata exists.

### Required Before Launch

Open Graph requires at minimum:

1. `og:title`
2. `og:type`
3. `og:image`
4. `og:url`

The project should also include:

1. `og:description`
2. `og:site_name`
3. `og:locale`
4. Image width and height when final dimensions are known

### Recommended Preview Image

Create a branded 1200 x 630 image with:

1. Sharpened logo or wordmark.
2. Brand navy background.
3. Clear service category language.
4. No small unreadable text.
5. Adequate contrast.

### Recommendation

Do not use a generic or cropped stock image for social previews.

Why: The preview image is often the first trust signal in shared links.

UX improvement: Users can immediately recognize the business and category.

Conversion improvement: Clear previews improve click confidence.

Maintainability improvement: A single default social image can support all pages until page-specific images are created.

Scalability improvement: Future pages can reuse the template with page-specific text or imagery.

## Twitter Cards

### Current State

No Twitter Card metadata exists.

### Required Before Launch

1. `twitter:card` set to `summary_large_image`.
2. `twitter:title`.
3. `twitter:description`.
4. `twitter:image`.
5. Optional `twitter:site` if the client has an active brand account.

### Recommendation

Keep Twitter Card content aligned with Open Graph content unless there is a platform-specific reason to differ.

Why: Inconsistent social previews create unnecessary QA overhead.

UX improvement: Shared links remain predictable.

Conversion improvement: Consistent positioning reinforces brand memory.

Maintainability improvement: One metadata source can generate both Open Graph and Twitter tags.

Scalability improvement: Additional pages can inherit the same metadata model.

## Robots.txt

### Current State

No `robots.txt` file exists.

### Required Before Launch

Create `public/robots.txt` so Vite copies it into `dist/`.

Recommended production behavior:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Replace `https://example.com` with the final production domain.

### Important Constraint

Robots.txt is not a privacy or deindexing mechanism. Google states it is mainly for crawler access management, not for hiding pages from Search. Use `noindex`, authentication, or removal for pages that must not appear in search.

### Recommendation

Allow the public site to be crawled, and block only non-public or duplicate paths if they are introduced.

Why: The site needs discovery after launch.

UX improvement: Users can find service pages through search.

Conversion improvement: Search visibility creates additional acquisition paths.

Maintainability improvement: A simple robots file avoids accidental crawl blocking.

Scalability improvement: Future disallow rules can be added deliberately as the site grows.

## Sitemap

### Current State

No sitemap exists.

### Required Before Launch

Create `public/sitemap.xml` with all canonical public URLs.

Initial sitemap should include:

1. `/`
2. `/about`
3. `/services`
4. `/workflow-assessment`
5. `/contact`

### Recommendation

Generate or maintain sitemap URLs from the same route metadata source used for navigation and SEO.

Why: Duplicate URL lists drift over time.

UX improvement: Important pages remain discoverable.

Conversion improvement: Search engines can discover conversion pages earlier.

Maintainability improvement: Route changes update SEO assets from one source.

Scalability improvement: New pages can be added without manually editing multiple files.

## 404 And Routing

### Current State

There is no React Router route setup and no 404 page.

### Required Before Launch

1. Add React Router.
2. Add a Not Found page.
3. Add recovery links to Home, Services, Workflow Assessment, and Contact.
4. Decide whether unknown routes should render SPA fallback or true 404 behavior.
5. Confirm Cloudflare Pages fallback behavior for client-side routes.

### Cloudflare Pages Note

Cloudflare Pages supports `_redirects` files in the static asset directory. Redirect rules are parsed during deployment. For a Vite app, this usually means authoring `_redirects` inside `public/`.

Common SPA fallback pattern:

```txt
/* /index.html 200
```

Use this only after confirming the desired 404 behavior. A broad SPA fallback can make every unknown URL return a 200 response unless the app handles not-found state carefully.

### Recommendation

Implement an app-level Not Found route and test deep links before launch.

Why: Users and crawlers will eventually reach mistyped, stale, or shared old URLs.

UX improvement: Users get recovery options instead of a dead end.

Conversion improvement: Lost visitors can be routed back to assessment or contact.

Maintainability improvement: A dedicated 404 page is easier to test than ad hoc fallback behavior.

Scalability improvement: Future redirects and route changes can preserve traffic.

## Performance

### Current State

The current build is small, but it does not yet include real content, images, forms, animations, routing, or analytics.

### Launch Performance Budget

| Metric | Target |
| --- | --- |
| Lighthouse Performance | 90+ |
| Largest Contentful Paint | Under 2.5 seconds |
| Cumulative Layout Shift | Under 0.1 |
| Interaction to Next Paint | Under 200 ms |
| Initial JS gzip | Keep below 100 kB where practical |
| Image format | AVIF/WebP where supported, fallback as needed |
| Image dimensions | Explicit width/height or aspect ratio |

### Required Before Launch

1. Run production Lighthouse on deployed preview URL.
2. Test mobile first, not only desktop.
3. Confirm no layout shift from fonts or images.
4. Confirm no unused heavy libraries are shipped.
5. Confirm animations respect reduced motion.
6. Confirm forms do not block page interactivity.

### Recommendation

Set a performance budget before adding photography, illustrations, analytics, and motion.

Why: Performance regressions are easier to prevent than remove.

UX improvement: Faster pages reduce user frustration.

Conversion improvement: Faster landing and form paths reduce abandonment.

Maintainability improvement: Budgets give future changes an objective review standard.

Scalability improvement: New sections and pages can be assessed against known limits.

## Images

### Current State

No production image assets are implemented.

### Required Before Launch

1. Final logo asset.
2. Favicon set.
3. Apple touch icon.
4. Social preview image.
5. Any homepage or service imagery.
6. Explicit alt text for informative images.
7. Empty alt text for decorative images.
8. Responsive image sizing strategy.

### Recommendation

Use purposeful brand or workflow imagery, not vague stock visuals.

Why: The site sells operational clarity and law-firm workflow improvement; generic imagery weakens credibility.

UX improvement: Relevant images help users understand the offer faster.

Conversion improvement: Specific visuals increase trust and reduce ambiguity.

Maintainability improvement: A documented image standard prevents inconsistent asset choices.

Scalability improvement: Future pages can follow the same asset rules.

## Accessibility

### Current State

The layout has basic landmarks and a skip link. Full accessibility cannot be confirmed because the actual navigation, pages, forms, and interactions are not implemented.

### Required Before Launch

1. Keyboard test all navigation and forms.
2. Confirm visible focus states.
3. Confirm color contrast for text, links, buttons, cards, and form errors.
4. Confirm correct heading order.
5. Confirm every form field has a visible label.
6. Confirm errors are programmatically associated with fields.
7. Confirm success and loading states are announced where appropriate.
8. Confirm reduced-motion behavior.
9. Confirm touch targets are comfortable on mobile.
10. Run automated checks, then manual keyboard and screen-reader checks.

### Recommendation

Make accessibility a release gate, not a post-launch cleanup task.

Why: The workflow assessment and contact forms will be critical conversion paths.

UX improvement: More users can complete core tasks.

Conversion improvement: Accessible forms prevent avoidable lead loss.

Maintainability improvement: Shared accessible components reduce repeated fixes.

Scalability improvement: Future pages inherit accessible patterns.

## Analytics

### Current State

No analytics implementation exists.

### Required Decisions Before Launch

1. Analytics provider.
2. Consent requirements.
3. Events to track.
4. Conversion definitions.
5. Data retention expectations.
6. Privacy policy language.
7. Whether Cloudflare Web Analytics is sufficient.
8. Whether form submissions need CRM or email tracking.

### Recommended Events

| Event | Purpose |
| --- | --- |
| Primary CTA click | Measure assessment/contact intent |
| Workflow assessment start | Measure funnel entry |
| Workflow assessment submit | Measure primary conversion |
| Contact form submit | Measure direct lead conversion |
| Service page CTA click | Measure service-specific intent |
| Navigation click | Evaluate IA clarity |
| Phone/email click, if present | Measure direct contact behavior |

### Recommendation

Define analytics after final page structure and CTAs are approved, but before launch.

Why: Tracking too early creates noisy, changing data.

UX improvement: Analytics can reveal where users hesitate or drop off.

Conversion improvement: Funnel data identifies CTA and form improvements.

Maintainability improvement: A named event map prevents inconsistent tracking.

Scalability improvement: Future campaigns can reuse the same event taxonomy.

## Cloudflare Pages

### Current State

No Cloudflare Pages project configuration is present in the repo.

### Required Cloudflare Pages Settings

| Setting | Recommended Value |
| --- | --- |
| Project type | Pages |
| Production branch | `main` after Git is repaired |
| Build command | `npm run build` currently; change to `pnpm build` if package manager is aligned to pnpm |
| Build output directory | `dist` |
| Environment variables | None currently required |
| Preview deployments | Enable |
| Custom domain | Required before final canonical metadata |

Cloudflare's React guide lists `npm run build` and `dist` as the dashboard values for a React Pages deployment. If this project standard remains pnpm, the command should be adjusted after lockfile migration.

### Required Before Deployment

1. Repair Git repository.
2. Confirm package manager.
3. Confirm production branch.
4. Connect repository to Cloudflare Pages.
5. Configure build command and output directory.
6. Add custom domain.
7. Validate preview deployment.
8. Validate production deployment.
9. Confirm route fallback behavior.
10. Confirm security headers are applied.

### Recommendation

Do not configure production deployment until Git and package manager decisions are resolved.

Why: Deployment should be reproducible from a clean repository.

UX improvement: Stable deployments reduce the chance of broken public pages.

Conversion improvement: Reliable deployments protect lead generation paths.

Maintainability improvement: A clean deploy pipeline reduces local-only assumptions.

Scalability improvement: Preview deployments support safer future changes.

## Security Headers

### Current State

No `_headers` file exists.

### Cloudflare Pages Placement

Cloudflare Pages applies custom headers from a plain text `_headers` file placed in the static asset directory, such as `public/`, so it is copied into the final build output.

### Recommended Initial Headers

These should be reviewed after final analytics, fonts, images, forms, and third-party services are known:

```txt
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Content Security Policy should be added carefully after final asset and analytics decisions:

```txt
/*
  Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;
```

### Recommendation

Do not finalize CSP until third-party services are known.

Why: Analytics, forms, embedded calendars, external fonts, or CRM scripts may require explicit CSP allowances.

UX improvement: A correct CSP avoids broken forms, images, or analytics.

Conversion improvement: Lead capture must not fail because of an overly restrictive policy.

Maintainability improvement: A documented CSP makes third-party additions deliberate.

Scalability improvement: Security policy can evolve as integrations grow.

## Final Launch Checklist

### Product And Content

- [ ] Homepage implemented.
- [ ] About page implemented.
- [ ] Services page implemented.
- [ ] Workflow Assessment page implemented.
- [ ] Contact page implemented.
- [ ] Primary CTA approved.
- [ ] Secondary CTA approved.
- [ ] Trust elements approved.
- [ ] Footer content approved.
- [ ] Legal/privacy requirements confirmed.

### SEO

- [ ] Production domain confirmed.
- [ ] Page titles approved.
- [ ] Meta descriptions approved.
- [ ] Canonical URLs configured.
- [ ] Open Graph metadata configured.
- [ ] Twitter Card metadata configured.
- [ ] Social preview image created.
- [ ] Sitemap generated.
- [ ] Robots.txt generated.
- [ ] Structured data reviewed.

### Accessibility

- [ ] Keyboard navigation tested.
- [ ] Focus states visible.
- [ ] Color contrast passes.
- [ ] Heading order reviewed.
- [ ] Form labels and errors tested.
- [ ] Reduced motion respected.
- [ ] Mobile touch targets tested.
- [ ] Automated accessibility scan completed.
- [ ] Manual screen-reader spot check completed.

### Performance

- [ ] Production Lighthouse run on preview URL.
- [ ] Images optimized.
- [ ] Fonts optimized.
- [ ] Layout shift reviewed.
- [ ] Bundle size reviewed.
- [ ] No unnecessary third-party scripts.
- [ ] Mobile performance reviewed.

### Cloudflare Pages

- [ ] Git repository repaired.
- [ ] Package manager finalized.
- [ ] Lockfile committed.
- [ ] Build command confirmed.
- [ ] Output directory confirmed.
- [ ] Preview deployment works.
- [ ] Custom domain configured.
- [ ] HTTPS active.
- [ ] Redirects verified.
- [ ] Headers verified.

### Analytics And Forms

- [ ] Analytics provider approved.
- [ ] Consent requirements approved.
- [ ] Event map approved.
- [ ] Form submission path tested.
- [ ] Success state tested.
- [ ] Error state tested.
- [ ] Spam protection decision made.
- [ ] Lead notification path confirmed.

## Deployment Checklist

1. Repair or initialize Git.
2. Resolve npm versus pnpm.
3. Clean or ignore generated build artifacts.
4. Confirm app builds locally.
5. Confirm tests pass locally.
6. Add production metadata.
7. Add robots.txt.
8. Add sitemap.xml.
9. Add `_headers`.
10. Add `_redirects` if React Router deep links require SPA fallback.
11. Connect repository to Cloudflare Pages.
12. Configure build command and `dist` output.
13. Deploy preview.
14. QA preview on mobile and desktop.
15. Run Lighthouse on preview.
16. Validate metadata with social preview tools.
17. Validate robots and sitemap URLs.
18. Configure custom domain.
19. Deploy production.
20. Smoke test production.
21. Submit sitemap in Google Search Console.
22. Monitor analytics and errors after launch.

## Future Improvements

1. Add automated sitemap generation from route metadata.
2. Add automated metadata tests.
3. Add Playwright end-to-end tests for navigation, forms, and conversion paths.
4. Add Lighthouse CI or a repeatable performance budget check.
5. Add axe-based accessibility tests.
6. Add Cloudflare Web Analytics or approved analytics provider.
7. Add Cloudflare Turnstile if spam protection is needed.
8. Add structured data for services and organization details.
9. Add campaign landing pages after the core site is stable.
10. Add case study or proof pages when client evidence becomes available.

## Final Recommendation

Treat the current project as technically buildable but not launchable. The next launch-prep priority is not deployment; it is completing the remaining Phase 8 implementation sections, then adding production metadata, robots, sitemap, 404 behavior, analytics decisions, Cloudflare Pages configuration, and security headers before public release.
