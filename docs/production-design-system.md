# Sharpened Production Design System

## Phase

Design System

## Scope

This document defines a production-ready design system specification for the Sharpened website. It is technology-neutral and contains no Tailwind, React, CSS, or implementation code.

The system supports:

- Home.
- Services.
- Workflow Assessment.
- About.
- Contact.
- Privacy Policy.
- Not Found.
- Future Resources, Case Studies, FAQ, and Workflow Library pages.

## Design Principles

1. Professional before decorative.
2. Workflow clarity before visual novelty.
3. Conversion-focused without pressure.
4. Mobile-first and accessibility-first.
5. Trustworthy enough for law firm buyers.
6. Practical enough for operations teams.
7. Consistent enough to scale into future resources and case studies.

Why:

- UX improves because users can scan, understand, and act quickly.
- Conversion improves because the primary action remains clear.
- Maintainability improves because decisions are reusable.
- Scalability improves because future pages can extend the system without redesign.

## Color Tokens

## Core Brand Tokens

| Token | Value | Usage |
|---|---|---|
| `color.brand.primary` | `#00153B` | Navy authority, header, footer, trust bands, high-emphasis text areas |
| `color.brand.secondary` | `#0642D0` | Links, active states, workflow diagrams, secondary emphasis |
| `color.brand.accent` | `#FEC001` | Primary CTAs only |
| `color.background.page` | `#F0F1F4` | Page background, muted bands |
| `color.text.primary` | `#353637` | Main body text |

## Supporting Neutral Tokens

| Token | Value | Usage |
|---|---|---|
| `color.surface.white` | `#FFFFFF` | Main surfaces, forms, cards, header |
| `color.surface.subtle` | `#F8F9FB` | Low-contrast internal panels |
| `color.border.default` | `#D8DCE3` | Cards, forms, dividers |
| `color.border.strong` | `#B8C0CC` | Strong structure, tables, focused surfaces |
| `color.text.muted` | `#62666D` | Supporting text, captions, helper text |
| `color.text.inverse` | `#FFFFFF` | Text on navy surfaces |

## Feedback Tokens

| Token | Value | Usage |
|---|---|---|
| `color.feedback.success` | `#127A3A` | Success messages, confirmed states |
| `color.feedback.warning` | `#A16000` | Caution messages |
| `color.feedback.error` | `#B42318` | Errors, invalid form states |
| `color.focus.default` | `#0642D0` | Focus ring on light surfaces |
| `color.focus.inverse` | `#FEC001` | Focus ring on navy surfaces |

## Color Rules

- Yellow is only for primary CTAs and critical action emphasis.
- Do not use yellow as a large background behind body text.
- Navy should create authority and closure.
- Blue should signal interaction and workflow clarity.
- White and soft gray should dominate the page surface.
- Do not introduce additional brand colors without a defined role.

## Typography

## Font Families

| Role | Preferred | Fallback Direction |
|---|---|---|
| Headings | Montserrat | League Spartan or strong system sans |
| Body/UI | Inter | Poppins or system sans |

## Typography Scale

| Token | Mobile | Desktop | Line Height | Weight | Usage |
|---|---:|---:|---:|---:|---|
| `type.display` | 40px | 64px | 1.05 | 800 | Homepage hero only |
| `type.h1` | 36px | 56px | 1.08 | 800 | Page heroes |
| `type.h2` | 28px | 40px | 1.15 | 700 | Major sections |
| `type.h3` | 22px | 28px | 1.25 | 700 | Subsections, groups |
| `type.h4` | 18px | 22px | 1.35 | 600 | Card titles, FAQ headings |
| `type.body.large` | 18px | 20px | 1.6 | 400 | Hero subheads, page intros |
| `type.body` | 16px | 16px | 1.65 | 400 | Main copy |
| `type.body.small` | 14px | 14px | 1.55 | 400 | Helper text, captions |
| `type.label` | 13px | 13px | 1.3 | 600 | Labels, badges |
| `type.nav` | 15px | 15px | 1.2 | 500 | Navigation |
| `type.button` | 15px | 16px | 1.2 | 700 | Buttons |

## Typography Rules

- Use one H1 per page.
- Do not scale font size fluidly by viewport width.
- Keep letter spacing at `0` except small uppercase labels, where slight positive tracking is acceptable.
- Keep body copy lines around 55-75 characters.
- Use centered text only for short intros or CTA bands.
- Do not use hero-scale type inside cards or compact panels.

## Spacing

## Base Spacing Tokens

| Token | Value | Usage |
|---|---:|---|
| `space.0` | 0 | No space |
| `space.1` | 4px | Tight icon/text gaps |
| `space.2` | 8px | Compact internal gaps |
| `space.3` | 12px | Labels, tight stacks |
| `space.4` | 16px | Default element gap |
| `space.5` | 20px | Small card padding |
| `space.6` | 24px | Standard card padding |
| `space.8` | 32px | Groups and grids |
| `space.10` | 40px | Compact section spacing |
| `space.12` | 48px | Medium section spacing |
| `space.16` | 64px | Standard section spacing |
| `space.20` | 80px | Large section spacing |
| `space.24` | 96px | Hero and major spacing |
| `space.32` | 128px | Large desktop hero spacing |

## Section Spacing

| Context | Mobile | Desktop |
|---|---:|---:|
| Hero | 64px top/bottom | 96px top/bottom |
| Standard section | 56px | 80px |
| Compact section | 40px | 56px |
| CTA band | 48px | 72px |
| Footer | 48px | 64px |

## Spacing Rules

- Use whitespace to separate decision stages.
- Keep related content visually grouped.
- Give primary CTAs enough space to stand out.
- Avoid large empty gaps that make pages feel unfinished.
- Avoid cramped service grids.

## Container Width

| Token | Width | Usage |
|---|---:|---|
| `container.narrow` | 720px | Privacy, long-form text, focused copy |
| `container.readable` | 860px | FAQs, process detail, intro content |
| `container.standard` | 1120px | Most sections |
| `container.wide` | 1280px | Hero, service grids, resource grids |
| `container.full` | 100% | Full-width bands |

## Container Rules

- Full-width bands must contain inner constrained content.
- Long-form text should never span the full page width.
- Use wide containers only when the content genuinely needs more horizontal space.

## Grid

## Breakpoints

| Token | Width | Purpose |
|---|---:|---|
| `breakpoint.xs` | 360px | Small mobile support |
| `breakpoint.sm` | 480px | Large mobile |
| `breakpoint.md` | 768px | Tablet |
| `breakpoint.lg` | 1024px | Small desktop |
| `breakpoint.xl` | 1280px | Standard desktop |
| `breakpoint.2xl` | 1536px | Wide desktop |

## Grid System

| Viewport | Columns | Typical Gutter |
|---|---:|---:|
| Mobile | 4 | 16px |
| Tablet | 6 | 20px |
| Desktop | 12 | 24px |

## Grid Rules

- Design mobile-first.
- Use one column for forms, FAQs, and long reading flows on mobile.
- Use two-column layouts on desktop only when the second column contains useful proof, process, or form content.
- Use three-column grids only for repeated cards with comparable content length.
- Do not create complex asymmetry for core conversion pages.

## Radius

| Token | Value | Usage |
|---|---:|---|
| `radius.none` | 0 | Full-width sections, table internals |
| `radius.xs` | 4px | Small controls, tags |
| `radius.sm` | 6px | Buttons, inputs |
| `radius.md` | 8px | Standard cards, forms |
| `radius.lg` | 12px | Large feature panels only |
| `radius.full` | 999px | Pills, badges, circular icons |

## Radius Rules

- Most surfaces should be 8px or less.
- Avoid playful rounded cards for serious service content.
- Do not introduce one-off radius values.

## Elevation

| Token | Value | Usage |
|---|---|---|
| `elevation.none` | none | Default layout |
| `elevation.border` | border only | Cards, forms, panels |
| `elevation.sm` | subtle shadow | Header, dropdowns |
| `elevation.md` | soft overlay shadow | Modals or overlays, future |
| `elevation.focus` | visible outline/ring | Keyboard focus |

## Elevation Rules

- Prefer borders and background contrast over shadows.
- Cards should be border-first.
- Avoid heavy floating SaaS-card styling.
- Do not nest cards inside cards.

## Buttons

## Button Types

### Primary Button

Purpose:

- Main conversion action.

Use for:

- Schedule a Workflow Assessment.
- Schedule Assessment.
- Send Request.
- Send Message.

Visual specification:

- Background: `#FEC001`.
- Text: navy or dark text after contrast validation.
- Height: 48px minimum.
- Radius: 6px.
- Weight: 700.
- Icon: optional calendar, send, or arrow.

### Secondary Button

Purpose:

- Secondary navigation or supporting action.

Use for:

- View Services.
- See What We Assess.
- Contact Sharpened.

Visual specification:

- White or transparent background.
- Navy or blue text.
- Border on light backgrounds.
- Height: 44-48px.
- Radius: 6px.

### Tertiary Button

Purpose:

- Low-emphasis inline action.

Use for:

- Read FAQ.
- View details.
- Return to Home.

Visual specification:

- Text link style.
- Optional arrow icon.
- Underline or clear hover/focus treatment.

### Inverse Button

Purpose:

- CTA on navy surfaces.

Visual specification:

- Prefer yellow primary button with dark text.
- Secondary inverse can use white text and white border.

## Button States

| State | Requirement |
|---|---|
| Default | Clear affordance and sufficient contrast |
| Hover | Slight tonal change or border emphasis |
| Active | Pressed state with visible feedback |
| Focus | 2px visible focus ring, not color-only |
| Disabled | Muted but readable, no pointer interaction |
| Loading | Preserve width, show clear loading text or indicator |
| Success | Confirm action when relevant |
| Error | Pair with message, not color alone |

## Button Rules

- One primary button per visual cluster.
- Yellow appears only on primary buttons.
- Avoid vague labels.
- Button text must not wrap awkwardly.
- Full-width buttons are acceptable on mobile forms.

## Cards

## Card Types

- Service card.
- Problem card.
- Benefit card.
- Process step card.
- Trust/value card.
- FAQ preview card.
- Resource card, future.
- Case study card, future.

## Card Anatomy

- Optional icon.
- Title.
- Short body text.
- Optional metadata.
- Optional CTA/link.

## Card Specifications

- Background: white.
- Border: default border.
- Radius: 8px.
- Padding: 20px mobile, 24px desktop.
- Shadow: none by default.
- Icon size: 20-28px depending on hierarchy.

## Card States

| State | Requirement |
|---|---|
| Default | Clear boundary and readable hierarchy |
| Hover | Border shift or subtle background change if clickable |
| Focus | Visible focus ring if interactive |
| Active | Clear selected/pressed feedback if applicable |
| Disabled | Muted and non-interactive when relevant |
| Empty | State message when no content exists |

## Card Rules

- Use cards only for repeated items.
- Do not make full sections look like cards.
- Do not place cards inside cards.
- Keep card text concise and comparable.

## Forms

## Form Types

- Contact form.
- Workflow Assessment request form.
- Future resource download form.

## Standard Form Fields

- Name.
- Email.
- Firm name.
- Role.
- Firm website, optional.
- Primary workflow challenge.
- Current tools, optional.
- Message, optional.

## Form Anatomy

- Field label.
- Required marker where needed.
- Input/select/textarea.
- Helper text where useful.
- Error message.
- Privacy note.
- Submit button.
- Success/error submission message.

## Form Specifications

- Input height: 48px minimum.
- Textarea minimum height: 128px.
- Radius: 6px.
- Border: default border.
- Label: visible above field.
- Field gap: 16px.
- Form max width: readable or narrow container depending on page.

## Form States

| State | Requirement |
|---|---|
| Default | Visible label and clear boundary |
| Hover | Subtle border emphasis |
| Focus | Visible focus ring and border emphasis |
| Filled | Value remains readable |
| Error | Error color, text explanation, field association |
| Success | Confirmation message after submit |
| Disabled | Muted, readable, skipped if not usable |
| Loading | Submit action shows progress and prevents duplicate submission |
| Empty | Required empty state communicated after validation |

## Form Accessibility

- Labels must never be replaced by placeholder text.
- Error messages must explain how to fix the issue.
- Focus order must match visual order.
- Do not request sensitive claimant/client data.
- Include privacy helper text before or near message fields.

## Badges

## Badge Purpose

Badges should provide short status, category, or trust cues. They should not compete with CTAs.

## Badge Types

- Audience badge.
- Service category badge.
- Trust badge.
- Status badge.
- Future resource category badge.

## Badge Specifications

- Radius: full.
- Type: label size.
- Padding: compact.
- Background: subtle gray, navy-tinted, or blue-tinted.
- Yellow badges should be avoided unless directly tied to primary CTA status.

## Badge Rules

- Keep badge text short.
- Do not use badges as decoration.
- Do not create unverified proof badges.

## Tags

## Tag Purpose

Tags classify content and workflow areas.

Examples:

- Intake.
- Filing.
- Follow-up.
- Documentation.
- Case Management.
- Workflow Assessment.

## Tag Specifications

- Radius: full or 4px depending on density.
- Border: light border.
- Text: muted or secondary blue.
- Background: white or subtle.

## Tag Rules

- Use tags for filtering or classification.
- Keep tags visually quieter than badges and CTAs.
- Avoid tag overload.

## Navigation

## Desktop Navigation

Links:

- Home.
- Services.
- Workflow Assessment.
- About.
- Contact.

Primary CTA:

- Schedule Assessment.

Specifications:

- Header height: 72px.
- Logo area with clear space.
- Nav type: 15px, medium weight.
- CTA height: 44px.
- Active state visible.
- White or light surface preferred.

## Mobile Navigation

Links:

- Home.
- Services.
- Workflow Assessment.
- About.
- Contact.

Primary CTA:

- Schedule Assessment.

Specifications:

- Header height: 64px.
- Menu trigger target: 44px minimum.
- Mobile menu links: clear vertical spacing.
- CTA visible inside opened menu.
- No dropdowns at launch.

## Navigation States

| State | Requirement |
|---|---|
| Default | Clear link visibility |
| Hover | Text or underline emphasis |
| Active/current | Visible active page indicator |
| Focus | Keyboard-visible outline |
| Open mobile | Clear expanded state |
| Disabled | Avoid disabled nav links when possible |

## Footer

## Footer Purpose

The footer closes the page with trust, recovery navigation, and a final conversion path.

## Footer Anatomy

- Brand identity block.
- Short positioning statement.
- Navigation links.
- Workflow Assessment CTA.
- Privacy note.
- Contact link or email when confirmed.
- Privacy Policy link.
- Copyright.

## Footer Specifications

- Background: navy.
- Text: white or high-contrast muted inverse.
- Link hover/focus: clear underline or contrast change.
- CTA: yellow primary or white inverse depending on visual density.
- Layout: stacked on mobile, grouped columns on desktop.

## Footer Rules

- Do not turn the footer into a second homepage.
- Keep link groups short.
- Include Privacy Policy.
- Include no-sensitive-data reminder if forms are prominent site-wide.

## Accordion

## Accordion Purpose

Use accordions for FAQs and dense objection-handling content.

## Accordion Anatomy

- Question trigger.
- Expand/collapse icon.
- Answer panel.
- Optional related CTA.

## Accordion Specifications

- Trigger target: 44px minimum.
- Border: light divider.
- Icon: chevron or plus/minus.
- Answer text: body size, readable width.
- Animation: short and optional.

## Accordion States

| State | Requirement |
|---|---|
| Collapsed | Question readable, icon shows expandable state |
| Expanded | Answer visible, icon changes state |
| Hover | Subtle background or text emphasis |
| Focus | Visible ring on trigger |
| Disabled | Avoid unless necessary |

## Accordion Rules

- Questions must be written plainly.
- Do not hide essential conversion information only inside accordions.
- On mobile, accordion content must not cause layout jumps that obscure focus.

## Timeline

## Timeline Purpose

Use timeline patterns to explain process: discovery, assessment, mapping, recommendations, implementation, handoff.

## Timeline Types

- Vertical mobile timeline.
- Horizontal desktop process line.
- Numbered process list.

## Timeline Anatomy

- Step number.
- Step title.
- Short description.
- Optional icon.
- Optional CTA at end.

## Timeline Specifications

- Use numbered hierarchy before icons.
- Keep descriptions short.
- Use blue for connecting lines.
- Use yellow only if a timeline step is also a primary action point.

## Timeline Rules

- Timeline must clarify sequence.
- Do not use timeline purely as decoration.
- Keep mobile timeline single-column.

## Hero

## Hero Purpose

Hero sections establish page purpose, audience fit, and next action.

## Hero Anatomy

- Optional eyebrow/audience cue.
- H1.
- Supporting subheading.
- Primary CTA.
- Secondary CTA.
- Optional trust cue.
- Optional visual: workflow diagram, process card, or realistic professional image.

## Hero Specifications

- Mobile: single column.
- Desktop: one or two columns only if the second column adds real value.
- Spacing: 64px mobile, 96px desktop.
- Primary CTA must be visible without crowding.

## Hero Rules

- Do not place hero content inside a decorative card.
- Do not use abstract filler visuals.
- Do not hide the next section completely on common desktop sizes.
- Use one H1 per page.

## Section

## Section Types

- Standard content section.
- Muted background band.
- Navy trust band.
- CTA band.
- Form section.
- FAQ section.
- Long-form legal/support section.

## Section Anatomy

- Optional eyebrow.
- Heading.
- Intro text.
- Content group.
- Optional CTA.

## Section Specifications

- Standard section spacing: 56px mobile, 80px desktop.
- Section heading max width: readable.
- Content group gap: 24-32px.
- Full-width bands must contain constrained content.

## Section Rules

- Each section should answer one user question.
- Do not use cards to frame entire sections.
- Alternate backgrounds only when it supports scanning.
- Keep CTA placement contextual.

## Interaction States

## Global State Requirements

Every interactive element must define:

- Default.
- Hover.
- Active.
- Focus.
- Disabled, where applicable.
- Loading, where applicable.
- Empty, where applicable.
- Success, where applicable.
- Error, where applicable.

## Motion Timing

| Interaction | Timing |
|---|---:|
| Hover/focus transition | 120-180ms |
| Accordion expand/collapse | 180-240ms |
| Mobile nav open/close | 180-240ms |
| Overlay/modal, future | 240-320ms |

## Motion Rules

- Motion should guide attention, not entertain.
- Respect reduced-motion preferences.
- Do not animate critical text in a way that affects readability.
- Do not delay access to content.

## Accessibility

## Contrast

- Body text must meet WCAG AA.
- UI controls must meet WCAG AA.
- Yellow buttons should use navy or dark text, not white unless contrast is proven.
- Text on navy must use white or sufficiently light muted text.

## Keyboard

- All interactive elements must be keyboard accessible.
- Focus state must be visible.
- Focus order must match visual order.
- Mobile menu and accordions must support keyboard operation.

## Semantics

- One H1 per page.
- Headings must follow logical order.
- Buttons must be used for actions.
- Links must be used for navigation.
- Forms must have visible labels.
- Error messages must be associated with fields.

## Content Accessibility

- Do not rely on color alone to communicate state.
- Informative images need meaningful alt text.
- Decorative images should be ignored by assistive technology.
- Avoid long centered paragraphs.
- Keep body text at least 16px.

## Touch Targets

- Buttons: 44px minimum.
- Nav triggers: 44px minimum.
- Accordion triggers: 44px minimum.
- Form fields: 44px minimum.

## Dark Mode Strategy

## Launch Recommendation

Do not launch dark mode initially.

Why:

- The primary buyer expects clarity and trust, not theme novelty.
- Dark mode increases asset, contrast, and QA requirements.
- Yellow becomes visually louder on dark backgrounds.
- The light system should be validated first.

## Future Dark Mode Principles

- Use deep navy, not pure black.
- Preserve yellow as CTA-only.
- Maintain readable borders and focus states.
- Avoid neon SaaS styling.
- Re-test all diagrams, photos, logos, and form states.

## Future Dark Tokens

| Token | Future Direction |
|---|---|
| `color.dark.background` | Deep navy / blue-black |
| `color.dark.surface` | Slightly lighter navy |
| `color.dark.text.primary` | Soft white |
| `color.dark.text.muted` | Cool gray |
| `color.dark.border` | Blue-gray low-contrast border |
| `color.dark.accent` | Same yellow, CTA-only |
| `color.dark.focus` | Yellow or bright blue focus ring |

## Governance

## System Rules

- Do not introduce new colors without a defined role.
- Do not create one-off button styles.
- Do not use yellow decoratively.
- Do not use cards for page sections.
- Do not nest cards.
- Do not rely on stock imagery for proof.
- Do not add animation without purpose.
- Do not create new spacing or radius values casually.

## Production Checklist

Before implementation, confirm:

1. Final logo package.
2. Final font decision.
3. Final CTA label.
4. Final form fields.
5. Final booking or form destination.
6. Final privacy language.
7. Sample workflow visuals or placeholder strategy.
8. Accessibility contrast validation.
9. Mobile navigation behavior.
10. Form success and error messages.

## Final Design System Summary

The Sharpened design system should create a calm, precise, professional website for SSDI workflow automation consulting. It should use navy for trust, blue for interaction and workflow clarity, yellow only for primary conversion actions, and generous whitespace for confidence.

The system is production-ready as a specification. It intentionally contains no Tailwind code, React components, or implementation details.
