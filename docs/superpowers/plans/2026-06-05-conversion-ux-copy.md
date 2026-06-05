# Conversion UX & Copy Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase tour booking conversions by restructuring the contact form, sharpening copy across the homepage, and adding logistics transparency to the Venue page.

**Architecture:** Three isolated changes across four files — no new components, no new routes, no API changes. The contact form restructure is the most involved: field reordering, required/optional reclassification, divider markup, layout reorder, and copy fixes. Homepage and Venue changes are pure copy/markup edits.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Formspree (no changes needed)

**Spec:** `docs/superpowers/specs/2026-06-05-conversion-ux-copy-design.md`

---

## Files Modified

| File | What changes |
|---|---|
| `src/pages/Contact.tsx` | Form field reorder, required→optional reclassification, optional section divider, layout reorder (What to Expect above form), copy fixes, MapPin row update |
| `src/data/site-content.json` | Hero headline part 3, intro card index 4 |
| `src/pages/Index.tsx` | Remove section label, fix owner quote text |
| `src/pages/Venue.tsx` | Add "growing venue" section before CTA |

---

## Task 1: Contact form — reorder fields and reclassify phone as optional

**Files:**
- Modify: `src/pages/Contact.tsx`

This task covers the DOM field reordering and the phone `required` → optional change only. No divider yet.

Current field order in JSX (lines 124–261):
1. Partner 1 names (grid row) — 2 `required` fields (first + last)
2. Partner 2 names (grid row) — 2 `required` fields (first + last)
3. Email (required)
4. Phone (required)
5. Preferred contact method (no `required` — has a default value)
6. `tourDates` (required) ← moves to optional section in Task 2
7. `weddingDate` (required) ← stays required, moves to position 6
8. `guestCount` (required) ← moves to optional section in Task 2
9. `message` (required) ← moves to optional section in Task 2

> **Note:** The spec's success criteria says "reduced from 8 to 6 required fields" but the actual count is 10 → 6. The 4 partner name fields are each individually `required`, bringing the real starting total to 10. The spec miscounted by treating each name grid row as one field. The target of 6 required fields after this plan is correct.

After this task, order should be:
1. Partner 1 names
2. Partner 2 names
3. Email
4. Phone (optional)
5. Preferred contact method
6. `weddingDate` (required)
— optional section fields follow in Task 2 —

- [ ] **Step 1: Move `weddingDate` field block above `tourDates` in JSX**

In `src/pages/Contact.tsx`, cut the entire `weddingDate` `<div>` block (currently after `guestCount`) and paste it immediately after the `preferredContact` RadioGroup block, before `tourDates`. The `weddingDate` block is:
```tsx
<div>
  <Label htmlFor="weddingDate">What is your ideal wedding date?</Label>
  <Input
    id="weddingDate"
    name="weddingDate"
    type="text"
    required
    className="mt-2"
    placeholder="e.g., Summer 2027, August 14th, 2027, etc."
  />
</div>
```

- [ ] **Step 2: Make phone optional**

Find the phone `<Input>` block (~line 186). Remove the `required` attribute. Add an optional label indicator:
```tsx
<Label htmlFor="phone">
  Phone Number
  <span className="text-xs text-muted-foreground ml-1">(optional)</span>
</Label>
```

- [ ] **Step 3: Verify the form renders and submits without phone**

Run the dev server: `npm run dev`
Navigate to `http://localhost:5173/contact`. Confirm:
- Phone field shows "(optional)" label
- Form submits successfully when phone is left blank
- All other required fields still block submission when empty

- [ ] **Step 4: Commit**
```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): reorder form fields, make phone optional"
```

---

## Task 2: Contact form — add optional section divider

**Files:**
- Modify: `src/pages/Contact.tsx`

Insert the styled divider after `weddingDate` and before `tourDates`. Remove `required` from `tourDates`, `guestCount`, and `message`.

- [ ] **Step 1: Insert divider markup after `weddingDate` block**

After the closing `</div>` of the `weddingDate` field, insert:
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

- [ ] **Step 2: Remove `required` from `tourDates`, `guestCount`, and `message`**

Find each of these three `<Input>` / `<Textarea>` elements and remove their `required` attribute:
- `tourDates` Textarea (~line 220)
- `guestCount` Input (~line 239)
- `message` Textarea (~line 253)

- [ ] **Step 3: Update `tourDates` and `message` labels**

`tourDates` label — replace:
```tsx
<Label htmlFor="tourDates">When would you like to schedule your visit? (only available between May through September)</Label>
```
with:
```tsx
<Label htmlFor="tourDates">Preferred tour dates (weekday appointments, May–September)</Label>
```

`message` label — replace:
```tsx
<Label htmlFor="message">Share with us your vision for your perfect wedding weekend in a couple sentences (or paragraphs), we want to hear about it all</Label>
```
with:
```tsx
<Label htmlFor="message">Tell us about your vision</Label>
```

- [ ] **Step 4: Verify the divider renders and optional fields are skippable**

Check `http://localhost:5173/contact`. Confirm:
- Divider line with "Help us make your tour count (optional but helpful)" label is visible between `weddingDate` and `tourDates`
- Form submits with `tourDates`, `guestCount`, and `message` all blank
- `weddingDate` still blocks submission when empty

- [ ] **Step 5: Commit**
```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): add optional section divider, reclassify 3 fields as optional"
```

---

## Task 3: Contact form — copy fixes and MapPin update

**Files:**
- Modify: `src/pages/Contact.tsx`

All remaining text changes to the contact page.

- [ ] **Step 1: Fix response badge**

Find (~line 116):
```tsx
<span className="font-medium">We do our absolute best to respond to all inquries within 24 hours</span>
```
Replace with:
```tsx
<span className="font-medium">We respond within 24 hours.</span>
```

- [ ] **Step 2: Fix form heading**

Find (~line 122):
```tsx
<h2 className="text-2xl font-bold mb-2">Request Your Visit</h2>
```
Replace with:
```tsx
<h2 className="text-2xl font-bold mb-2">Tell Us About Your Wedding</h2>
```

- [ ] **Step 3: Fix submit button**

Find (~line 264):
```tsx
{isSubmitting ? "Sending..." : "Request Property Visit"}
```
Replace with:
```tsx
{isSubmitting ? "Sending..." : "Let's Talk"}
```

- [ ] **Step 4: Update MapPin location row**

Find in the Contact Information card (~lines 302–305):
```tsx
<p className="text-muted-foreground text-sm">
  99 km NW of Edmonton<br />
  Near Lac La Nonne, Alberta
</p>
```
Replace with:
```tsx
<p className="text-muted-foreground text-sm">
  About 1 hour from Edmonton<br />
  Near Lac La Nonne, Alberta<br />
  Weekday tours by appointment, May–September
</p>
```

- [ ] **Step 5: Update "What to Expect" opening paragraph**

Find (~line 349), the entire paragraph starting with `"Expect a laid-back country vibe..."`:
```tsx
<p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
  Expect a laid-back country vibe. We aren't here to pressure you to book-if you want to take time to walk the grounds and talk things over just the two of you without us hovering, you can absolutely do that.
</p>
```
Replace the text content only (keep className):
```tsx
<p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
  Come as you are. Walk the property, ask every question, take all the time you need.
</p>
```

- [ ] **Step 6: Update "What to Expect" tour duration list item**

Find:
```tsx
<li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Full property tour (1-1.5 hours)</span></li>
```
Replace with:
```tsx
<li className="flex items-start"><span className="mr-2 flex-shrink-0">•</span><span>Up to 90 minutes at your pace</span></li>
```

- [ ] **Step 7: Verify all copy changes on the contact page**

Check `http://localhost:5173/contact`. Confirm all six text changes are visible.

- [ ] **Step 8: Commit**
```bash
git add src/pages/Contact.tsx
git commit -m "fix(contact): update copy — form heading, badge, button, MapPin, What to Expect"
```

---

## Task 4: Contact form — move "What to Expect" above the two-column grid

**Files:**
- Modify: `src/pages/Contact.tsx`

Currently the "What to Expect" card and the portrait image beneath it are the second child of the `grid lg:grid-cols-2` layout (the right column, ~lines 280–371). Move the "What to Expect" card only (not the contact info card, not the images) into a new full-width row above the two-column grid.

- [ ] **Step 1: Identify the exact block to move**

The block to move is the third `<ScrollReveal>` inside the right column (~line 343–371):
```tsx
<ScrollReveal direction="right" delay={200}>
  <div className="flex flex-col gap-6">
    <Card className="border-2 border-primary bg-primary/5 w-full">
      ...What to Expect content...
    </Card>
    <div className="w-full h-64 ...">
      <img src={contactExpectImage} ... />
    </div>
  </div>
</ScrollReveal>
```

Note: this `<ScrollReveal>` contains both the What to Expect card AND the portrait image beneath it. Move the entire block.

- [ ] **Step 2: Cut the block from the right column**

Remove the entire `<ScrollReveal direction="right" delay={200}>` block (~lines 343–371) from the right column.

- [ ] **Step 3: Paste it as a full-width row above the grid**

Insert it as a new element immediately before the `<div className="grid lg:grid-cols-2 ...">` opening tag. Wrap it in a `<div className="max-w-6xl mx-auto mb-8">` to match the grid's container width:

```tsx
<div className="max-w-6xl mx-auto mb-8">
  <ScrollReveal>
    <div className="flex flex-col gap-6">
      <Card className="border-2 border-primary bg-primary/5 w-full">
        ...What to Expect content...
      </Card>
      <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-soft shrink-0 img-card">
        <img src={contactExpectImage} ... />
      </div>
    </div>
  </ScrollReveal>
</div>
```

Change `direction="right" delay={200}` to just `<ScrollReveal>` since it's no longer in a side column.

- [ ] **Step 4: Verify layout at desktop and mobile**

Check `http://localhost:5173/contact`:
- Desktop (≥1024px): "What to Expect" card renders full-width above the two-column form/info grid
- Mobile: card renders full-width, stacked naturally above form
- The form and Contact Information card are still side-by-side on desktop

- [ ] **Step 5: Commit**
```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): move What to Expect above the form grid"
```

---

## Task 5: Homepage copy — site-content.json

**Files:**
- Modify: `src/data/site-content.json`

Two text value changes. Note: both values may be overridden by Sanity CMS at runtime. After editing the JSON, check whether Sanity Studio (if running) has live values for `heroHeadlineHighlight` or `introCards` — if so, those need updating in Sanity too for the change to appear in production.

- [ ] **Step 1: Update hero headline highlight**

In `src/data/site-content.json`, find `"part3"` under `homepage.hero.headline`:
```json
"part3": "Your Legendary Weekend."
```
Replace with:
```json
"part3": "Your Weekend, On Your Terms."
```

- [ ] **Step 2: Update intro card index 4**

Find the fifth item (index 4) in `homepage.intro.text`:
```json
"The freedom to be themselves, whether that's creating a DIY celebration or an extravagant event that reflects their unique story."
```
Replace with:
```json
"The freedom to go big, keep it simple, or something beautifully in between."
```

- [ ] **Step 3: Verify fallback copy on homepage**

Check `http://localhost:5173/`. If Sanity is not overriding these values, confirm:
- Hero headline third line reads "Your Weekend, On Your Terms."
- The fifth "This is for couples who want..." card reads the new text

- [ ] **Step 4: Check Sanity Studio for live overrides**

The site uses Sanity CMS to override these values at runtime. Open Sanity Studio (typically `http://localhost:3333`) and check the homepage document for `heroHeadlineHighlight` and `introCards` fields. If either has a live value, update it in Sanity Studio to match the new copy. If Sanity is not overriding these fields, the JSON change in steps 1–2 is sufficient.

- [ ] **Step 5: Commit**
```bash
git add src/data/site-content.json
git commit -m "fix(copy): update hero headline and intro card copy"
```

---

## Task 6: Homepage copy — Index.tsx

**Files:**
- Modify: `src/pages/Index.tsx`

Two changes: remove a section label element, fix the owner quote text.

- [ ] **Step 1: Remove the differentiation section label**

Find (~line 499) in the "This Is Different" section:
```tsx
<p className="section-label">THIS QUESTION CHANGES EVERYTHING</p>
```
Delete this single line. The `<h2>` below it remains unchanged.

- [ ] **Step 2: Fix the owner quote**

Find (~line 675) inside the `<blockquote>`:
```tsx
"We didn't want to build just another venue. We wanted to create something deeper-a place where people could slow down, truly connect, and celebrate life and their unique individual love stories across an
```
Change `"...celebrate life and their unique individual love stories across an"` to `"...celebrate life and love across an"`.

The `<span>` element on the next line wrapping `"entire weekend."` must be kept exactly as-is — only the text in the preceding string changes.

Result should read:
```tsx
<blockquote ...>
  "We didn't want to build just another venue. We wanted to create something deeper-a place where people could slow down, truly connect, and celebrate life and love across an
  <span className="block text-center -ml-[10%] text-[#D8A799] italic text-[1.2em]">entire weekend."</span>
</blockquote>
```

- [ ] **Step 3: Verify on homepage**

Check `http://localhost:5173/`. Confirm:
- The "THIS QUESTION CHANGES EVERYTHING" label is gone from the differentiation section
- The owner quote reads "...celebrate life and love across an entire weekend." with the styled span intact

- [ ] **Step 4: Commit**
```bash
git add src/pages/Index.tsx
git commit -m "fix(copy): remove section label, fix owner quote"
```

---

## Task 7: Venue page — add "growing venue" section

**Files:**
- Modify: `src/pages/Venue.tsx`

Add one new section immediately before the `{/* CTA Section */}` comment at line ~447.

- [ ] **Step 1: Add import for ScrollReveal if not already imported**

Check the imports at the top of `src/pages/Venue.tsx`. `ScrollReveal` should already be imported — if not, add:
```tsx
import ScrollReveal from "@/components/ScrollReveal";
```

- [ ] **Step 2: Insert the new section**

Immediately before the `{/* CTA Section */}` comment (~line 447), insert:

```tsx
{/* Growing Venue Section */}
<section className="section bg-card">
  <div className="container mx-auto px-4">
    <ScrollReveal>
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
    </ScrollReveal>
  </div>
</section>
```

- [ ] **Step 3: Verify on venue page**

Check `http://localhost:5173/venue`. Confirm:
- New section appears between the last features grid and the dark CTA section
- Scroll animation fires on scroll-into-view
- Text is readable and styled consistently with surrounding sections

- [ ] **Step 4: Commit**
```bash
git add src/pages/Venue.tsx
git commit -m "feat(venue): add growing venue transparency section"
```

---

## Task 8: Final review pass

- [ ] **Step 1: Run through the full contact flow**

Visit `http://localhost:5173/contact`. Fill out only the required fields (skip phone, skip all optional fields). Submit. Confirm the success message appears.

- [ ] **Step 2: Check homepage and venue page**

- `http://localhost:5173/` — hero headline, intro cards, differentiation section, owner quote
- `http://localhost:5173/venue` — new section present before CTA

- [ ] **Step 3: Check for TypeScript errors**

```bash
npm run build
```
Expected: build completes with no errors.

- [ ] **Step 4: Push to remote**

```bash
git push origin main
```
