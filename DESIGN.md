# Cafuné – o app de autocuidado com o Dudu

## Mission
Create implementation-ready, token-driven UI guidance for Cafuné – o app de autocuidado com o Dudu that is optimized for consistency, accessibility, and fast delivery across the marketing site and web app.

## Brand
- Product/brand: Cafuné – o app de autocuidado com o Dudu
- URL: https://meucafune.app/
- Audience: Brazilian adults looking for gentle, playful self-care habits (Portuguese-first, also English)
- Product surface: marketing landing page + installable web app (PWA)

## Style Foundations
- Visual style: warm, soft and playful — rounded shapes, cream/yellow surfaces, chocolate-brown ink, coral accents, mascot-led (Dudu the sloth)
- Main font style: `font.family.primary=Nunito`, `font.family.stack=Nunito, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=23.2px`
- Typography scale: `font.size.xs=13px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=17px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=22px`
- Color palette: `color.surface.base=#fbf6ee` (--bg), `color.surface.raised=#ffffff`, `color.surface.accent=#f6e38f` (--yel), `color.surface.accent-soft=#fbf0b5` (--yel2), `color.text.primary=#6b3420` (--ink), `color.text.secondary=#8a5a3c` (--ink2), `color.accent.primary=#e8665a` (--coral), `color.border.default=#efe2d2` (--line)
- Spacing scale: `space.1=6px`, `space.2=8px`, `space.3=14px`, `space.4=15px`, `space.5=16px`, `space.6=18px`, `space.7=22px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=18px`, `radius.sm=26px`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Affectionate, light-hearted and encouraging (Brazilian Portuguese, informal "você"); celebrate small steps, never guilt the user.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (9), cards (6), buttons (2), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
