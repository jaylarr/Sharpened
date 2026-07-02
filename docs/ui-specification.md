# Sharpened UI Specification

## Phase

UI Specification

## Scope

This document describes the production UI for every page and section. It prepares the website for React implementation without writing code.

The specification covers:

- Global layout.
- Every page.
- Every section.
- Reusable UI components.
- Hover, focus, active, loading, empty, success, and error states.
- Spacing.
- Typography.
- Icons.
- Photography.
- Illustrations.
- Animation.
- Interactions.

No React, Tailwind, CSS, or implementation code is included.

## UI Direction

The UI should feel like a calm, precise workflow consultancy for SSDI law firms.

Visual posture:

- Professional.
- Structured.
- Operational.
- Trustworthy.
- Modern without looking like generic SaaS.
- Clear before decorative.

Primary conversion action:

- Schedule a Workflow Assessment.

Why:

- UX improves because visitors can quickly understand where they are and what to do next.
- Conversion improves because visual hierarchy consistently points to one primary action.
- Maintainability improves because repeated UI sections can become reusable React components.
- Scalability improves because future pages can extend the same system.

## Global UI System

## Page Shell

All pages use:

- Header.
- Main content.
- Footer.

Desktop:

- Header height around 72px.
- Main content centered in standard or wide containers.
- Footer uses grouped columns.

Tablet:

- Header remains horizontal until links become cramped.
- Main content uses single or two-column layouts.
- Footer groups stack or wrap.

Mobile:

- Header height around 64px.
- Navigation collapses into a menu button.
- Main content is single column.
- Footer stacks fully.

## Header

Content:

- Logo/wordmark.
- Nav links: Home, Services, Workflow Assessment, About, Contact.
- Primary CTA: Schedule Assessment.
- Mobile menu trigger.

Desktop layout:

- Logo left.
- Nav center/right.
- CTA far right.

Mobile layout:

- Logo left.
- Menu trigger right.
- Expanded menu shows nav links and CTA vertically.

States:

- Hover: nav link shows underline or color emphasis.
- Active: current page clearly marked.
- Focus: visible focus ring.
- Mobile open: menu button state changes and menu panel opens.
- Mobile close: menu closes after link selection.

Icons:

- Menu icon for mobile navigation.
- X icon for close state.
- Calendar or arrow icon may appear in CTA if used consistently.

Spacing:

- Keep nav compact and readable.
- Maintain minimum 44px hit targets.

## Footer

Content:

- Brand summary.
- Navigation links.
- Workflow Assessment CTA.
- Trust/privacy note.
- Contact link or email when available.
- Privacy Policy link.
- Copyright.

Visual behavior:

- Navy authority surface.
- Clear grouped links.
- CTA visible but not overcrowded.

States:

- Footer links use hover/focus underline.
- Footer CTA follows primary or inverse button rules.

## Typography

Use:

- Montserrat for headings.
- Inter for body and UI.

Hierarchy:

- H1 for page hero only.
- H2 for major sections.
- H3 for subsection/card groups.
- Body large for hero and section intros.
- Body for normal copy.
- Small text only for helper content and captions.

Rules:

- Do not use oversized typography inside cards.
- Avoid long centered paragraphs.
- Keep body copy readable and moderate in width.

## Color Behavior

Use:

- Navy for authority and high-trust sections.
- Blue for links, active states, diagram lines, and technical cues.
- Yellow only for primary CTAs.
- White and soft gray for structure and breathing room.
- Text gray for body copy.

Rules:

- Do not use yellow as decoration.
- Do not create multiple competing yellow elements in one section.
- Do not use white text on yellow unless contrast is validated.

## Reusable Components

## Button

Variants:

- Primary.
- Secondary.
- Tertiary/link.
- Inverse.

Primary button:

- Used for conversion actions.
- Yellow background.
- Dark text.
- Optional calendar, send, or arrow icon.

Secondary button:

- Used for supporting navigation.
- Outline or low-emphasis treatment.

Tertiary button:

- Used for text links and low-emphasis actions.

States:

- Default: clear affordance.
- Hover: slight tonal or border change.
- Active: pressed feedback.
- Focus: visible ring.
- Disabled: muted and non-interactive.
- Loading: width preserved, loading text or spinner.
- Success: confirmation where applicable.
- Error: paired with error message.

## Card

Used for:

- Service cards.
- Problem cards.
- Persona cards.
- Deliverable cards.
- Value cards.
- Resource cards, future.

Anatomy:

- Optional icon.
- Title.
- Short description.
- Optional CTA/link.

Visual behavior:

- White surface.
- Light border.
- 8px radius.
- No heavy shadow.

States:

- Hover: border or subtle background shift if clickable.
- Focus: visible ring if interactive.
- Active: selected/pressed state if applicable.
- Empty: clear placeholder message if content is unavailable.

## Accordion

Used for:

- FAQ sections.

Anatomy:

- Question trigger.
- Expand/collapse icon.
- Answer panel.

States:

- Collapsed.
- Expanded.
- Hover.
- Focus.

Interaction:

- Click or keyboard activation toggles answer.
- Only one open at a time is acceptable, but multiple open is also acceptable if implementation is simpler.
- Do not hide critical conversion information only inside accordions.

Icons:

- ChevronDown / ChevronUp or Plus / Minus.

## Timeline / Process Steps

Used for:

- Home process.
- Services connected process.
- Workflow Assessment process.
- Contact next steps.

Anatomy:

- Step number.
- Step title.
- Short explanation.
- Optional icon.

Desktop:

- Horizontal when space allows.

Tablet/mobile:

- Vertical or wrapped.

States:

- Static by default.
- Optional subtle reveal on scroll.

## Form

Used for:

- Contact.
- Workflow Assessment request.

Fields:

- Name.
- Email.
- Firm name.
- Role.
- Primary workflow challenge.
- Current tools, optional.
- Message, optional.

Requirements:

- Visible labels.
- Clear required indicators.
- Privacy helper text.
- Do not request sensitive claimant/client details.

States:

- Default.
- Hover.
- Focus.
- Filled.
- Error.
- Success.
- Disabled.
- Loading.

Success state:

- Show confirmation message and next-step expectation.

Error state:

- Explain what failed and how to fix it.

## Badge / Tag

Used for:

- Audience cues.
- Service categories.
- Workflow labels.
- Trust cues.

Rules:

- Keep short.
- Do not use as decoration.
- Avoid yellow badges unless directly tied to a primary action.

## Icons

Use outline icons with consistent stroke.

Recommended Lucide-style icon mapping:

- Workflow/process: Workflow, Route, GitBranch.
- Calendar/scheduling: Calendar.
- Messaging: MessageCircle, Mail.
- Time: Clock.
- Documentation: FileText, ClipboardList.
- Security/privacy: Shield.
- Assessment/checking: ListChecks, CheckCircle.
- Services/settings: Settings, Cog.
- Users/team: Users.
- CTA direction: ArrowRight, Send.
- Mobile menu: Menu, X.

Rules:

- Icons clarify meaning; they do not decorate.
- Keep icon sizes consistent within component types.
- Do not mix filled and outline styles.

## Photography

Use photography sparingly.

Recommended subjects:

- Professional operations teams.
- Remote consulting.
- Organized workspaces.
- Process documentation.
- Team reviewing dashboards or workflows.

Avoid:

- Gavels.
- Courtrooms.
- Judges.
- Scales of justice.
- Distressed clients.
- Medical imagery.
- Dark AI or hacker visuals.
- Fake-looking stock photos.

Placement:

- Hero support visual only if it adds credibility.
- About page founder/mission support if approved.
- Avoid photo backgrounds behind long text.

## Illustrations / Diagrams

Preferred visual assets:

- Workflow maps.
- Assessment roadmap.
- Intake-to-filing process.
- Bottleneck map.
- Deliverables preview.
- Before/after workflow diagram.

Rules:

- Functional, readable, and labeled.
- Use brand colors sparingly.
- Yellow only for action points or CTA-adjacent emphasis.
- Do not use abstract filler illustrations.

## Animation

Motion should be subtle.

Recommended:

- Button hover transition.
- Card hover transition.
- Accordion expand/collapse.
- Mobile menu open/close.
- Form submission state.
- Optional section reveal.

Timing:

- Hover/focus: 120-180ms.
- Accordions/nav: 180-240ms.
- Larger overlays, future: 240-320ms.

Rules:

- Respect reduced motion.
- Do not animate critical text in a way that delays reading.
- Do not use bounce, excessive parallax, or decorative motion.

## Page Specifications

## Home Page

Route:

- `/`

Primary goal:

- Move visitors from SSDI relevance to Workflow Assessment interest.

## Home Section 1: Hero

Layout:

- Desktop: two columns.
- Left: eyebrow, H1, subheading, CTA group, trust cue.
- Right: workflow diagram, assessment preview, or realistic operational image.
- Mobile: copy first, CTA second, visual after trust cue.

Typography:

- H1 uses display or H1 size.
- Subheading uses body large.

CTA:

- Primary: Schedule a Workflow Assessment.
- Secondary: View Services.

Icon:

- Primary CTA may use Calendar or ArrowRight.

Interaction:

- CTA hover/focus states.
- Secondary CTA hover/focus states.

## Home Section 2: Problem

Layout:

- Section intro.
- Six problem cards.
- Desktop: 3x2 grid.
- Tablet: 2-column grid.
- Mobile: stacked cards.

Cards:

- Optional icons: Clock, MessageCircle, FileText, Route, ClipboardList, Users.
- Short title and supporting text.

CTA:

- See What We Assess.

Hover:

- Cards may subtly lift via border/background only if clickable.

## Home Section 3: Solution

Layout:

- Desktop: two columns.
- Left: heading, explanation, CTA, trust note.
- Right: five-step workflow method.
- Mobile: heading, explanation, steps, CTA.

Component:

- Timeline or numbered process list.

CTA:

- Schedule a Workflow Assessment.

## Home Section 4: Services Preview

Layout:

- Section intro.
- Six service cards.
- Desktop: 3x2 grid.
- Tablet: 2-column grid.
- Mobile: stacked cards.

Cards:

- Each card uses icon, title, short text, optional link.

CTA:

- View Services.
- Schedule Assessment as secondary.

## Home Section 5: Process

Layout:

- Horizontal timeline on desktop.
- Vertical timeline on mobile.

Steps:

- Discovery call.
- Workflow review.
- Bottleneck mapping.
- Recommendation roadmap.
- Optional implementation.

CTA:

- See the Workflow Assessment.

## Home Section 6: Trust

Layout:

- Desktop: two columns.
- Left: founder/experience block.
- Right: values, privacy, existing-system reassurance.
- Mobile: stacked.

Trust UI:

- Use value cards or checklist rows.
- Include privacy-safe note.

CTA:

- Discuss Your Workflow.

## Home Section 7: FAQ

Layout:

- Desktop: one readable accordion group or two balanced groups.
- Mobile: single accordion list.

Interaction:

- Accordion hover/focus/expanded states.

CTA:

- Schedule a Workflow Assessment.

## Home Section 8: Final CTA

Layout:

- Full-width band.
- Heading, short prompt, primary CTA.
- On desktop CTA can sit right of text.
- On mobile CTA stacks below text.

## Services Page

Route:

- `/services`

Primary goal:

- Explain service areas and route users toward the assessment.

Sections:

1. Hero.
2. Assessment Gateway.
3. Service Categories.
4. How Services Connect.
5. Boundaries.
6. FAQ.
7. Final CTA.

Hero:

- Two-column desktop with service scope summary.
- Primary CTA: Schedule a Workflow Assessment.

Assessment Gateway:

- Use a strong section panel with heading, short explanation, and CTA.
- Icon: ListChecks or Route.

Service Categories:

- Seven service cards.
- Desktop: 3-column grid with final card allowed to span or align left.
- Tablet: 2-column grid.
- Mobile: stacked.

Service card icons:

- Workflow Assessment: ListChecks.
- Intake: MessageCircle or Users.
- Filing: FileText.
- Case Management: ClipboardList.
- Follow-Up: Mail or MessageCircle.
- SOP Documentation: FileText.
- Optimization: Settings or RefreshCw.

Boundaries:

- Two-column comparison: "What Sharpened does" and "What Sharpened does not do."
- Use check and alert-style icons carefully.

FAQ:

- Accordion.

Final CTA:

- Assessment-focused CTA band.

## Workflow Assessment Page

Route:

- `/workflow-assessment`

Primary goal:

- Convert qualified visitors into assessment/discovery requests.

Sections:

1. Hero.
2. Who It Is For.
3. What Gets Reviewed.
4. Deliverables.
5. Process.
6. After the Assessment.
7. FAQ.
8. Conversion Form / Booking.

Hero:

- Most concrete page hero.
- Include privacy note near CTA.
- Right column shows assessment summary or deliverable preview.

Who It Is For:

- Persona cards.
- Icons: Users, BriefcaseBusiness, ClipboardList.

What Gets Reviewed:

- Desktop two-column: intro/CTA plus checklist.
- Mobile: checklist after intro.
- Checklist icons: CheckCircle.

Deliverables:

- Output cards.
- Desktop: 4-column or 2x4 depending content length.
- Mobile: stacked.

Process:

- Timeline.
- Keep steps short and numbered.

After Assessment:

- Next-step option cards.
- Emphasize no forced implementation.

FAQ:

- Accordion focused on objections.

Conversion Form:

- Desktop two-column: context/privacy/next steps on left, form on right.
- Mobile: intro, privacy note, then form.
- Submit CTA: Send Request.

Form states:

- Loading: submit button shows progress.
- Success: replace or precede form with confirmation panel.
- Error: field-level errors plus form-level message.

## About Page

Route:

- `/about`

Primary goal:

- Build trust through mission, founder-market fit, values, and working principles.

Sections:

1. Hero.
2. Why Sharpened Exists.
3. Founder-Market Fit.
4. Mission and Vision.
5. SHARP Values.
6. Working Principles.
7. Final CTA.

Hero:

- Desktop two-column if approved visual exists.
- Otherwise use centered readable hero.

Why Sharpened Exists:

- Readable-width content block.
- Avoid overly decorative imagery.

Founder-Market Fit:

- Two-column desktop.
- Left: experience narrative.
- Right: workflow credibility list.

Mission and Vision:

- Two balanced cards on desktop.
- Stacked on mobile.

SHARP Values:

- Five value cards.
- Desktop can use 5-column if compact, otherwise 3+2 grid.
- Mobile stacked.

Working Principles:

- Checklist-style list.
- Icons: CheckCircle or Shield.

Final CTA:

- Discuss Your Workflow.

## Contact Page

Route:

- `/contact`

Primary goal:

- Capture qualified inquiry safely.

Sections:

1. Hero.
2. Fit Reminder.
3. Contact Form.
4. What Happens Next.
5. Alternate Contact.

Hero:

- Simple, trust-oriented.
- Include privacy-safe note.

Main layout:

- Desktop: fit reminder left, form right.
- Tablet/mobile: fit reminder first, form second.

Fit Reminder:

- Checklist of good-fit reasons.
- CTA link to Workflow Assessment.

Form:

- Single-column fields.
- Visible labels.
- Privacy helper before message field.
- Submit CTA: Send Message.

What Happens Next:

- Four-step timeline.
- Desktop horizontal, mobile vertical.

Alternate Contact:

- Display only when final email is confirmed.

## Privacy Policy Page

Route:

- `/privacy-policy`

Primary goal:

- Provide readable privacy support and reinforce safe inquiry boundaries.

Layout:

- Desktop: optional left section navigation and main readable content.
- Tablet/mobile: single-column.

Sections:

- Overview.
- Information Collected.
- Information Not Requested.
- How Information Is Used.
- Third-Party Tools.
- Contact.

UI:

- Minimal.
- No decorative cards.
- Use readable text width.

CTA:

- Contact Sharpened.

## Not Found Page

Route:

- `*`

Primary goal:

- Recover users and redirect to useful pages.

Layout:

- Desktop: two columns.
- Left: message and CTAs.
- Right: recovery links.
- Mobile: stacked.

CTA:

- Go Home.
- Schedule Assessment.

Interactions:

- Recovery links have standard link states.

## Responsive Behavior

Desktop:

- Use wide or standard containers.
- Two-column layout only where it supports decision-making.
- Card grids may be 3 or 4 columns depending content density.

Tablet:

- Collapse complex two-column sections into stacked blocks.
- Use 2-column card grids.
- Keep forms one-column.

Mobile:

- Single-column flow.
- CTA appears early after hero text.
- Stacked cards.
- Vertical timelines.
- Single accordion list.
- Form labels always visible.

## Implementation Readiness Notes

Recommended reusable React UI pieces:

- Layout shell.
- Header.
- Mobile nav.
- Footer.
- Section wrapper.
- Page hero.
- CTA band.
- Button.
- Card.
- Service card.
- Problem card.
- Value card.
- Timeline.
- Accordion.
- Form field.
- Textarea field.
- Select field.
- Privacy note.
- Trust checklist.

No implementation should begin until this UI specification is approved.

## Final UI Specification Summary

The Sharpened UI should be structured, quiet, and conversion-focused. Each page should guide users toward the Workflow Assessment while reducing risk through clear process, privacy notes, practical trust elements, and specific SSDI workflow framing.

No code was created in this phase.
