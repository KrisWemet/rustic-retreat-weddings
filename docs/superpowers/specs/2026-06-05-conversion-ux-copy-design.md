# Conversion UX & Copy Improvements
**Date:** 2026-06-05
**Goal:** Increase tour booking conversions by reducing form friction, sharpening copy, and addressing logistics hesitation.

---

## Context

- Primary conversion goal: couples booking an in-person property tour
- Most common first question from interested couples: "Can we see the venue?"
- Main hesitation: logistics (distance, amenities still being built out)
- Tours are weekday-only, by appointment, May–September, up to 90 minutes
- Venue is ~1 hour from Edmonton
- Site has not yet been actively promoted — optimizing before traffic is driven

---

## Change 1 — Contact Form Restructure

**File:** `src/pages/Contact.tsx`

### Layout change — "What to Expect" block moves above the two-column form section

Currently "What to Expect" sits in the right column of the `grid lg:grid-cols-2` layout. Move it into a **new full-width row above the entire two-column grid**. On all breakpoints it renders above the form and contact info columns. The existing card markup and content stay unchanged (except the copy edits below).

### Required fields — reorder the DOM nodes to match this sequence

Physically reorder the JSX fields in the markup so they appear in this order. Do not just reclassify fields — move them:

1. Partner 1 first + last name
2. Partner 2 first + last name
3. Email (required)
4. Phone (change to **optional** — remove `required` attribute; add `<span className="text-xs text-muted-foreground ml-1">(optional)</span>` next to the `<Label>`)
5. Preferred contact method (email / phone / text) — keep as-is
6. Ideal wedding date (required) — move this above the optional divider; currently it sits after `tourDates` in the markup

**Rationale for phone optional:** The form offers an explicit "email" preferred contact option, so requiring a phone number from someone who selects email creates implicit friction. The phone field stays visible for CRM purposes but is not required.

### Optional section
Insert this divider block immediately after the `weddingDate` field and before `tourDates`:

```tsx
<div className="relative my-2">
  <div className="absolute inset-0 flex items-center">
    <span className="w-full border-t border-border" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-card px-3 text-sm font-medium text-muted-foreground">
      Help us make your tour count (optional but helpful)
    </span>
  </div>
</div>
```

Fields beneath it (all `required` attributes removed):
- Preferred tour dates — label: `"Preferred tour dates (weekday appointments, May–September)"`
- Guest count
- Your vision — label: `"Tell us about your vision"`

**Note on Formspree:** Formspree requires no schema or configuration changes. These fields were previously required; making them optional means Formspree will simply receive submissions with those fields blank. No email template changes needed — blank values render as empty in the Formspree notification email, which is expected.

### Form copy changes

| Element | Current | New |
|---|---|---|
| Response badge text | "We do our absolute best to respond to all inquries within 24 hours" | "We respond within 24 hours." |
| Form `<h2>` heading | "Request Your Visit" | "Tell Us About Your Wedding" |
| Submit button | "Request Property Visit" | "Let's Talk" |
| Vision field label | Long multi-clause sentence | "Tell us about your vision" |
| Tour dates field label | "When would you like to schedule your visit? (only available between May through September)" | "Preferred tour dates (weekday appointments, May–September)" |

### "What to Expect" card copy changes (two edits)

**Opening paragraph — full replacement:**
- Remove the entire current paragraph: `"Expect a laid-back country vibe. We aren't here to pressure you to book-if you want to take time to walk the grounds and talk things over just the two of you without us hovering, you can absolutely do that."`
- Replace with: `"Come as you are. Walk the property, ask every question, take all the time you need."`

**List item:**
- `"Full property tour (1-1.5 hours)"` → `"Up to 90 minutes at your pace"`

### Drive time callout — update existing MapPin row

In the "Contact Information" card, the existing MapPin row currently reads:
```
99 km NW of Edmonton
Near Lac La Nonne, Alberta
```
Update the `<p>` lines to:
```
About 1 hour from Edmonton
Near Lac La Nonne, Alberta
Weekday tours by appointment, May–September
```
Do not add a new element — update the existing location row in place.

---

## Change 2 — Homepage Copy

### `src/data/site-content.json`

**Hero headline highlight** (`homepage.hero.headline.part3`):
- Current: `"Your Legendary Weekend."`
- New: `"Your Weekend, On Your Terms."`

> **Important:** This value is overridden by Sanity CMS at runtime (`Index.tsx` line 177: `cmsHomepage?.heroHeadlineHighlight || content.homepage.hero.headline.part3`). Update `site-content.json` as the fallback. Also check whether the Sanity Studio has a value set for `heroHeadlineHighlight` on the homepage document — if so, update it there as well, otherwise the JSON change has no visible effect in production.

**Intro card #5** (0-indexed: index 4, `homepage.intro.text[4]`):
- Current: `"The freedom to be themselves, whether that's creating a DIY celebration or an extravagant event that reflects their unique story."`
- New: `"The freedom to go big, keep it simple, or something beautifully in between."`

> **Important:** Same Sanity override applies. `Index.tsx` line 183–185 uses `cmsHomepage?.introCards` first. Check Sanity Studio for a live `introCards` array — if present, update there. Otherwise the JSON change is the correct fallback update.

### `src/pages/Index.tsx`

**Remove differentiation section label** (the `<p className="section-label">` that reads `"THIS QUESTION CHANGES EVERYTHING"`):
- Delete that single `<p>` element. The quote section below it stands on its own without the label.

**Owner quote body** (`Index.tsx` line ~675, inside the `<blockquote>`):
- Current text contains: `"...celebrate life and their unique individual love stories across an entire weekend."`
- Change only those words to: `"...celebrate life and love across an entire weekend."`
- The `<span>` element wrapping the final phrase (`"entire weekend."`) with its existing italic/color styling must be **preserved**. Only the text content changes, not the element structure.

---

## Change 3 — Logistics Transparency

**File:** `src/pages/Venue.tsx`

Add a new section immediately before the existing `{/* CTA Section */}` comment block (line ~447). Use the same `section` padding class as surrounding sections. No special background needed — inherits `bg-background`.

### New section markup (structure):
```
<section className="section bg-card">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <p className="section-label">THE VENUE TODAY</p>
      <h2 className="text-3xl md:text-4xl font-serif mb-6">
        The venue is growing — and we like it that way.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        The bones are here: 65 acres, the ceremony clearing, the gazebo,
        the couples cabin, the fire pit, the field. What we're adding over
        the coming seasons are the finishing touches that take it from
        beautiful to extraordinary. Couples booking now are part of that story.
      </p>
    </div>
  </div>
</section>
```

---

## Success Criteria

- [ ] Contact form required fields reduced from 8 to 6 (phone optional, tour dates/guest count/vision moved to optional section)
- [ ] Optional section divider and label render correctly below required fields
- [ ] "What to Expect" card renders in a full-width row above the two-column form layout on all breakpoints
- [ ] MapPin location row updated in-place with drive time and weekday tour info
- [ ] Response badge, form heading, submit button, vision label, and tour dates label all updated
- [ ] "What to Expect" opening paragraph fully replaced; duration list item updated
- [ ] Homepage: `heroHeadlineHighlight` updated in `site-content.json` AND verified/updated in Sanity if applicable
- [ ] Homepage: intro card index 4 updated in `site-content.json` AND verified/updated in Sanity if applicable
- [ ] Homepage: differentiation section label `<p>` element removed
- [ ] Homepage: owner quote text updated; existing `<span>` structure preserved
- [ ] Venue page: new "growing venue" section added before CTA block
- [ ] Form submission still works end-to-end via Formspree with optional fields blank
