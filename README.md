# NeKo-SysDev

The NeKo System Developers Team website — rebuilt from the original static site
(`Dev-Portfolio`) in **Next.js 15 (App Router) + Tailwind CSS 4**, server-rendered
for search engines and AI crawlers, and deployed on **Vercel** at
[neko-sysdev.online](https://neko-sysdev.online).

All copy, pricing, and project lists carry over from the original site unchanged.
The visual design follows the futuristic language of
[Glenn_Portfolio](https://glenn-it.github.io/Glenn_Portfolio/): deep navy-purple
base, glassmorphic cards, amethyst → slate blue → Klein blue gradients, an animated
particle field, and scroll reveals.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — every route should print ○ (Static)
npm start        # serve the production build locally
npm run lint
```

Node 20+ is required (built and verified on Node 24).

## Project layout

```
app/                    routes, one <h1> and one set of metadata each
  page.tsx              home — hero + every section
  services/             packages and pricing
  projects/             31 capstone project types
  about/                team, how we work, reviews
  contact/              contact details
  sitemap.ts            real URLs (the old sitemap listed #fragments)
  robots.ts             allows every crawler, AI bots named explicitly
  llms.txt/route.ts     plain-text site summary for AI agents, generated from lib/content
  opengraph-image.tsx   generated 1200×630 social card
  not-found.tsx         404
components/
  layout/               Header (client) · Footer · FloatingContact
  sections/             Hero · Services · WhyChooseUs · HowWeWork · Testimonials ·
                        Skills · Projects · Contact
  interactive/          TestimonialSlider · ScheduleModal · ProjectAccordion ·
                        TypingHeadline (client)
  effects/              ParticleBackground · Reveal · ScrollToTop (client)
  ui/                   SectionHeading · Card · GradientButton · Icon · JsonLd
lib/
  content/              all copy, typed — single source of truth
  seo.ts                buildMetadata(): canonical + OG + Twitter per route
  schema.ts             JSON-LD builders
public/img/             logo, favicon, team photos (WebP)
```

**Editing content never means editing components.** Prices, testimonials, skills,
projects, and contact details all live in `lib/content/*.ts`; the homepage and the
dedicated routes render the same arrays through the same components, so a price
change is a one-line edit that updates the page, the JSON-LD, and `/llms.txt` at once.

## What changed for SEO

| Original | Now |
| --- | --- |
| No `<h1>` anywhere on the page | One `<h1>` per route, starting with a real hero |
| One indexable URL, sitemap of `#fragments` | 5 indexable routes in `sitemap.xml` |
| No structured data | `ProfessionalService`, `WebSite`, `OfferCatalog`, `Review` + `AggregateRating`, `ItemList`, `Person`, `FAQPage`, `BreadcrumbList` |
| Fonts + Font Awesome from two CDNs | Inter, JetBrains Mono and the icons all self-hosted at build time |
| 989 KB `Lucky1.png` | 19 KB WebP, served through `next/image` |
| `og:image` pointed at a missing file | Generated 1200×630 card |
| Nothing addressed AI crawlers | `robots.txt` names GPTBot, ClaudeBot, PerplexityBot, CCBot and others; `/llms.txt` summarises the business |
| `.htaccess` security headers (Apache only) | `vercel.json` headers, which actually apply on Vercel |

## Motion and no-JS behaviour

Two rules the effects follow, because this is a site that has to rank:

- **Nothing is hidden before JavaScript runs.** `Reveal` applies its hidden state on
  mount, never during server rendering, so the HTML a crawler fetches has no
  `opacity: 0` anywhere. Same for the typing headline — the `<h1>` ships complete
  ("We build Capstone Systems in the Philippines") and only then starts cycling.
- **Motion is opt-out-able.** The particle canvas is skipped entirely under
  `prefers-reduced-motion`, pauses while the tab is hidden, and drops to 25 particles
  below 768px. Reveals and the typing effect respect the same media query.

## Deploying to Vercel

1. Push this directory to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repo. The framework is detected
   automatically; no build settings need changing.
3. **Settings → Domains → Add** `neko-sysdev.online` (and `www.neko-sysdev.online`),
   then point the domain's DNS at Vercel. Vercel shows the exact record values to
   use for your domain and issues the TLS certificate itself.
4. Redeploy. HTTPS and the `www` → apex redirect are handled by Vercel.

### Changing the domain

Canonical URLs, the sitemap, JSON-LD, and `/llms.txt` all read from one value. To
run on a different domain, set an environment variable in Vercel — no code changes:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without it the site falls back to `https://neko-sysdev.online`.

## After the first deploy

- Submit `https://neko-sysdev.online/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console) and
  [Bing Webmaster Tools](https://www.bing.com/webmasters).
- Validate a page in the
  [Rich Results Test](https://search.google.com/test/rich-results) — the
  Organization, Offer, Review, and FAQ schemas should all pass.
- Create a Google Business Profile for Santo Niño, Cagayan; local results are the
  fastest ranking win for a business with a physical address.
