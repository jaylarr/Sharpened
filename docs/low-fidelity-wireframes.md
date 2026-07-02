# Sharpened Low-Fidelity Wireframes

## Phase

Wireframes

## Scope

This document defines low-fidelity page layouts for desktop, tablet, and mobile using Markdown diagrams.

This phase focuses on:

- Layout.
- Section order.
- Content hierarchy.
- CTA placement.
- Scanning flow.
- Responsive structure.

This phase does not define:

- Visual design.
- Colors.
- Typography styling.
- Component styling.
- Final copy.
- Code.

## Page Set

Launch and support pages:

1. Home: `/`
2. Services: `/services`
3. Workflow Assessment: `/workflow-assessment`
4. About: `/about`
5. Contact: `/contact`
6. Privacy Policy: `/privacy-policy`
7. Not Found: `*`

## Global Layout

All pages use the same global shell.

### Desktop Shell

```text
┌──────────────────────────────────────────────────────────────┐
│ Logo        Home Services Assessment About Contact   [CTA]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ Page content                                                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ Footer: Brand | Links | Trust note | CTA | Privacy            │
└──────────────────────────────────────────────────────────────┘
```

### Tablet Shell

```text
┌────────────────────────────────────────────┐
│ Logo              Home Services ... [CTA] │
├────────────────────────────────────────────┤
│                                            │
│ Page content                               │
│                                            │
├────────────────────────────────────────────┤
│ Footer stacked groups                      │
└────────────────────────────────────────────┘
```

### Mobile Shell

```text
┌──────────────────────┐
│ Logo          Menu   │
├──────────────────────┤
│ Mobile menu opens:   │
│ Home                 │
│ Services             │
│ Assessment           │
│ About                │
│ Contact              │
│ [CTA]                │
├──────────────────────┤
│ Page content          │
├──────────────────────┤
│ Footer stacked        │
└──────────────────────┘
```

Why:

- UX improves because the shell is predictable.
- Conversion improves because the assessment CTA stays accessible.
- Maintainability improves because every page shares the same structure.
- Scalability improves because future pages can reuse the same shell.

## Page 1: Home

Purpose:

- Guide visitors from audience fit to problem recognition, solution clarity, service fit, trust, FAQ, and assessment CTA.

## Home Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Hero                                                         │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Eyebrow                  │ │ Workflow / proof visual      │ │
│ │ H1                       │ │ or assessment preview        │ │
│ │ Subheading               │ │                             │ │
│ │ [Primary CTA] [Secondary]│ │ Trust cue / mini process     │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Problem                                                      │
│ Section heading + intro                                      │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Pain card  │ │ Pain card  │ │ Pain card  │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Pain card  │ │ Pain card  │ │ Pain card  │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ [Secondary CTA]                                              │
├──────────────────────────────────────────────────────────────┤
│ Solution                                                     │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Heading + explanation     │ │ 1 Assess                   │ │
│ │ [Primary CTA]             │ │ 2 Identify                 │ │
│ │ Trust note                │ │ 3 Recommend                │ │
│ └──────────────────────────┘ │ 4 Implement                 │ │
│                              │ 5 Document                  │ │
│                              └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Services Preview                                             │
│ Heading + intro                                              │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Service    │ │ Service    │ │ Service    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Service    │ │ Service    │ │ Service    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ [View Services] [Schedule Assessment]                        │
├──────────────────────────────────────────────────────────────┤
│ Process                                                      │
│ Heading + intro                                              │
│ ┌──────┐──┌──────┐──┌──────┐──┌──────┐──┌──────┐           │
│ │  1   │  │  2   │  │  3   │  │  4   │  │  5   │           │
│ └──────┘  └──────┘  └──────┘  └──────┘  └──────┘           │
│ [CTA]                                                        │
├──────────────────────────────────────────────────────────────┤
│ Trust                                                        │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Founder / experience      │ │ Values / privacy / tools    │ │
│ │ CTA                       │ │ Trust bullets               │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ FAQ                                                          │
│ ┌──────────────────────────────┐ ┌─────────────────────────┐ │
│ │ FAQ accordion group           │ │ FAQ accordion group      │ │
│ └──────────────────────────────┘ └─────────────────────────┘ │
│ [CTA]                                                        │
├──────────────────────────────────────────────────────────────┤
│ Final CTA Band                                               │
│ Heading + short prompt                         [Primary CTA] │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Home Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Hero                                       │
│ H1 + Subheading                            │
│ [Primary CTA] [Secondary CTA]              │
│ Workflow / proof visual                    │
├────────────────────────────────────────────┤
│ Problem                                    │
│ ┌──────────────┐ ┌──────────────┐          │
│ │ Pain card    │ │ Pain card    │          │
│ └──────────────┘ └──────────────┘          │
│ ┌──────────────┐ ┌──────────────┐          │
│ │ Pain card    │ │ Pain card    │          │
│ └──────────────┘ └──────────────┘          │
│ ┌──────────────┐ ┌──────────────┐          │
│ │ Pain card    │ │ Pain card    │          │
│ └──────────────┘ └──────────────┘          │
├────────────────────────────────────────────┤
│ Solution                                   │
│ Heading + explanation + CTA                │
│ Process visual                             │
├────────────────────────────────────────────┤
│ Services Preview                           │
│ 2-column service cards                     │
├────────────────────────────────────────────┤
│ Process                                    │
│ Vertical or wrapped step sequence          │
├────────────────────────────────────────────┤
│ Trust                                      │
│ Founder block                              │
│ Trust/value grid                           │
├────────────────────────────────────────────┤
│ FAQ                                        │
│ Single-column accordion                    │
├────────────────────────────────────────────┤
│ Final CTA                                  │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Home Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Hero                 │
│ Eyebrow              │
│ H1                   │
│ Subheading           │
│ [Primary CTA]        │
│ [Secondary CTA]      │
│ Trust cue            │
│ Workflow visual      │
├──────────────────────┤
│ Problem              │
│ Heading              │
│ Intro                │
│ Pain card            │
│ Pain card            │
│ Pain card            │
│ Pain card            │
│ Pain card            │
│ Pain card            │
│ [CTA]                │
├──────────────────────┤
│ Solution             │
│ Heading              │
│ Intro                │
│ Step 1               │
│ Step 2               │
│ Step 3               │
│ Step 4               │
│ Step 5               │
│ [CTA]                │
├──────────────────────┤
│ Services Preview     │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ [CTA]                │
├──────────────────────┤
│ Process              │
│ Vertical steps       │
│ [CTA]                │
├──────────────────────┤
│ Trust                │
│ Founder block        │
│ Values/trust list    │
│ [CTA]                │
├──────────────────────┤
│ FAQ accordion        │
│ [CTA]                │
├──────────────────────┤
│ Final CTA            │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 2: Services

Purpose:

- Help users understand service areas and route each service path back to the Workflow Assessment.

## Services Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Page Hero                                                    │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ H1 + subheading           │ │ Service scope summary       │ │
│ │ [Primary CTA]             │ │ Trust cue                   │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Assessment Gateway                                           │
│ Heading + intro                                      [CTA]   │
├──────────────────────────────────────────────────────────────┤
│ Service Categories                                           │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Service    │ │ Service    │ │ Service    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Service    │ │ Service    │ │ Service    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ ┌────────────┐                                              │
│ │ Service    │                                              │
│ └────────────┘                                              │
├──────────────────────────────────────────────────────────────┤
│ How Services Connect                                         │
│ ┌──────┐──┌──────┐──┌──────┐──┌──────┐──┌──────┐           │
│ │Diag. │  │Prior.│  │Impl. │  │Doc.  │  │Improve│          │
│ └──────┘  └──────┘  └──────┘  └──────┘  └──────┘           │
│ [CTA]                                                        │
├──────────────────────────────────────────────────────────────┤
│ Boundaries                                                   │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ What Sharpened does       │ │ What Sharpened does not do  │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ FAQ accordion                                                │
├──────────────────────────────────────────────────────────────┤
│ Final CTA Band                                               │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Services Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Hero: H1 + subheading + CTA                │
│ Service scope summary                      │
├────────────────────────────────────────────┤
│ Assessment Gateway                         │
├────────────────────────────────────────────┤
│ Service Categories                         │
│ ┌──────────────┐ ┌──────────────┐          │
│ │ Service      │ │ Service      │          │
│ └──────────────┘ └──────────────┘          │
│ repeated 2-column cards                    │
├────────────────────────────────────────────┤
│ How Services Connect                       │
│ Wrapped process steps                      │
├────────────────────────────────────────────┤
│ Boundaries                                 │
│ Stacked two blocks                         │
├────────────────────────────────────────────┤
│ FAQ                                        │
├────────────────────────────────────────────┤
│ Final CTA                                  │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Services Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Hero                 │
│ H1                   │
│ Subheading           │
│ [CTA]                │
├──────────────────────┤
│ Assessment Gateway   │
│ Heading + intro      │
│ [CTA]                │
├──────────────────────┤
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
│ Service card         │
├──────────────────────┤
│ Connected Process    │
│ Step 1               │
│ Step 2               │
│ Step 3               │
│ Step 4               │
│ Step 5               │
│ [CTA]                │
├──────────────────────┤
│ Boundaries           │
│ What we do           │
│ What we do not do    │
├──────────────────────┤
│ FAQ accordion        │
├──────────────────────┤
│ Final CTA            │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 3: Workflow Assessment

Purpose:

- Make the assessment concrete and convert qualified users into discovery requests.

## Workflow Assessment Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Assessment Hero                                              │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ H1 + subheading           │ │ Assessment summary panel    │ │
│ │ [Primary CTA] [Secondary] │ │ Deliverable preview         │ │
│ │ Privacy note              │ │                             │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Who It Is For                                                │
│ Heading + intro                                              │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Persona    │ │ Persona    │ │ Persona    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐                │
│ │ Persona    │ │ Persona    │ │ Persona    │                │
│ └────────────┘ └────────────┘ └────────────┘                │
├──────────────────────────────────────────────────────────────┤
│ What Gets Reviewed                                           │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Intro + CTA               │ │ Review checklist            │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Deliverables                                                 │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ │
│ │ Output     │ │ Output     │ │ Output     │ │ Output     │ │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘ │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ │
│ │ Output     │ │ Output     │ │ Output     │ │ Output     │ │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Process Timeline                                             │
│ 1 Discovery → 2 Context → 3 Review → 4 Mapping → 5 Roadmap   │
│ [CTA]                                                        │
├──────────────────────────────────────────────────────────────┤
│ After Assessment                                             │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Next-step options         │ │ No forced implementation     │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ FAQ accordion                                                │
├──────────────────────────────────────────────────────────────┤
│ Conversion Section                                           │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Form intro + privacy note │ │ Form fields                 │ │
│ │ What happens next         │ │ [Submit CTA]                │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Workflow Assessment Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Hero: H1 + subheading + CTA                │
│ Assessment summary panel                   │
├────────────────────────────────────────────┤
│ Who It Is For                              │
│ 2-column persona cards                     │
├────────────────────────────────────────────┤
│ What Gets Reviewed                         │
│ Intro                                      │
│ Checklist                                  │
├────────────────────────────────────────────┤
│ Deliverables                               │
│ 2-column output cards                      │
├────────────────────────────────────────────┤
│ Process Timeline                           │
│ Wrapped / vertical steps                   │
├────────────────────────────────────────────┤
│ After Assessment                           │
│ Stacked next-step blocks                   │
├────────────────────────────────────────────┤
│ FAQ                                        │
├────────────────────────────────────────────┤
│ Form intro                                 │
│ Form fields                                │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Workflow Assessment Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Hero                 │
│ H1                   │
│ Subheading           │
│ [Primary CTA]        │
│ [Secondary CTA]      │
│ Privacy note         │
├──────────────────────┤
│ Assessment summary   │
├──────────────────────┤
│ Who It Is For        │
│ Persona card         │
│ Persona card         │
│ Persona card         │
│ Persona card         │
│ Persona card         │
│ Persona card         │
├──────────────────────┤
│ What Gets Reviewed   │
│ Checklist items      │
│ [CTA]                │
├──────────────────────┤
│ Deliverables         │
│ Output card          │
│ Output card          │
│ Output card          │
│ Output card          │
│ Output card          │
│ Output card          │
│ Output card          │
│ Output card          │
├──────────────────────┤
│ Process              │
│ Step 1               │
│ Step 2               │
│ Step 3               │
│ Step 4               │
│ Step 5               │
├──────────────────────┤
│ After Assessment     │
│ Next-step list       │
│ [CTA]                │
├──────────────────────┤
│ FAQ accordion        │
├──────────────────────┤
│ Form                 │
│ Privacy note         │
│ Fields               │
│ [Submit]             │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 4: About

Purpose:

- Build trust through mission, founder-market fit, values, and working principles.

## About Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Hero                                                         │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ H1 + subheading           │ │ Founder / mission visual    │ │
│ │ [CTA]                     │ │ Trust cue                   │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Why Sharpened Exists                                         │
│ Centered or readable-width story block                       │
│ [Secondary CTA]                                              │
├──────────────────────────────────────────────────────────────┤
│ Founder-Market Fit                                           │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ SSDI experience content   │ │ Experience / workflow list  │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Mission + Vision                                             │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Mission                   │ │ Vision                      │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ SHARP Values                                                 │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────┐ │
│ │ Value    │ │ Value    │ │ Value    │ │ Value    │ │Value│ │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └─────┘ │
├──────────────────────────────────────────────────────────────┤
│ Working Principles                                           │
│ 2-column principle list                                      │
│ [CTA]                                                        │
├──────────────────────────────────────────────────────────────┤
│ Final CTA Band                                               │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## About Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Hero: H1 + subheading + CTA                │
│ Founder / mission visual                   │
├────────────────────────────────────────────┤
│ Why Sharpened Exists                       │
├────────────────────────────────────────────┤
│ Founder-Market Fit                         │
│ Content block                              │
│ Workflow list                              │
├────────────────────────────────────────────┤
│ Mission + Vision                           │
│ 2-column or stacked cards                  │
├────────────────────────────────────────────┤
│ SHARP Values                               │
│ 2-column cards                             │
├────────────────────────────────────────────┤
│ Working Principles                         │
│ 2-column list                              │
├────────────────────────────────────────────┤
│ Final CTA                                  │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## About Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Hero                 │
│ H1                   │
│ Subheading           │
│ [CTA]                │
├──────────────────────┤
│ Why Sharpened Exists │
├──────────────────────┤
│ Founder Fit          │
│ Content              │
│ Trust list           │
├──────────────────────┤
│ Mission              │
├──────────────────────┤
│ Vision               │
├──────────────────────┤
│ SHARP Values         │
│ Value card           │
│ Value card           │
│ Value card           │
│ Value card           │
│ Value card           │
├──────────────────────┤
│ Working Principles   │
│ Principle list       │
│ [CTA]                │
├──────────────────────┤
│ Final CTA            │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 5: Contact

Purpose:

- Capture qualified inquiries while reinforcing privacy and next-step expectations.

## Contact Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Contact Hero                                                 │
│ H1 + subheading + CTA / privacy note                         │
├──────────────────────────────────────────────────────────────┤
│ Contact Main                                                 │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ Fit Reminder              │ │ Contact Form                │ │
│ │ Good-fit reasons          │ │ Name                        │ │
│ │ Privacy note              │ │ Email                       │ │
│ │ Assessment link           │ │ Firm                        │ │
│ │                           │ │ Role                        │ │
│ │                           │ │ Challenge                   │ │
│ │                           │ │ Tools                       │ │
│ │                           │ │ Message                     │ │
│ │                           │ │ [Submit]                    │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ What Happens Next                                            │
│ 1 Review → 2 Reply → 3 Discovery → 4 Assessment              │
├──────────────────────────────────────────────────────────────┤
│ Alternate Contact                                            │
│ Email / response expectation                                 │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Contact Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Hero                                       │
├────────────────────────────────────────────┤
│ Fit Reminder                               │
├────────────────────────────────────────────┤
│ Contact Form                               │
│ Fields                                     │
│ [Submit]                                   │
├────────────────────────────────────────────┤
│ What Happens Next                          │
│ 2-column or wrapped steps                  │
├────────────────────────────────────────────┤
│ Alternate Contact                          │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Contact Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Hero                 │
│ H1                   │
│ Subheading           │
│ Privacy note         │
├──────────────────────┤
│ Fit Reminder         │
│ Good-fit list        │
│ [Assessment CTA]     │
├──────────────────────┤
│ Form                 │
│ Name                 │
│ Email                │
│ Firm                 │
│ Role                 │
│ Challenge            │
│ Tools                │
│ Message              │
│ Privacy note         │
│ [Submit]             │
├──────────────────────┤
│ What Happens Next    │
│ Step 1               │
│ Step 2               │
│ Step 3               │
│ Step 4               │
├──────────────────────┤
│ Alternate Contact    │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 6: Privacy Policy

Purpose:

- Provide readable privacy support and reinforce that public forms should not collect sensitive claimant/client details.

## Privacy Policy Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Privacy Hero                                                 │
│ H1 + short explanation                                       │
├──────────────────────────────────────────────────────────────┤
│ Long-form layout                                             │
│ ┌──────────────────────┐ ┌─────────────────────────────────┐ │
│ │ Section nav           │ │ Overview                        │ │
│ │ - Overview            │ │ Information collected           │ │
│ │ - Collected           │ │ Information not requested       │ │
│ │ - Not requested       │ │ How information is used         │ │
│ │ - Use                 │ │ Third-party tools               │ │
│ │ - Tools               │ │ Contact                         │ │
│ │ - Contact             │ │ [Contact CTA]                   │ │
│ └──────────────────────┘ └─────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Privacy Policy Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Privacy Hero                               │
├────────────────────────────────────────────┤
│ Optional section nav                       │
├────────────────────────────────────────────┤
│ Overview                                   │
│ Information collected                      │
│ Information not requested                  │
│ How information is used                    │
│ Third-party tools                          │
│ Contact                                    │
│ [CTA]                                      │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Privacy Policy Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Privacy Hero         │
│ H1                   │
│ Explanation          │
├──────────────────────┤
│ Overview             │
├──────────────────────┤
│ Info collected       │
├──────────────────────┤
│ Info not requested   │
├──────────────────────┤
│ How info is used     │
├──────────────────────┤
│ Third-party tools    │
├──────────────────────┤
│ Contact              │
│ [CTA]                │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Page 7: Not Found

Purpose:

- Recover users and route them back to the main conversion path.

## Not Found Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├──────────────────────────────────────────────────────────────┤
│ Not Found                                                    │
│ ┌──────────────────────────┐ ┌─────────────────────────────┐ │
│ │ H1 + explanation          │ │ Recovery links              │ │
│ │ [Go Home] [Assessment]    │ │ Home                        │ │
│ │                           │ │ Services                    │ │
│ │                           │ │ Workflow Assessment         │ │
│ │                           │ │ Contact                     │ │
│ └──────────────────────────┘ └─────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ Footer                                                       │
└──────────────────────────────────────────────────────────────┘
```

## Not Found Tablet Wireframe

```text
┌────────────────────────────────────────────┐
│ Header                                     │
├────────────────────────────────────────────┤
│ Not Found                                  │
│ H1 + explanation                           │
│ [Go Home] [Assessment]                     │
├────────────────────────────────────────────┤
│ Recovery links                             │
├────────────────────────────────────────────┤
│ Footer                                     │
└────────────────────────────────────────────┘
```

## Not Found Mobile Wireframe

```text
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Page not found       │
│ Explanation          │
│ [Go Home]            │
│ [Assessment]         │
├──────────────────────┤
│ Recovery links       │
│ Home                 │
│ Services             │
│ Assessment           │
│ Contact              │
├──────────────────────┤
│ Footer               │
└──────────────────────┘
```

## Responsive Layout Rules

## Desktop

- Use two-column layouts only when the secondary column supports proof, process, or forms.
- Use three-column cards for comparable repeated content.
- Keep forms paired with fit/context content where useful.
- Preserve visible primary CTA in header and key conversion sections.

## Tablet

- Prefer two-column grids for cards.
- Stack hero content before supporting visuals.
- Collapse complex horizontal timelines into wrapped or vertical steps.
- Keep forms single-column.

## Mobile

- Use single-column flow.
- Place primary CTA immediately after hero copy.
- Stack cards vertically.
- Use vertical timelines.
- Keep forms short and readable.
- Keep FAQ accordions single-column.
- Repeat key CTAs after major decision points.

## Conversion Layout Notes

The strongest conversion paths are:

```text
Home Hero -> Workflow Assessment
Home Services Preview -> Services -> Workflow Assessment
Home Trust -> Workflow Assessment
Workflow Assessment Hero -> Form
Workflow Assessment Deliverables -> Form
Contact Fit Reminder -> Form
```

Why:

- UX improves because users always have a logical next step.
- Conversion improves because CTAs appear after clarity and trust moments.
- Maintainability improves because pages use repeatable section patterns.
- Scalability improves because future pages can follow the same conversion structure.

## Final Wireframe Summary

The low-fidelity layouts support a focused, assessment-led website. Desktop layouts use two-column structure only where it adds clarity. Tablet layouts reduce complexity into stacked or two-column groups. Mobile layouts prioritize single-column scanning, early CTA access, readable forms, and repeated conversion prompts.

No visual design, colors, typography styling, components, Tailwind, React, or code were created in this phase.
