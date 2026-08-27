# Accolyx Design System

Status: approved implementation contract for the public website  
Version: 1.0  
Platform: responsive web, Next.js App Router  
Primary page: homepage

## 1. Purpose

Accolyx is presented as one specialist professional-services firm with two equal practices:

1. **IT Audit & Consultancy**
2. **Audit, Accounting & Outsourcing**

The website must help finance leaders, business owners, boards, audit teams, and technology leaders understand those practices quickly and begin a well-scoped conversation. It should communicate judgement, control, and practical usefulness rather than scale for its own sake.

The primary conversion is **Discuss your priorities**. Secondary navigation helps visitors compare the two practices and understand how an engagement works.

## 2. Source-of-truth hierarchy

When design guidance conflicts, use this order:

1. Client requirements and direct feedback
2. This `DESIGN.md`
3. Existing Accolyx brand assets and factual company content
4. Accessibility and interface-quality requirements
5. External design references and skills

External resources are inputs, not competing authorities. Generated screens, randomized patterns, and catalog components must be adapted to this contract.

## 3. Product classification

- Category: B2B professional services
- Industry: accounting, audit, financial operations, technology assurance
- Audience: senior professional and operational decision-makers
- Primary tasks: understand scope, identify the relevant practice, assess fit, start an enquiry
- Information density: moderate; enough detail for credibility without reproducing a proposal
- Risk level: high trust; claims must be precise and verifiable
- Accessibility target: WCAG 2.2 AA
- Visual character: editorial, exact, calm, current, and assured

## 4. Brand principles

### 4.1 Clarity before decoration

Hierarchy, copy, and alignment carry the design. Decorative treatments cannot interrupt comprehension.

### 4.2 Two practices, one firm

The two practices receive equal visual weight. Blue identifies IT assurance, deep green identifies accounting, and shared neutral typography and structure keep them part of one brand.

### 4.3 Evidence over claims

Do not invent clients, metrics, certifications, office locations, partner biographies, testimonials, awards, guarantees, or regulatory approvals. Honest engagement scenarios may be used in place of social proof until verified proof is supplied.

### 4.4 Wide, not wasteful

Large monitors should feel intentionally composed. Structural content may span the wide shell, while paragraph text retains a readable measure.

### 4.5 Professional restraint

Use square or subtly rounded geometry, crisp rules, deliberate motion, and strong type. Avoid generic fintech styling, excessive cards, glass effects, and unexplained accents.

## 5. Information architecture

The homepage follows AIDA:

1. **Navigation** — logo, Practices, How we work, When to call, primary enquiry action
2. **Attention** — editorial split hero with clear value proposition and one dominant CTA
3. **Interest** — static capability strip, two-practice framework, interactive service explorer
4. **Desire** — outcome/proof grid, honest engagement scenarios, engagement method
5. **Action** — FAQ, scoped enquiry form, direct email, compact footer

Recommended page sequence:

1. Full-width editorial navigation
2. Hero
3. Practice index
4. Static capability strip
5. Two-practice introduction
6. Equal practice fields
7. Service explorer
8. Outcomes and benefits
9. Engagement scenarios
10. Three-step approach
11. FAQ
12. Contact
13. Footer

## 6. Content requirements

### 6.1 Practice one: IT Audit & Consultancy

Core offer: independent assessment and practical improvement of technology risks and controls.

Service areas:

- IT general controls
- Cyber risk and access
- Systems and process assurance
- Controls consultancy

Outcome language may reference risk-ranked findings, ownership, remediation planning, readiness, evidence, and clearer control decisions. It must not imply a certification or formal opinion unless that service is confirmed.

### 6.2 Practice two: Audit, Accounting & Outsourcing

Core offer: dependable finance capacity, stronger records and controls, and clearer reporting.

Service areas:

- Internal audit and controls
- Accounting and bookkeeping
- Reporting and IFRS support
- Finance-function outsourcing

Outcome language may reference reliable records, reconciliations, reporting, month-end support, finance controls, and flexible operating capacity. Avoid legal or regulatory promises.

### 6.3 Voice

- Direct, calm, specific, and commercially literate
- British spelling where already established, such as “prioritised”
- Short headings that state an outcome or tension
- Explanations grounded in decisions, evidence, ownership, and next steps
- No vague innovation language such as “revolutionise,” “game-changing,” or “world-class”
- No fake urgency or aggressive sales language

### 6.4 Primary action

Use **Discuss your priorities** consistently for the main CTA. The form action uses **Send enquiry** because it submits directly through the website.

## 7. Layout system

### 7.1 Shell

- Maximum structural shell: `1840px`
- Wide-screen shell: `min(calc(100% - 96px), 1840px)`
- Standard desktop shell: `min(calc(100% - 64px), 1840px)`
- Mobile shell: `calc(100% - 36px)`
- The shell may contain wide headings, media, grids, rules, and service panels.
- Reading copy is separately constrained to `65–72ch`.

At 1920px the shell leaves approximately 40–48px per side. At 2560px it reaches the 1840px cap, but headings and grid structures must still occupy the shell so the page does not resemble a narrow tablet.

### 7.2 Grid

Use a 12-column fluid grid.

- Hero: 7 columns text + 5 columns image; open to 8 + 4 from 1600px so the display remains a deliberate two-line statement
- Introduction: 8 columns heading + 4 columns reading copy
- Practice framework: 6 columns + 6 columns
- Narrative sections: 5 + 7 or 4 + 8
- Contact: 6 + 6
- Gap range: `20–48px` for separated layouts
- Gapless layouts use `0` and rely on inner padding and borders

Every bento-style grid uses `grid-auto-flow: dense` and must be mathematically filled.

Proof-grid verification:

- Main image card: 7 columns × 2 rows = 14 cells
- Action card: 5 columns × 1 row = 5 cells
- Reporting card: 5 columns × 1 row = 5 cells
- Total: 24 occupied cells in a 12 × 2 = 24-cell grid

### 7.3 Spacing

Base spacing scale:

- `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`, `160px`, `192px`

Major-section spacing:

- Wide desktop: `144–192px`
- Desktop: `128–160px`
- Tablet: `96–128px`
- Mobile: `76–96px`

Avoid equal spacing everywhere. Use tighter spacing within one argument and larger spacing between chapters.

## 8. Typography

Primary family: **Geist**  
Fallback: system sans-serif stack

Geist is selected for its wide, contemporary, technical-professional character. Do not combine it with a decorative serif in version 1.

### 8.1 Scale

- Hero display: `clamp(4.5rem, 5.2vw, 7rem)`, weight 650–700, line-height 0.88–0.94
- Major section heading: `clamp(3rem, 4.8vw, 6.25rem)`, weight 620–680
- Practice heading: `clamp(2.75rem, 3.8vw, 5rem)`, weight 620–680
- Card heading: `clamp(1.5rem, 2vw, 2.5rem)`, weight 600–650
- Large body: `clamp(1.08rem, 1.2vw, 1.4rem)`, line-height 1.55–1.65
- Body: `16–18px`, line-height 1.6–1.72
- UI/navigation: `14–16px`, weight 600
- Supporting label: `12–13px`, weight 650, letter-spacing `0.06–0.1em`

### 8.2 Heading rules

- Hero H1 must stay within 2–3 lines at target widths.
- Use two intentional line groups when needed rather than squeezing the container.
- Major headings use balanced wrapping but are checked manually at 1440px, 1920px, and 2560px.
- Do not embed images, badges, icons, or pills inside headings.
- Avoid all-uppercase display headings.

### 8.3 Reading rules

- Paragraph measure: 65–72 characters
- Avoid body text smaller than 16px
- Use Ink 700 or darker for body text on light surfaces
- Use at least 1.5 line-height for paragraph copy

## 9. Token architecture

Tokens follow three tiers: primitive values, semantic roles, and component aliases.

### 9.1 Primitive color tokens

| Token | Value | Use |
|---|---:|---|
| `--paper-0` | `#FFFFFF` | raised and input surfaces |
| `--paper-50` | `#F5F4EF` | primary canvas |
| `--paper-100` | `#ECEBE5` | quiet sections and image fallback |
| `--ink-900` | `#111827` | headings and dark fields |
| `--ink-700` | `#344054` | body text |
| `--ink-500` | `#667085` | supporting text where AA permits |
| `--blue-700` | `#173F8A` | IT practice and global action |
| `--blue-600` | `#2457B2` | hover and focus emphasis |
| `--blue-100` | `#DDE7F7` | IT-practice tint |
| `--green-800` | `#173B35` | accounting practice field |
| `--green-700` | `#215249` | accounting emphasis |
| `--green-100` | `#DDEAE5` | accounting-practice tint |
| `--red-700` | `#B42318` | errors only |

### 9.2 Semantic aliases

- `--color-canvas` → `--paper-50`
- `--color-surface` → `--paper-0`
- `--color-surface-muted` → `--paper-100`
- `--color-text` → `--ink-900`
- `--color-text-secondary` → `--ink-700`
- `--color-text-quiet` → `--ink-500`
- `--color-action` → `--blue-700`
- `--color-action-hover` → `--blue-600`
- `--color-practice-it` → `--blue-700`
- `--color-practice-finance` → `--green-800`
- `--color-focus` → `--blue-600`
- `--color-error` → `--red-700`
- `--color-border` → Ink 900 at 16% opacity
- `--color-border-strong` → Ink 900 at 34% opacity

### 9.3 Component aliases

- Primary button background → `--color-action`
- Primary button text → white
- IT practice field → `--color-practice-it`
- Finance practice field → `--color-practice-finance`
- Form field surface → `--color-surface`
- Focus outline → `--color-focus`

### 9.4 Color discipline

The palette is intentional:

- Warm paper creates a calm editorial base.
- Ink carries most visual weight.
- Blue owns global action and IT assurance.
- Green appears only in accounting contexts.
- Blue and green do not compete inside one component.
- No brass, purple, pink, cyan, or decorative gradient is part of version 1.
- Color never communicates practice identity without the practice name in text.

## 10. Shape and depth

- Standard radius: `2–4px`
- Large imagery: square corners
- Navigation: up to `4px` radius
- Icon controls: square or `2px` radius
- Do not use fully rounded pills except where a native control genuinely requires one
- Use border, tonal contrast, and overlap before shadow
- Navigation may use one soft ambient shadow
- Form may use one controlled shadow on the blue contact field
- Avoid layered floating-card stacks that imply a SaaS dashboard

## 11. Imagery

### 11.1 Subject matter

Use imagery connected to:

- review-ready financial records
- controlled technology environments
- reporting and evidence
- professional collaboration
- systems, processes, and workspaces

### 11.2 Treatment

- Rectangular, grid-aligned crops
- Clear focal point and reserved dimensions
- Neutral or slightly cool treatment
- Optional grayscale or restrained contrast adjustment
- One strong image per chapter is better than several thumbnails
- Image motion occurs inside an overflow-hidden frame

### 11.3 Prohibitions

- No image inside a heading or sentence
- No anonymous portrait presented as a client or testimonial
- No generic handshake image
- No image that implies a named customer, location, or certification
- No floating cutouts or decorative image pills

### 11.4 Current website asset set

The production homepage uses three purpose-made editorial photographs:

1. **Integrated assurance** — advisers jointly reviewing systems controls and financial reconciliation evidence in the hero
2. **Audit evidence** — an organised control-testing file and risk-priority material in the outcomes chapter
3. **Engagement review** — advisers translating a finding into an owned next action in the approach chapter

The photographs are AI-generated visual content created for Accolyx rather than representations of a real client engagement. They must not be captioned or described as named clients, employees, offices, or documentary evidence of past work. Future imagery should preserve the same natural daylight, warm paper, charcoal, restrained blue/deep-green accents, crop-safe composition, and absence of readable confidential information.

## 12. Components

### 12.1 Navigation

- Full-width sticky band with its contents aligned to the structural shell
- No floating container, outer border box, or rounded frame
- Three direct section links plus one primary CTA
- Minimum interaction height: 44px
- Visible focus ring
- Navigation links may collapse on tablet; the main CTA and brand remain visible
- Header opacity may increase on scroll, but content remains readable without motion

### 12.2 Editorial hero

- Layout: 7-column text, 5-column image on wide screens
- H1: two intentional line groups and no more than 3 lines
- One primary CTA and one understated text link
- No stats, badges, chips, or decorative stamps
- Image is a single substantial frame, not an inline insert
- Below the hero, a two-column practice index reinforces the offer

### 12.3 Capability strip

- Static typography-only list of the six real service capabilities
- Six equal columns on wide screens, three columns on tablet, and two columns on mobile
- No duplication, animation, or playback control
- Not used as a fake partner-logo strip

### 12.4 Practice framework

- Gapless 6 + 6 grid
- IT field uses blue; finance field uses green
- Equal structural weight, comparable copy length, and the same component anatomy
- Each includes practice name, explanation, four service areas, outcome, and enquiry affordance
- On mobile the fields stack; neither practice is visually demoted

### 12.5 Service explorer

- Desktop: horizontal accordion with four panels for the selected practice
- Mobile: vertical disclosures with all titles readable
- Practice selector uses two equal rectangular controls
- Works by click and keyboard, never hover alone
- Active panel uses the relevant practice tint, not a new color
- Panel titles remain visible in all states
- Changing practice resets to the first service

### 12.6 Proof grid

- Exactly three cards
- One 7 × 2 image-led card and two 5 × 1 text-led cards
- No invented statistics
- Benefits focus on understanding exposure, moving to action, and informing leadership

### 12.7 Scenario carousel

- Contains honest “when to call” situations rather than testimonials
- Previous and next buttons include accessible labels
- Current item is announced politely
- Controls are square and at least 44px
- No autoplay

### 12.8 Approach

- Three steps: frame the question, follow the evidence, make action clear
- Desktop uses a pinned left visual or statement and scrolling right-side steps
- Pinning is removed on tablet/mobile and reduced-motion settings

### 12.9 FAQ

- Native disclosure semantics are preferred
- Whole summary row is clickable
- Plus icon rotates to indicate open state
- Answer sits directly under its question
- Focus remains visible

### 12.10 Contact form

- Visible labels and explicit required markers
- Service options match the two practices and their service areas
- Inputs have clear boundaries and 44px minimum height
- Email input disables spellcheck
- Status feedback uses `aria-live`
- The action reads **Send enquiry**, changes to **Sending enquiry…**, and is disabled while the request is in flight
- Submission is handled server-side by a Vercel Function and Resend; the API key is never exposed to the browser
- Server validation mirrors the visible required fields and rejects unknown service values
- A visually hidden honeypot field provides lightweight bot filtering
- Errors appear inline without clearing the visitor's form entries
- Successful submission replaces the form with a calm confirmation headed **Form submitted**, followed by the submitted reply address and a **Send another enquiry** action

## 13. Motion

Motion supports hierarchy and spatial continuity.

### 13.1 Required paradigms

1. **Scroll pinning** — pin a concise left-side statement or media frame while related content advances on the right.
2. **Image scale and fade** — scale images from approximately `0.88–0.92` to `1`, then soften them as they leave the viewport.

### 13.2 Supporting motion

- Section reveal: opacity and `translateY(24–36px)`
- Service-panel expansion: `400–550ms`, controlled cubic-bezier easing
- Button and icon hover: `180–240ms`

### 13.3 Motion rules

- Use real GSAP with ScrollTrigger for scroll-linked sequences
- Animate transforms and opacity, not layout-heavy width/height during scroll
- Do not hide essential content in the static state
- All GSAP contexts must revert on cleanup
- Respect `prefers-reduced-motion: reduce`
- Reduced motion disables pinning, scrubbing, and decorative reveals

## 14. Interaction states

Every interactive component defines:

- Default
- Hover where available
- Focus-visible
- Active/selected
- Disabled where applicable
- Reduced-motion behavior where applicable

Focus indicators use a 3px blue outline with at least 3px offset. Hover cannot be the only way to reveal content.

## 15. Responsive specification

### 15.1 Wide desktop: 1600–2560px

- Shell grows to 1840px
- Hero opens to an 8/4 split to prevent the editorial display from becoming artificially narrow
- Structural typography scales, body text does not exceed readable measure
- Practice fields sit side by side
- Service explorer uses horizontal expansion
- Proof grid retains 7/5 layout

### 15.2 Desktop: 1180–1599px

- 32px outer gutters
- Hero remains split while type scale reduces
- Practice fields remain side by side where content fits
- Navigation links may remain visible until they collide

### 15.3 Tablet: 768–1179px

- 24px gutters
- Hero becomes a 7/5 or balanced split until 900px, then stacks
- Navigation links collapse
- Practice fields may stack
- Pinned motion is disabled
- Service explorer becomes a readable vertical pattern when horizontal labels become cramped

### 15.4 Mobile: below 768px

- 18px gutters
- Hero stacks with text before image
- Hero H1 may use up to 3 lines
- Buttons may become full width
- Practice index and practice fields stack
- Service details are vertical disclosures
- Proof and contact grids become one column
- Minimum touch target: 44px

Required viewport checks: `390`, `768`, `1440`, `1920`, and `2560` pixels wide.

## 16. Accessibility

- WCAG 2.2 AA contrast for text, controls, and focus indicators
- One H1, followed by sequential heading levels
- Semantic `header`, `nav`, `main`, `section`, `article`, `details`, and `footer` elements
- Working skip link to the primary content heading
- Useful alternative text for informative images and empty alt text for decorative images
- Practice names accompany color differentiation
- All icon-only controls have accessible names
- Keyboard access for navigation, service explorer, carousel, FAQ, and form
- No horizontal page overflow
- Zoom remains enabled
- Form errors and status appear near the interaction
- Motion is not required to understand content

## 17. Performance and implementation

- Use Next.js `Image` with `fill` inside a positioned, dimensioned wrapper
- Reserve image aspect ratio to prevent layout shift
- Keep the homepage statically renderable
- Client components are limited to interactions and motion
- Avoid unnecessary component libraries
- Use Lucide SVG icons already installed in the project
- Avoid external imagery when suitable local assets exist
- Keep structured data aligned with visible services
- No console errors or hydration warnings

## 18. Prohibited patterns

- Inline images inside text
- Narrow 1200–1360px page cap on wide monitors
- Six-line display headings
- Purple or pink AI gradients
- Brass accent in the website palette
- Glassmorphism and excessive blur
- Rounded-card grids and pill overload
- Floating badges or decorative stamps
- Fake statistics, client logos, testimonials, or certifications
- Meta labels such as “Section 01,” “Question 05,” or “About us”
- Hover-only service access
- Autoplay carousel
- Full-width paragraph text on wide screens
- Invisible or low-contrast button text

## 19. Pre-delivery checklist

- [x] `DESIGN.md` tokens match CSS tokens
- [x] Two practices have equal weight and accurate content
- [x] H1 stays within 2–3 lines at 390, 1440, 1920, and 2560px
- [x] 1920px layout uses roughly 48px side gutters before the 1840px cap
- [x] No inline heading image remains
- [x] Blue and green are used only in their documented roles
- [x] Bento grids have no empty cells
- [x] All controls meet 44px minimum size
- [x] Focus is visible throughout
- [x] Reduced motion disables pinning and decorative image motion
- [x] No horizontal overflow at required viewports
- [x] Images load without layout shift or broken sources
- [x] Console contains no errors
- [x] Production build and TypeScript checks pass
- [x] Desktop and mobile critical-path tests pass
