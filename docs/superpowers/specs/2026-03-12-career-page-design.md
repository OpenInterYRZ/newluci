# Career Page Design Spec

## Overview

A two-page career section for the LUCI website: a listing page showing all open positions as stacked rows, and individual detail pages for each job with a two-column layout (JD content + sticky sidebar with metadata and Apply button).

## Routes

| Route | File | Purpose |
|-------|------|---------|
| `/[locale]/careers` | `app/[locale]/careers/page.tsx` | Job listing page |
| `/[locale]/careers/[id]` | `app/[locale]/careers/[id]/page.tsx` | Individual job detail page |

## Data Layer

### File: `/data/careers.ts`

Exports a typed array of job objects and a lookup helper:

```typescript
export interface Job {
  id: string;
  title: string;
  type: string;        // "Full time" | "Internship"
  department: string;   // "Research" | "Product" | "Engineer" | "Business"
  location: string;
  releaseDate: string;  // ISO date string
  releaseLabel: string;
  md: string;           // Markdown content for JD
}

export const jobs: Job[] = [/* 8 jobs from user data */];

export function getJobById(id: string): Job | undefined;
```

## Listing Page (`/careers`)

### Hero Section

- White background, centered text
- Small uppercase label: "CAREERS" in orange (`#ff5c00`), letter-spacing 3px
- Large serif heading (DM Serif Display): "Build What's Next"
- Subtitle (Manrope, grey): "We're looking for exceptional people to shape the future of AI."
- Position count: "8 Positions" as a subtle badge/text

### Job List Section

- Section heading: "Recruiting Positions"
- No filter tabs (only 8 positions, not needed yet)
- Stacked list of job rows, each row:
  - White card with subtle border (`border: 1px solid #eee`, `border-radius: 12px`)
  - Left side: Job title (bold, ~16px) + meta line below (department · type · location, grey, ~14px)
  - Right side: Arrow icon (`→`)
  - Hover: subtle background shift, slight translateX on arrow
  - Entire row is a link to `/careers/[id]`
- Gap between rows: ~8-12px

## Detail Page (`/careers/[id]`)

### Two-Column Layout

**Left Column (~65%):**
- Back link at top: "← Back to all positions" linking to `/careers`
- Job title as large heading (DM Serif Display, ~32px)
- Markdown content rendered from the `md` field
  - Use `next-mdx-remote` (already installed) or simple `dangerouslySetInnerHTML` with markdown-to-HTML
  - Prose typography: readable line-height, proper heading sizes for h4, list styling
  - Sections: Job Description, Responsibilities, Requirements, Bonus Qualifications/Points

**Right Column (~35%, sticky):**
- Sticky card (`position: sticky; top: 100px`)
- Metadata fields, each with a small grey label + bold value:
  - Department (e.g. "Research")
  - Type (e.g. "Full time")
  - Location (e.g. "Worldwide")
  - Posted (formatted date from `releaseDate`, e.g. "Jan 19, 2026")
- "Apply Now" button:
  - Full-width, orange background (`#ff5c00`), white text, rounded
  - `mailto:hr@luci.ai?subject=Application: {jobTitle}`
  - Hover: darken slightly

### Mobile Responsive
- Columns stack vertically on small screens
- Metadata card appears above JD content
- Apply button remains prominent (optionally fixed at bottom)

### 404 Handling
- If `id` doesn't match any job, render a "Position not found" message with link back to `/careers`

## i18n

Add keys to `/messages/en.json` under a `careers` namespace:

```json
{
  "careers": {
    "label": "CAREERS",
    "title": "Build What's Next",
    "subtitle": "We're looking for exceptional people to shape the future of AI.",
    "positionCount": "{count} Positions",
    "recruitingTitle": "Recruiting Positions",
    "applyNow": "Apply Now",
    "backToAll": "← Back to all positions",
    "department": "Department",
    "type": "Type",
    "location": "Location",
    "posted": "Posted",
    "notFound": "Position not found",
    "notFoundBack": "Back to careers"
  }
}
```

JD markdown content remains in the data file (English only for now).

## SEO

- Listing page: `metadata.title = "Careers | LUCI"`, `metadata.description = "Join the LUCI team..."`
- Detail pages: `metadata.title = "{jobTitle} | Careers | LUCI"`, description auto-generated from first line of JD
- `generateStaticParams()` on detail page for static generation

## Styling

- Tailwind CSS classes only, no new CSS files
- Uses existing CSS variables (`--primary` for orange, text/bg tokens from globals.css)
- Fonts: Manrope (body), DM Serif Display (hero heading)
- Design consistent with existing pages: rounded-xl corners, clean spacing, subtle borders

## Navigation Updates

- Navbar already links to `/about/careers` → update to `/careers`
- Footer already links to `/company#careers` → update to `/careers`

## Out of Scope

- Department filter tabs (can add later if job count grows)
- Application form / ATS integration
- JD content translation (English only for now)
- Analytics/tracking on Apply clicks
