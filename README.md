# MIP Website

The Momentum Internship Program site. The 2026 rebuild, replacing an earlier Next.js
site built for a grant application PROJXON is no longer pursuing. See History below.

---

## What this is

A single static page. No build step, no framework, no backend.

index.html the whole site: markup, styles and script in one file
assets/
mip-mark.png the M symbol, used in the header
mip-logo.png the full lockup, used in the footer


Open `index.html` in a browser to work on it. That is the entire local setup.

It is deliberately one page with anchor navigation rather than separate pages, following
the direction set in September: get a polished small version live, then grow it in phases.

---

## Brand

Confirmed by marketing on 1 October 2026. There is no finished brand kit; one was started
by a team lead who left before completing it.

| Token | Value | Used for |
|---|---|---|
| Black | `#000000` | Header, hero, apply section, footer |
| White | `#FFFFFF` | Page background, text on black |
| Gold | `#E0A827` | Buttons, rules, accents |

Two rules worth keeping:

**Gold is never text on white.** `#E0A827` on white is roughly 2:1 contrast, which fails
accessibility for text. On light backgrounds gold is for fills, rules and small accents
only. On black it reads fine.

**The full logo lockup only works on dark.** "INTERNSHIP PROGRAM" in the lockup is white,
so it disappears on a white background. Use `mip-mark.png` on light surfaces.

Colours live as CSS custom properties at the top of `index.html`, under `:root`.

### Type

Archivo, from Google Fonts. Marketing specified no typeface and suggested any straight
sans serif. They use Gamay for marketing materials, but that is a commercial licence not
cleared for web use.

---

## Deployment

Netlify, connected to this repository. Pushing to `main` deploys automatically. No build
command, no build directory; Netlify serves the repository root.

Staging: `mip-rebuild-draft.netlify.app`

---

## Content status

Parts of the page are intentionally placeholder and say so on the page itself.

- Testimonials. Six real ones with headshots are available from the old WordPress at
  `blog.projxon.com/wp-json/projxon/v1/clients`. Phelan confirmed on 23 October that they
  should be reworded from SIP to MIP and that those people already approved being featured.
- Alumni routes in the journey section. Drawn from the July review, not verified against
  named individuals.
- Two FAQ answers, including the weekly time commitment.
- Apply button. Points nowhere yet. OrkaApply is a Google Apps Script web app and the
  integration is a plain link out, pending a launch date.
- No team photos or video. Headshots are catalogued in OrkaAsset.
- Partnership content is thin. The page currently speaks almost entirely to applicants.

---

## History

There have been three versions of this site.

1. An original React and Vite app. Preserved on the `Archived-OLD-MIP` branch of this
   repository. No longer deployed.
2. A Next.js site built for a grant application, deployed to AWS Amplify in `us-west-1`
   as the app `STEM-MIP`. The live site through 2026. Its source repository was never in
   this organisation, so PROJXON owned the domain and hosting but not the code.
3. This rebuild.

Neither earlier version used WordPress for the live site, despite what the first version's
code suggests. The Amplify app had no environment variables and made no external API calls.

---

## Background

Structure comes from the MIP.com Q+A held on 21 July 2026. Design direction from OrkaSonar,
named as the reference in September.
