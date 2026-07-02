# Sharpened Website - Phase 4 Design System

Date: 2026-07-01  
Phase: Phase 4 - Design System  
Foundation:

- `docs/phase-1-discovery-audit.md`
- `docs/phase-2-ux-strategy-information-architecture.md`
- `docs/phase-3-content-strategy-blueprint.md`

## Scope

This document defines the reusable design system for the Sharpened website. It includes visual rules, design tokens, component guidance, interaction guidance, accessibility standards, and future dark mode strategy.

This is not React, Tailwind, CSS, or implementation code.

## Design System Principles

- Professional before playful.
- Clear before decorative.
- Conversion-focused without feeling aggressive.
- Modern and technical without looking like generic SaaS.
- Trustworthy enough for law firm buyers.
- Practical enough for operations managers.
- Spacious, but not empty.
- Consistent enough to scale across services, resources, case studies, and future industry pages.

Why: Sharpened needs to look credible to legal operations buyers while still feeling modern and automation-oriented.  
How it improves UX: users can scan content quickly and understand what matters.  
How it improves conversion: professional clarity reduces trust friction before the assessment CTA.  
How it improves maintainability: design decisions become reusable rules instead of one-off page styling.  
How it improves scalability: future pages can use the same tokens and patterns without redesign.

## Brand Colors

### Core Palette

| Role | Token Name | Hex | Usage |
|---|---:|---:|---|
| Primary | Color Primary Navy | `#00153B` | Header, footer, hero accents, high-emphasis text areas, trust sections |
| Secondary | Color Secondary Blue | `#0642D0` | Links, active states, secondary actions, service accents, diagrams |
| Accent | Color Accent Yellow | `#FEC001` | Primary CTA, key highlights, selected states, important metrics |
| Background | Color Background Soft | `#F0F1F4` | Page background, alternate bands, muted sections |
| Text | Color Text Base | `#353637` | Main body text |

### Recommended Supporting Neutrals

| Role | Token Name | Hex | Usage |
|---|---:|---:|---|
| White | Color Surface White | `#FFFFFF` | Main content surfaces, cards, forms, navigation |
| Border Light | Color Border Light | `#D8DCE3` | Card borders, form borders, dividers |
| Border Strong | Color Border Strong | `#B8C0CC` | Focus-adjacent structure, table borders |
| Text Muted | Color Text Muted | `#62666D` | Supporting copy, captions, metadata |
| Text Inverse | Color Text Inverse | `#FFFFFF` | Text on navy surfaces |
| Success | Color Success | `#127A3A` | Successful form states |
| Warning | Color Warning | `#A16000` | Caution messages |
| Error | Color Error | `#B42318` | Form errors and destructive states |

### Color Usage Rules

- Use white and soft background as the dominant surfaces.
- Use navy for authority, structure, and high-trust sections.
- Use blue for navigation cues and interactive emphasis.
- Use yellow sparingly for primary conversion actions and important highlights.
- Do not use yellow for large backgrounds behind long body copy.
- Do not create a one-color blue-heavy page; use white, soft gray, and measured yellow to keep the site breathable.
- Avoid bright gradients as the main brand expression. If gradients are used later, keep them subtle and secondary.

## Reusable Design Tokens

### Color Tokens

| Token | Value | Purpose |
|---|---:|---|
| color.brand.primary | `#00153B` | Core brand authority |
| color.brand.secondary | `#0642D0` | Interactive and technical accent |
| color.brand.accent | `#FEC001` | Conversion and highlights |
| color.background.page | `#F0F1F4` | Page canvas |
| color.background.surface | `#FFFFFF` | Cards, forms, content blocks |
| color.text.primary | `#353637` | Main readable text |
| color.text.muted | `#62666D` | Secondary text |
| color.text.inverse | `#FFFFFF` | Text on dark backgrounds |
| color.border.default | `#D8DCE3` | Standard borders |
| color.border.strong | `#B8C0CC` | Stronger structure |
| color.feedback.success | `#127A3A` | Success |
| color.feedback.warning | `#A16000` | Warning |
| color.feedback.error | `#B42318` | Error |

### Typography Tokens

| Token | Value | Purpose |
|---|---:|---|
| font.heading | Montserrat | Headings and strong page hierarchy |
| font.heading.fallback | League Spartan | Backup display choice |
| font.body | Inter | Body copy, forms, navigation, tables |
| font.body.fallback | Poppins | Backup body choice |
| font.weight.regular | 400 | Body copy |
| font.weight.medium | 500 | Navigation, labels, metadata |
| font.weight.semibold | 600 | Subheadings, card titles |
| font.weight.bold | 700 | High-emphasis headings |
| font.weight.extrabold | 800 | Hero and major page headings |

### Space Tokens

| Token | Value | Purpose |
|---|---:|---|
| space.0 | 0 | No spacing |
| space.1 | 4px | Tight icon/text gaps |
| space.2 | 8px | Compact internal spacing |
| space.3 | 12px | Labels, compact controls |
| space.4 | 16px | Default element spacing |
| space.5 | 20px | Form groups, small cards |
| space.6 | 24px | Card padding, section internals |
| space.8 | 32px | Component groups |
| space.10 | 40px | Small section spacing |
| space.12 | 48px | Medium section spacing |
| space.16 | 64px | Standard section spacing |
| space.20 | 80px | Large section spacing |
| space.24 | 96px | Hero and major page spacing |
| space.32 | 128px | Large desktop hero spacing |

### Radius Tokens

| Token | Value | Purpose |
|---|---:|---|
| radius.none | 0 | Tables, full-width sections |
| radius.xs | 4px | Inputs, tags, compact controls |
| radius.sm | 6px | Buttons, small cards |
| radius.md | 8px | Standard cards and forms |
| radius.lg | 12px | Large feature panels only |
| radius.full | 999px | Pills, badges, round icon containers |

### Elevation Tokens

| Token | Value | Purpose |
|---|---|---|
| elevation.none | None | Default layout |
| elevation.border | 1px border only | Most cards and panels |
| elevation.sm | Very subtle shadow | Navigation and dropdowns |
| elevation.md | Soft shadow | Modals and elevated overlays |
| elevation.focus | Visible focus ring | Keyboard accessibility |

Rule: use borders more often than shadows. This keeps the site professional and avoids a decorative SaaS-card look.

## Typography Scale

### Font Families

- Headings: Montserrat.
- Body: Inter.
- Fallback heading: League Spartan.
- Fallback body: Poppins.

### Type Scale

| Role | Mobile Size | Desktop Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---:|---|
| Display | 40px | 64px | 1.05 | 800 | Homepage hero only |
| H1 | 36px | 56px | 1.08 | 800 | Page hero headings |
| H2 | 28px | 40px | 1.15 | 700 | Major sections |
| H3 | 22px | 28px | 1.25 | 700 | Section groups, cards |
| H4 | 18px | 22px | 1.35 | 600 | Card titles, FAQ groups |
| Body Large | 18px | 20px | 1.6 | 400 | Hero subheads, intro text |
| Body | 16px | 16px | 1.65 | 400 | Main copy |
| Body Small | 14px | 14px | 1.55 | 400 | Captions, helper text |
| Label | 13px | 13px | 1.3 | 600 | Form labels, badges |
| Navigation | 15px | 15px | 1.2 | 500 | Header links |
| Button | 15px | 16px | 1.2 | 700 | CTAs |

### Typography Rules

- Do not scale text based on viewport width.
- Letter spacing should remain 0 except for small uppercase labels, where slight positive tracking may be used.
- Use hero-scale type only in hero sections.
- Keep line lengths comfortable: roughly 55-75 characters for body copy.
- Avoid long centered paragraphs. Centering is acceptable for short section intros only.
- Use strong hierarchy to support scanning by busy decision-makers.

## Spacing Scale

### Section Spacing

| Context | Mobile | Desktop |
|---|---:|---:|
| Hero top and bottom | 64px | 96px |
| Standard section | 56px | 80px |
| Compact section | 40px | 56px |
| CTA band | 48px | 72px |
| Footer | 48px | 64px |

### Component Spacing

| Context | Recommended Space |
|---|---:|
| Card padding mobile | 20px |
| Card padding desktop | 24px |
| Form field vertical gap | 16px |
| Button icon gap | 8px |
| Grid gap mobile | 16px |
| Grid gap tablet | 20px |
| Grid gap desktop | 24px |
| Heading to body copy | 12px |
| Section intro to content grid | 32px |

## Grid System

### Base Grid

- Use a 12-column desktop grid.
- Use a 6-column tablet grid.
- Use a 4-column mobile grid.
- Keep gutters consistent with spacing tokens.
- Favor simple two-column layouts for decision support pages.
- Use single-column layout for forms, FAQ content, and privacy pages on mobile.

### Grid Usage

- Homepage hero: two-column layout on desktop only if the right side carries useful proof, workflow, or trust content. Do not use decorative filler.
- Services: 2 or 3 cards per row on desktop depending on content density.
- Resources: 3-column card grid on desktop, 2-column tablet, 1-column mobile.
- FAQ: two-column category layout on desktop, single-column on mobile.
- Contact: two-column layout on desktop, form first or action path first depending on conversion priority.

## Breakpoints

| Token | Width | Purpose |
|---|---:|---|
| breakpoint.xs | 360px | Small mobile support |
| breakpoint.sm | 480px | Large mobile |
| breakpoint.md | 768px | Tablet |
| breakpoint.lg | 1024px | Small desktop |
| breakpoint.xl | 1280px | Standard desktop |
| breakpoint.2xl | 1536px | Wide desktop |

### Breakpoint Rules

- Design mobile-first.
- Header navigation collapses before crowding.
- Cards should not shrink text or force cramped layouts.
- Avoid multi-column text on mobile.
- Maintain CTA visibility without sticky elements that cover content.

## Container Width

| Token | Width | Usage |
|---|---:|---|
| container.narrow | 720px | Articles, privacy, focused copy |
| container.readable | 860px | FAQ, process detail, intro content |
| container.standard | 1120px | Most page sections |
| container.wide | 1280px | Hero, service grids, resource grids |
| container.full | 100% | Full-width bands |

### Container Rules

- Standard marketing sections should use `container.standard`.
- Resource grids and complex service grids may use `container.wide`.
- Long-form text should use `container.narrow` or `container.readable`.
- Full-width background bands should still contain inner content.

## Border Radius

### Radius Philosophy

Sharpened should feel modern and approachable, but not playful. Most UI surfaces should stay at 8px or below.

### Usage

- Buttons: 6px.
- Inputs: 6px.
- Standard cards: 8px.
- Tables: 6px outer container, square inner cells.
- Tags and badges: full radius.
- Large feature panels: 12px maximum.

Avoid highly rounded cards for serious service content.

## Elevation

### Elevation Philosophy

Use structure, spacing, borders, and background contrast before shadows.

### Usage

- Cards: border-only by default.
- Navigation: subtle shadow only when sticky or overlaying content.
- Dropdowns: subtle shadow with clear border.
- Modals: medium shadow and overlay.
- Hover: border color or background shift before shadow increase.

Avoid heavy shadows, floating-card visual clutter, and nested cards.

## Buttons

### Button Types

#### Primary Button

- Purpose: main conversion action.
- Color: accent yellow background.
- Text: primary navy or text base, depending on contrast validation.
- Usage: Book a Workflow Assessment.
- Shape: 6px radius.
- Height: 48px minimum desktop, 48px minimum mobile.

#### Secondary Button

- Purpose: supporting navigation.
- Color: white or transparent background with navy or blue text.
- Border: navy or border light depending on surface.
- Usage: Explore Services, See How It Works.

#### Tertiary Button

- Purpose: low-emphasis text action.
- Style: text link with icon where useful.
- Usage: Read FAQ, View Resources.

#### Inverse Button

- Purpose: CTA on navy backgrounds.
- Color: white or yellow depending on context.
- Must maintain contrast.

### Button Rules

- One primary CTA per section.
- Use icons only when they clarify action, such as arrow, calendar, or send.
- Do not use vague CTA text.
- Button text must not wrap awkwardly.
- Full-width buttons are acceptable on mobile forms.
- Disabled state must remain legible and visibly inactive.

### Button States

- Default: clear affordance.
- Hover: slightly darker or more saturated background, not excessive movement.
- Active: pressed visual state.
- Focus: visible 2px focus ring with sufficient contrast.
- Disabled: muted background, no pointer interaction, still readable.
- Loading: show progress text or spinner with preserved button width.

## Cards

### Card Types

- Service card.
- Benefit card.
- Process step card.
- FAQ preview card.
- Resource card.
- Case study card.
- Trust/value card.

### Card Structure

- Optional icon.
- Clear title.
- Short description.
- Optional link or CTA.
- Optional metadata for resources.

### Card Rules

- Use border-first styling.
- Keep radius at 8px.
- Avoid cards inside cards.
- Do not make entire pages feel like a grid of cards.
- Use cards for repeated items, not primary page sections.
- Keep card heights visually balanced but avoid forcing excessive empty space.

### Card States

- Hover: border shifts to secondary blue or subtle background change.
- Focus: visible outline if card is interactive.
- Active: clear pressed or selected state.

## Forms

### Form Types

- Contact form.
- Workflow assessment inquiry form.
- Newsletter or resource download form, future.

### Form Fields

- Name.
- Work email.
- Firm name.
- Role.
- Website, optional.
- Workflow area of interest.
- Message.
- Consent or privacy acknowledgement if needed.

### Form Rules

- Labels must always be visible.
- Placeholder text cannot replace labels.
- Required fields must be clearly indicated.
- Error messages must explain how to fix the problem.
- Avoid asking for sensitive client information.
- Keep initial forms short to reduce friction.
- Use one-column forms for clarity.

### Form States

- Default.
- Hover.
- Focus.
- Filled.
- Error.
- Success.
- Disabled.
- Loading/submitting.

### Form Accessibility

- Every field needs a programmatic label in implementation.
- Error messages should be associated with the relevant field.
- Focus order must match visual order.
- Touch targets should be at least 44px high.

## Tables

### Table Usage

Use tables for structured comparison or data, not decorative layout.

Recommended table types:

- Service comparison.
- Assessment deliverables.
- Timeline overview.
- Future pricing/package comparison if approved.

### Table Rules

- Keep headers clear.
- Use strong row spacing.
- Avoid dense enterprise-style tables unless content requires it.
- On mobile, convert complex tables to stacked rows or comparison cards.
- Keep text left-aligned.
- Do not center long table content.

### Table States

- Row hover for interactive rows only.
- Focus state for clickable rows.
- Clear empty state if data is not available.

## Navigation

### Header Navigation

Recommended links:

- Services.
- Workflow Assessment.
- Industries.
- Why Sharpened.
- About.
- Contact.

Primary CTA:

- Book a Workflow Assessment.

### Navigation Rules

- Header should feel stable, restrained, and professional.
- Logo must have clear space.
- Avoid oversized nav items.
- Active page state should be visible.
- Mobile nav should be simple and fast to scan.
- Do not hide the primary CTA in desktop navigation.
- On mobile, CTA can appear inside the opened menu and near key page sections.

### Dropdown Strategy

- Avoid dropdowns at launch unless page count increases.
- If services expand, use a simple services dropdown grouped by workflow area.
- Dropdowns should include short descriptive labels only if they improve clarity.

## Footer

### Footer Structure

- Brand statement.
- Primary CTA.
- Company links.
- Services links.
- Industries links.
- Resources links.
- Contact details.
- Privacy link.
- Future terms link if needed.

### Footer Rules

- Use navy background for authority and closure.
- Text must be high contrast.
- Links should be grouped clearly.
- Footer should not become a second homepage.
- Include the assessment CTA without making the footer feel crowded.

## Icons

### Icon Style

- Outline icons.
- Simple.
- Modern.
- Rounded.
- Consistent stroke width.

### Recommended Icon Meanings

- Automation: gear or workflow nodes.
- Scheduling: calendar.
- Messaging: message circle.
- Growth: trending line.
- Time: clock.
- Calls: phone.
- Email: mail.
- AI: bot or spark, used carefully.
- Process: route or list checks.
- Security: shield.
- Documentation: file text.

### Icon Rules

- Icons should clarify, not decorate.
- Use icons from a consistent library in implementation.
- Do not mix filled, hand-drawn, and outline styles.
- Icon size should align to content hierarchy.
- Avoid emoji as interface icons.

## Illustrations

### Illustration Direction

Use simple workflow-oriented visuals instead of abstract decorative illustrations.

Recommended illustration subjects:

- Workflow maps.
- Intake-to-filing handoffs.
- Automation triggers.
- Before-after process diagrams.
- Dashboard-like operational snapshots.
- Assessment roadmap.

### Illustration Rules

- Keep diagrams readable.
- Use brand colors sparingly.
- Avoid overly playful characters.
- Avoid generic automation graphics that could fit any SaaS site.
- Use illustrations to explain process and trust, not to fill empty space.

## Photography Direction

### Recommended Photography

- Professional offices.
- Law firm operations teams.
- Laptops and dashboards.
- Team collaboration.
- Remote consulting settings.
- Clean workspaces.
- Human-centered professional service moments.

### Avoid

- Fake-looking stock photos.
- Overly polished corporate boardrooms.
- Cluttered desks.
- Dark moody tech imagery.
- Unrelated legal imagery such as gavels as a primary visual trope.
- Images that imply attorneys or clients without proper rights and context.

### Photography Rules

- Images should support credibility and human connection.
- Prefer realistic operational scenes over abstract tech stock.
- Crop images to preserve people, context, and work surfaces clearly.
- Use consistent brightness and color temperature.
- Avoid using photos as busy backgrounds behind long text.

## Animation Philosophy

### Principles

- Motion should guide attention, not entertain.
- Use subtle transitions.
- Respect users who prefer reduced motion.
- Avoid animation that delays access to content.
- Do not animate critical text in ways that affect readability.

### Recommended Motion

- Button hover transitions.
- Card hover border/background changes.
- Gentle section reveal, if implemented carefully.
- Accordion open/close.
- Mobile navigation open/close.
- Form submission feedback.

### Timing

- Fast interactions: 120-180ms.
- Standard transitions: 180-240ms.
- Larger overlay transitions: 240-320ms.

Avoid slow, bouncy, or excessive motion.

## Interaction States

### Required States

Every interactive component should define:

- Default.
- Hover.
- Active.
- Focus.
- Disabled.
- Loading, where applicable.
- Error, where applicable.
- Success, where applicable.

### Focus Rules

- Focus states must be visible and not rely on color alone.
- Focus ring should work on light and dark surfaces.
- Do not remove default keyboard accessibility without replacing it with an accessible visible state.

### Link Rules

- Links inside body copy should be visually distinguishable.
- Color alone is acceptable only if contrast is strong and context is clear; underline on hover and focus is recommended.
- Footer links need clear hover and focus states.

## Accessibility

### Contrast

- Body text must meet WCAG AA contrast.
- Large text and UI controls should meet WCAG AA.
- Yellow must be tested carefully. Do not put white text on yellow unless contrast is proven sufficient.
- Use navy or dark text on yellow buttons.

### Structure

- One H1 per page.
- Headings must follow logical order.
- Navigation must be keyboard accessible.
- Forms must have visible labels.
- Errors must be clear and connected to fields.
- Images need meaningful alt text when informative.
- Decorative images should be ignored by assistive tech in implementation.

### Motion

- Respect reduced-motion preference.
- Avoid essential information delivered only through animation.

### Touch Targets

- Minimum 44px target size for buttons, nav triggers, form controls, and mobile menu items.

### Readability

- Body text should be at least 16px.
- Avoid long centered copy blocks.
- Maintain sufficient line height.
- Keep paragraph length manageable.

## Dark Mode Strategy - Future

Dark mode should not be part of initial launch unless there is a clear business reason.

### Future Dark Mode Principles

- Preserve trust and readability.
- Use navy as the foundation, not pure black.
- Keep yellow as accent only.
- Maintain clear borders and focus states.
- Avoid neon SaaS aesthetics.

### Future Dark Mode Token Direction

| Role | Future Direction |
|---|---|
| Background | Deep navy or blue-black |
| Surface | Slightly lighter navy surface |
| Text | Soft white |
| Muted Text | Cool gray |
| Border | Low-contrast blue-gray |
| Accent | Same yellow, used sparingly |
| Focus | High-contrast yellow or blue outline |

### Dark Mode Risks

- Legal/professional service buyers may perceive dark mode as less formal if over-styled.
- Yellow can become too visually loud on dark surfaces.
- Charts, diagrams, and logos may need alternate assets.

Recommendation: defer dark mode until the light design system, content, and conversion path are validated.

## Component Token Summary

### Buttons

| Token | Value |
|---|---|
| button.height.default | 48px |
| button.height.compact | 40px |
| button.radius | 6px |
| button.padding.inline | 20px |
| button.gap.icon | 8px |
| button.weight | 700 |

### Cards

| Token | Value |
|---|---|
| card.radius | 8px |
| card.padding.mobile | 20px |
| card.padding.desktop | 24px |
| card.border | Light border |
| card.shadow | None by default |

### Forms

| Token | Value |
|---|---|
| input.height | 48px |
| input.radius | 6px |
| input.padding.inline | 14px |
| input.border | Light border |
| input.focus | Visible focus ring |
| textarea.min.height | 128px |

### Navigation

| Token | Value |
|---|---|
| nav.height.mobile | 64px |
| nav.height.desktop | 72px |
| nav.link.size | 15px |
| nav.link.weight | 500 |
| nav.cta.height | 44px |

### Layout

| Token | Value |
|---|---|
| layout.container.narrow | 720px |
| layout.container.readable | 860px |
| layout.container.standard | 1120px |
| layout.container.wide | 1280px |
| layout.grid.desktop | 12 columns |
| layout.grid.tablet | 6 columns |
| layout.grid.mobile | 4 columns |

## Design System Governance

- Do not introduce new colors without a clear role.
- Do not introduce new radius values unless a component genuinely needs it.
- Do not create one-off button styles.
- Do not use cards for full page sections.
- Do not use animation as decoration.
- Do not use stock imagery that weakens trust.
- Any future component should define purpose, anatomy, states, accessibility notes, and token usage.

## Phase 4 Conclusion

The Sharpened design system should be clean, operational, trustworthy, and conversion-oriented. The visual language should reinforce the brand's SSDI workflow automation positioning through disciplined color use, strong typography, structured spacing, clear components, accessible interactions, and restrained motion.

No React, Tailwind, CSS, or implementation code has been created in this phase. The next phase should only proceed after this design system is approved or revised.
