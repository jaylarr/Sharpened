# Production Launch Documentation

## Launch Position

Sharpened is not ready for public production launch yet.

The current app can build, and the Home page exists, but the production website still lacks the launch infrastructure required for a reliable Cloudflare Pages deployment: real routing for all CTA destinations, page-level metadata, OpenGraph and Twitter cards, schema, robots, sitemap, 404 handling, analytics decisions, security headers, and deploy-ready public assets.

### Current Implementation Snapshot

| Area | Current State | Launch Impact |
| --- | --- | --- |
| App shell | Implemented with `Layout` and `HomePage` | Usable foundation |
| Routes | Not implemented; `App` renders `HomePage` directly | CTA destinations can fail |
| Core pages | Home only | About, Services, Workflow Assessment, and Contact remain required |
| Metadata | Static title and description in `index.html` | Not enough for launch SEO |
| Public assets | No `public/` directory | No robots, sitemap, favicon, social image, headers, or redirects |
| Git | `git status` fails in this workspace | Cloudflare Git deployment is blocked until repaired |
| Package manager | npm lockfile exists, but project standard says pnpm | Deployment command must be aligned |

## Source References

- Cloudflare Pages React guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/
- Cloudflare Pages headers: https://developers.cloudflare.com/pages/configuration/headers/
- Cloudflare Pages redirects: https://developers.cloudflare.com/pages/configuration/redirects/
- Google robots.txt guide: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google sitemap guide: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview

## Production Launch Blockers

### 1. Routing Is Not Production-Ready

The Home page links to `/services`, `/workflow-assessment`, and `/contact`, but React Router is not wired into the app.

Why: A user can click a conversion CTA and land on a route that does not have an implemented page.

UX improvement: Real routes keep the journey coherent.

Conversion improvement: The assessment and contact CTAs need working destinations.

Maintainability improvement: A route map becomes the source for navigation, metadata, sitemap, and tests.

Scalability improvement: New pages can be added without hard-coded route drift.

Required before launch:

1. Add React Router.
2. Create route definitions for `/`, `/about`, `/services`, `/workflow-assessment`, `/contact`, and `*`.
3. Add a Not Found page.
4. Add route tests for each public path.
5. Confirm deep links work on Cloudflare Pages.

### 2. Metadata Is Incomplete

The app currently has one static title and description in `index.html`.

Why: Every indexable page has a different search intent and conversion role.

UX improvement: Search users and shared-link visitors understand the page before clicking.

Conversion improvement: Better snippets increase qualified traffic.

Maintainability improvement: A route metadata source prevents one-off head edits.

Scalability improvement: Future landing pages can inherit defaults.

Required metadata for every public page:

1. `title`
2. `meta name="description"`
3. `link rel="canonical"`
4. `meta property="og:title"`
5. `meta property="og:description"`
6. `meta property="og:type"`
7. `meta property="og:url"`
8. `meta property="og:image"`
9. `meta name="twitter:card"`
10. `meta name="twitter:title"`
11. `meta name="twitter:description"`
12. `meta name="twitter:image"`
13. `meta name="robots"` only when page behavior differs from default indexing

Recommended route metadata matrix:

| Page | Path | SEO Intent | Required Launch Metadata |
| --- | --- | --- | --- |
| Home | `/` | Brand and workflow automation category discovery | Title, description, canonical, OG, Twitter, Organization schema |
| About | `/about` | Trust, founder credibility, business context | Title, description, canonical, OG, Twitter |
| Services | `/services` | Commercial service discovery | Title, description, canonical, OG, Twitter, Service schema |
| Workflow Assessment | `/workflow-assessment` | Conversion and diagnosis intent | Title, description, canonical, OG, Twitter |
| Contact | `/contact` | Lead conversion | Title, description, canonical, OG, Twitter |
| Not Found | `*` | Recovery | Title, noindex, recovery links |

### 3. OpenGraph And Social Preview Assets Are Missing

No OpenGraph or Twitter Card metadata exists, and no social preview image exists.

Recommended social image:

| Requirement | Specification |
| --- | --- |
| Size | 1200 x 630 |
| Format | PNG or JPG; consider WebP only if platform compatibility is verified |
| Visual direction | Navy brand background, Sharpened wordmark, clear workflow automation category text |
| Text | Large, minimal, readable on mobile previews |
| Alt equivalent | Metadata description should communicate the same offer |

Why: Social previews often become the first trust impression.

UX improvement: Shared links look intentional and recognizable.

Conversion improvement: Strong previews improve click confidence.

Maintainability improvement: One default image can support all launch pages.

Scalability improvement: Future pages can add page-specific images later.

### 4. Robots And Sitemap Are Missing

There is no `public/robots.txt` and no `public/sitemap.xml`.

Required production `robots.txt` pattern after domain confirmation:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

Replace `https://example.com` with the approved production domain.

Required initial sitemap URLs:

```txt
https://example.com/
https://example.com/about
https://example.com/services
https://example.com/workflow-assessment
https://example.com/contact
```

Why: Search engines need crawl guidance and canonical public URLs.

UX improvement: Users can discover important pages through search.

Conversion improvement: Service and assessment pages become discoverable acquisition paths.

Maintainability improvement: Sitemap entries should come from the same route metadata source.

Scalability improvement: Future pages can be added consistently.

Important: Robots is not a privacy mechanism. Sensitive content should use authentication, removal, or `noindex` where appropriate.

### 5. 404 And Deep Link Behavior Are Missing

No custom 404 route exists.

Recommended app-level 404:

1. Plain explanation that the page was not found.
2. Links to Home, Services, Workflow Assessment, and Contact.
3. Primary CTA to schedule a Workflow Assessment.
4. `noindex` metadata.

Cloudflare Pages redirect note:

Cloudflare Pages reads `_redirects` from the static asset directory. For Vite, that means placing `_redirects` in `public/` so it is copied to `dist/`.

Potential SPA fallback:

```txt
/* /index.html 200
```

Use this only with an app-level Not Found route, because a broad fallback can make unknown URLs return a 200 response unless the React app handles the not-found state clearly.

## Cloudflare Pages Deployment

### Recommended Project Settings

| Setting | Recommended Value |
| --- | --- |
| Project type | Cloudflare Pages |
| Production branch | `main` after Git is repaired |
| Build command | `npm run build` currently; change to `pnpm build` if pnpm is adopted |
| Build output directory | `dist` |
| Root directory | Repository root |
| Preview deployments | Enabled |
| Custom domain | Required before final canonical URLs |

Cloudflare's React Pages guide lists `npm run build` and `dist` for dashboard deployment. The project instructions specify pnpm, so the final deployment command should match the approved package manager before launch.

### Required Repository Work Before Cloudflare Setup

1. Repair or reinitialize Git.
2. Choose npm or pnpm.
3. Commit the correct lockfile.
4. Clean or ignore generated root artifacts.
5. Confirm `npm run build` or `pnpm build` passes from a clean install.
6. Connect the repository to Cloudflare Pages.
7. Configure custom domain before final canonical metadata.

## Environment Variables

### Current Required Variables

No required runtime environment variables are present in the current app.

### Variables To Decide Before Launch

| Variable | Needed When | Notes |
| --- | --- | --- |
| `VITE_SITE_URL` | Route metadata and sitemap generation | Should be the canonical production domain |
| `VITE_ANALYTICS_PROVIDER` | Analytics abstraction is introduced | Optional if using Cloudflare Web Analytics dashboard injection only |
| `VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN` | Cloudflare Web Analytics script is app-managed | Avoid adding until analytics provider is approved |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile is used on forms | Public key only |
| Server-side secrets | Form backend or CRM integration exists | Must not be exposed as `VITE_` variables |

### Environment Guidance

Why: Environment variables should support deployment-specific configuration without hard-coded production URLs.

UX improvement: Correct URLs and tracking prevent broken shared links and broken forms.

Conversion improvement: Form and analytics integrations can work across preview and production.

Maintainability improvement: Environment-specific values stay outside source code.

Scalability improvement: Future staging, preview, and production environments can differ safely.

## Analytics Plan

### Current State

No analytics is implemented.

### Recommended Provider Decision

Use Cloudflare Web Analytics if the client wants low-maintenance page analytics without a heavier marketing stack. Use a fuller analytics tool only if campaign attribution, CRM integration, consent workflows, or event-level funnel reporting is required.

### Required Events

| Event | Trigger | Why It Matters |
| --- | --- | --- |
| `primary_cta_click` | Main assessment CTA clicked | Measures conversion intent |
| `secondary_cta_click` | Services/contact CTA clicked | Measures exploratory paths |
| `workflow_assessment_start` | Assessment form viewed or started | Measures funnel entry |
| `workflow_assessment_submit` | Assessment submitted | Primary conversion |
| `contact_submit` | Contact form submitted | Direct lead conversion |
| `service_card_click` | Service page or card CTA clicked | Shows service interest |
| `nav_click` | Header/footer navigation clicked | Validates IA |

### Analytics Requirements Before Launch

1. Approve provider.
2. Confirm consent requirements.
3. Confirm privacy policy language.
4. Define event names and payload rules.
5. Test events on preview.
6. Confirm production dashboard access.

## Security Headers

Cloudflare Pages applies custom headers from a `_headers` file in the static asset directory. For this Vite app, the file should live in `public/_headers` after approval.

### Recommended Initial `_headers`

```txt
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### CSP Strategy

Do not finalize Content Security Policy until final analytics, forms, images, fonts, CRM scripts, and scheduling embeds are known.

Possible starting point after integrations are known:

```txt
/*
  Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;
```

Why: Security headers reduce preventable browser-level risks.

UX improvement: Correct headers protect users without breaking the site.

Conversion improvement: A careful CSP avoids blocking forms or analytics.

Maintainability improvement: Header rules are versioned with the app.

Scalability improvement: Future integrations can be reviewed against a known policy.

## Performance Launch Budget

| Metric | Target |
| --- | --- |
| Lighthouse Performance | 90+ on mobile preview |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 95+ |
| Largest Contentful Paint | Under 2.5 seconds |
| Cumulative Layout Shift | Under 0.1 |
| Interaction to Next Paint | Under 200 ms |
| Initial JS gzip | Keep under 100 kB where practical |
| Images | AVIF/WebP where appropriate, explicit dimensions |
| Third-party scripts | None unless approved |

Current latest observed build output:

| Asset | Size |
| --- | --- |
| JS | 211.02 kB, gzip 65.96 kB |
| CSS | 18.53 kB, gzip 4.35 kB |

The current bundle is acceptable for the Home-page slice, but route expansion, forms, Motion, analytics, and images must be monitored.

## Accessibility Launch Gate

Before production:

1. Keyboard-test every route.
2. Confirm skip link works.
3. Confirm visible focus states.
4. Confirm nav menu is accessible on mobile.
5. Confirm color contrast for text, buttons, cards, forms, and errors.
6. Confirm all form fields have visible labels.
7. Confirm validation errors are programmatically associated.
8. Confirm success and error states are announced.
9. Confirm reduced-motion preference is respected.
10. Run automated accessibility checks and manual screen-reader spot checks.

## Deployment Checklist

### Pre-Implementation Approval

- [ ] Confirm production domain.
- [ ] Confirm package manager: npm or pnpm.
- [ ] Confirm analytics provider.
- [ ] Confirm whether Cloudflare Turnstile is required for forms.
- [ ] Confirm privacy policy/legal requirements.
- [ ] Confirm final logo, favicon, and social image assets.

### Code Readiness

- [ ] Add React Router.
- [ ] Add pages: Home, About, Services, Workflow Assessment, Contact, Not Found.
- [ ] Add route metadata source.
- [ ] Add SEO component or head management strategy.
- [ ] Add `public/robots.txt`.
- [ ] Add `public/sitemap.xml` or sitemap generation.
- [ ] Add `public/_headers`.
- [ ] Add `public/_redirects` if SPA fallback is approved.
- [ ] Add favicon and touch icons.
- [ ] Add social preview image.
- [ ] Add reduced-motion baseline.
- [ ] Add tests for routes, metadata, CTAs, and forms.

### Cloudflare Pages Setup

- [ ] Repair Git and push repository.
- [ ] Connect repository in Cloudflare Pages.
- [ ] Set production branch to `main`.
- [ ] Set build command.
- [ ] Set output directory to `dist`.
- [ ] Add required environment variables.
- [ ] Enable preview deployments.
- [ ] Deploy preview.
- [ ] Attach custom domain.
- [ ] Confirm HTTPS.

### Preview QA

- [ ] Run `npm test`.
- [ ] Run production build.
- [ ] Open every route directly.
- [ ] Test all navigation links.
- [ ] Test all CTAs.
- [ ] Test Workflow Assessment form.
- [ ] Test Contact form.
- [ ] Test mobile widths: 320, 375, 768, 1024, desktop.
- [ ] Run Lighthouse mobile and desktop.
- [ ] Validate metadata.
- [ ] Validate social previews.
- [ ] Validate robots and sitemap.
- [ ] Confirm headers are present.
- [ ] Confirm analytics events fire only after consent requirements are met.

### Production Smoke Test

- [ ] Visit production domain.
- [ ] Hard refresh all key routes.
- [ ] Confirm canonical URLs.
- [ ] Confirm sitemap URL works.
- [ ] Confirm robots URL works.
- [ ] Confirm 404 recovery page.
- [ ] Submit a test lead.
- [ ] Confirm lead notification path.
- [ ] Confirm analytics event receipt.
- [ ] Submit sitemap in Google Search Console.

## Future Improvements

1. Generate sitemap from the route metadata source.
2. Add automated metadata tests.
3. Add Playwright end-to-end tests for routes, CTAs, and forms.
4. Add axe accessibility checks.
5. Add Lighthouse CI or a repeatable performance budget check.
6. Add Cloudflare Web Analytics or approved analytics provider.
7. Add Cloudflare Turnstile if spam protection is needed.
8. Add service-specific landing pages after core pages stabilize.
9. Add case studies or proof pages when client evidence is approved.
10. Add structured data for Organization, Services, and FAQ content after final copy approval.

## Recommended Launch Sequence

1. Repair Git and package manager alignment.
2. Complete core pages and routing.
3. Add metadata, schema, robots, sitemap, 404, headers, and redirects.
4. Add analytics after provider approval.
5. QA on Cloudflare preview deployment.
6. Attach custom domain.
7. Run final smoke tests.
8. Launch production.
9. Submit sitemap and monitor analytics.

## Final Recommendation

Do not launch production until routing, all core pages, metadata, robots, sitemap, 404, security headers, analytics decisions, and Cloudflare preview QA are complete.

Why: The current build is technically deployable but not production-ready as a lead-generation website.

UX improvement: Visitors receive a complete, navigable experience.

Conversion improvement: Every CTA leads to a functioning discovery-call path.

Maintainability improvement: Deployment, metadata, and route behavior become repeatable.

Scalability improvement: Future pages and campaigns can build on a stable launch foundation.
