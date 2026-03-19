# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **Grand Boulevard Apartment**, a short-term rental in Piața Română, Bucharest. Deployed on GitHub Pages at `https://grandboulevardromana.com/`.

No build step, no framework, no package manager — this is plain HTML, CSS, and vanilla JavaScript.

## Development

Open `index.html` directly in a browser, or use any local static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

There are no tests, no linting configuration, and no CI pipeline.

## Architecture

Single-page site (`index.html`) with one supporting page (`privacy.html`). All styles are in `css/style.css`. All JavaScript is inline at the bottom of `index.html` in multiple `<script>` blocks, each handling a distinct concern:

- **Sticky nav scroll** — `.sticky-btn`, `.sticky-cta`, `.hero-cta` all smooth-scroll to `#book`
- **Booking form** — POSTs asynchronously to Formspree (`https://formspree.io/f/xykdapkq`), hides the form and shows `#form-success` on success
- **Date validation** — enforces that check-in ≥ today and check-out > check-in, with real-time inline error messages
- **Photo slider** — CSS `translateX` carousel with dot navigation, prev/next buttons, keyboard arrows, touch swipe, and mouse drag
- **Lightbox** — full-screen overlay triggered by clicking slider images, supports keyboard and touch navigation
- **GDPR cookie banner** — persisted via `localStorage('cookieConsent')`
- **Terms modal** — shown via `display:block` toggle, closed with Escape key

## Key Details

- **Section IDs matter**: CTA buttons reference `#book` (not `#booking`). This was changed on 2026-03-19 — do not rename the section back.
- **Images**: All content images are in `images/content/` as `.webp` (optimised). A few legacy `.JPG`/`.png` files exist in the same folder from earlier iterations (`testing.html` references them but that file is scratch/testing only).
- **Bilingual content**: The Neighborhood and Layout sections have copy in Romanian; the rest of the page is in English. This is intentional.
- **Schema.org**: Two JSON-LD blocks in `<head>` — one `Apartment`/`VacationRental` and one `FAQPage`. Keep these in sync with any content changes to FAQ or amenities.
- **`testing.html` and `testing.js`**: Scratch files used during development. Not linked from the live site.
