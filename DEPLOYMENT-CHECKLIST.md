# Deployment Checklist — neko-sysdev.online

Take the new Next.js site live on Vercel, point the Hostinger domain at it, and retire the old
InfinityFree site.

**Work top to bottom. Do not skip Part 4, and do not do Part 5 before Part 4 passes.**

---

## Progress

| Part | Status |
|---|---|
| 1 — Push to GitHub | ✅ **Done** — `Glenn-IT/Neko-Sysdev`, branch `master`, 60 files, verified via API |
| 2 — Deploy on Vercel | ✅ **Done** — live at `neko-sysdev.vercel.app`, all crawlers get 200 |
| 3a — Add domain in Vercel | ✅ **Done** — apex + www added |
| 3a-bis — Apex as Production | ✅ **Done** — `www → 308 → apex`, matches our canonical tags |
| 3b — Nameservers at Hostinger | ✅ **Done** — set to `ns1/ns2.vercel-dns.com` |
| 3b — DNS propagation | ✅ **Done** — propagated 02:02:49 |
| 3c — `www` → apex redirect | ✅ **Done** — 307, path preserved |
| 4 — Verify the cutover | ✅ **PASSED** — all 7 crawlers 200, TLS valid, 0 schema errors |
| 5 — Retire InfinityFree | ⏳ **Wait for public DNS caches** to expire first (a few hours) |
| 6 — Search Console / Bing / GBP | ⬜ Can start now — see 6a and 6d |

**🎉 The site is live at [neko-sysdev.online](https://neko-sysdev.online) and every AI crawler that
was blocked now gets a 200 with full content.**

The only reason Part 5 is not green is that some public resolvers (notably Google's `8.8.8.8`) still
have the old InfinityFree IP cached, so *your* browser may still show the old site for a few hours.
Everything above was verified against the real origin. **Do not delete the InfinityFree files until
`https://neko-sysdev.online` loads the new site in your own browser with no tricks.**

---

## Before you start — what you have right now

|                        |                                                               |
| ---------------------- | ------------------------------------------------------------- |
| Domain                 | `neko-sysdev.online`, registered at **Hostinger**             |
| Hostinger hosting plan | **None** — domain only                                        |
| Current nameservers    | `ns1.byet.org` … `ns5.byet.org` (**InfinityFree**)            |
| Current A record       | `185.27.134.59` (InfinityFree)                                |
| Currently live         | The **old** single-page site                                  |
| New site               | This repo — built, tested, 3 commits, not yet pushed anywhere |

### Why we are moving hosts

This was measured against your live domain, not guessed:

| Crawler              | Old host today       | After this migration |
| -------------------- | -------------------- | -------------------- |
| Googlebot            | ✅ 200               | ✅ 200               |
| Bingbot              | ✅ 200               | ✅ 200               |
| GPTBot (ChatGPT)     | ❌ **403 Forbidden** | ✅ 200               |
| ClaudeBot            | ❌ **403 Forbidden** | ✅ 200               |
| PerplexityBot        | ❌ **403 Forbidden** | ✅ 200               |
| CCBot (Common Crawl) | ❌ **403 Forbidden** | ✅ 200               |
| meta-externalagent   | ❌ **403 Forbidden** | ✅ 200               |

InfinityFree also serves a JavaScript cookie challenge (a 0.8 KB `aes.js` page) to anything not on
its user-agent whitelist, instead of your actual content.

**This is the single most important fact in this document.** The block happens at the host, before
any of your files are read — so no `robots.txt`, `llms.txt`, or meta tag can fix it. It is why
ChatGPT, Claude and Perplexity cannot see your site today, and moving hosts is what fixes it.

---

## Part 1 — Push the code to GitHub

- [x] Sign in to [github.com](https://github.com) as **Glenn-IT**
- [x] **New repository** → name `neko-sysdev` → Private or Public → **do NOT** tick "Add a README",
      `.gitignore`, or a licence (the repo already has these; adding them causes a push conflict)
- [x] **Create repository**, then copy the HTTPS URL it shows you
- [x] Run these in Git Bash:

```bash
cd /c/xampp/htdocs/Neko-Sysdev
git remote add origin https://github.com/Glenn-IT/Neko-Sysdev.git
git push -u origin master
```

- [x] Refresh GitHub — you should see `app/`, `components/`, `lib/`, `public/` and **no**
      `node_modules` folder

> If the push asks for a password, use a **Personal Access Token**, not your GitHub password:
> GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new
> token → tick `repo`. Paste the token as the password.

### ✅ Part 1 verified

|                                                   |                                                                            |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| Repository                                        | [`Glenn-IT/Neko-Sysdev`](https://github.com/Glenn-IT/Neko-Sysdev) (public) |
| Default branch                                    | `master`                                                                   |
| Commit pushed                                     | `7c90809`                                                                  |
| Files on GitHub                                   | **60** — matches the 60 tracked locally                                    |
| `node_modules` / `.next` / `Note.txt` / `.claude` | **none pushed**, as intended                                               |

The branch is `master` rather than `main`. That is fine and needs no change — GitHub has set it as
the repository's default branch, so Vercel will build from it automatically.

---

## Part 2 — Deploy on Vercel

- [x] Go to [vercel.com](https://vercel.com) → **Sign up with GitHub** (free Hobby plan — no card)
- [x] **Add New… → Project**
- [x] Find **`Neko-Sysdev`** → **Import**. If it isn't listed, click **Adjust GitHub App Permissions**
      and grant access to the repo
- [x] Framework Preset should already read **Next.js**, and Production Branch should read `master`.
      **Change nothing else** — no build command, no output directory, no environment variables
- [x] Click **Deploy** and wait ~2 minutes
- [x] Open the URL Vercel gave you → **`https://neko-sysdev.vercel.app/`**

### Check the preview URL before touching DNS

Doing this now means any problem shows up while your live domain is still untouched.

- [x] Homepage loads with the particle background and the purple/navy design
- [x] The heading types through "Capstone Systems → Web Applications → …"
- [x] Every nav link works: Services, Skills, Projects, About, Contact
- [x] "Schedule a Meeting" opens the modal; both copy-email buttons work; **Esc** closes it
- [x] Testimonial slider arrows and dots work
- [x] Open it on your **phone** — hamburger menu opens, project cards collapse and expand on tap
- [x] Add `/sitemap.xml`, `/robots.txt` and `/llms.txt` to the URL — all three load

> Do not continue until every box above is ticked.

### ✅ Part 2 verified

Checked against `https://neko-sysdev.vercel.app`:

| Path | Result |
|---|---|
| `/` | 200 · 374,694 bytes · `text/html` |
| `/sitemap.xml` | 200 · 905 bytes · `application/xml` |
| `/robots.txt` | 200 · 599 bytes · `text/plain` |
| `/llms.txt` | 200 · 10,835 bytes · `text/plain` |

And the crawler test from Part 4, run early against the Vercel URL — **every one of these was `403`
on InfinityFree**:

| Crawler | HTTP | Bytes | Found real content |
|---|---|---|---|
| GPTBot | **200** | 374,694 | ✅ |
| ClaudeBot | **200** | 374,694 | ✅ |
| PerplexityBot | **200** | 374,694 | ✅ |
| CCBot | **200** | 374,694 | ✅ |
| meta-externalagent | **200** | 374,694 | ✅ |
| Googlebot | **200** | 374,694 | ✅ |

All six found the testimonial text `"Agyaman Kuya"` in the raw HTML with JavaScript disabled. The
blocking problem is already solved on Vercel — it only needs the domain pointed at it.

---

## Part 3 — Point the domain at Vercel

### 3a. Add the domain in Vercel

- [x] Vercel → your project → **Settings** → **Domains**
- [x] Add `neko-sysdev.online` → **Add**
- [x] Add `www.neko-sysdev.online` → **Add**
- [x] Vercel now shows the DNS values it wants. **Leave this page open.**

### 3a-bis. ⚠️ Make the apex the Production domain, not `www`

Vercel defaulted to `www` as Production, with the apex 308-redirecting to it. **That is backwards for
this site.** Every canonical tag, sitemap entry, JSON-LD block and `/llms.txt` line points at the
apex `https://neko-sysdev.online`. If the apex redirects away, the URL we tell Google is
authoritative is one that immediately bounces.

- [x] Settings → Domains → `neko-sysdev.online` → `⋯` menu → **Set as Production Domain**
- [x] Confirm the panel now reads `www.neko-sysdev.online → 308 → neko-sysdev.online`

### 3b. Point DNS at Vercel

> **Read this before touching hPanel.** The nameservers are still `ns1–ns5.byet.org` (InfinityFree),
> so Hostinger's DNS zone editor is **not** authoritative for this domain yet. Adding A/CNAME records
> there right now would have no effect whatsoever. The nameserver field is what has to change.

**✅ Taken: hand DNS to Vercel (one change, one wait)**

- [x] On the Vercel Domains page find the **Nameservers** option (a tab beside "DNS Records", or
      under the domain's `⋯` menu). Vercel shows two, typically `ns1.vercel-dns.com` and
      `ns2.vercel-dns.com`
- [x] [hpanel.hostinger.com](https://hpanel.hostinger.com) → **Domains** → `neko-sysdev.online` →
      **Manage** → **DNS / Nameservers** → **Change nameservers** → **Use custom nameservers**
- [x] Delete all five `ns1.byet.org` … `ns5.byet.org` entries, enter Vercel's two, **Save**
      → saved as `ns1.vercel-dns.com` / `ns2.vercel-dns.com`
- [x] Vercel then creates the A and CNAME records itself — nothing to type by hand

**~~Fallback~~ — not needed, kept for reference only:**

- [ ] ~~At Hostinger set the nameservers to Hostinger's own defaults
      (`ns1.dns-parking.com` / `ns2.dns-parking.com`), then wait for propagation~~
- [ ] ~~Then hPanel → **DNS Zone** → delete any existing `@` and `www` records, and add exactly what
      Vercel displayed for this project:~~

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `216.198.79.1` |
| `CNAME` | `www` | `769b6c3ba6af59d7.vercel-dns-017.com.` |

> ⚠️ **Use the values on your own Vercel screen, not from any tutorial — including this table.** That
> CNAME is unique to this project, and Vercel is expanding its IP range (it notes the legacy
> `76.76.21.21` and `cname.vercel-dns.com` still work, but the values above are the current ones).

- [ ] ⏳ **← YOU ARE HERE.** Wait for propagation — usually **15–60 minutes**, occasionally up to
      48 hours.

Check it against the `.online` registry directly, which skips every cache and gives the honest
answer (a plain `nslookup` can return a stale cached result for hours):

```bash
nslookup -type=NS neko-sysdev.online ns01.trs-dns.com
```

Last checked, the registry still reported the old delegation:

```
neko-sysdev.online → ns1.infinityfree.com / ns2.infinityfree.com
```

When it reports `ns1.vercel-dns.com` / `ns2.vercel-dns.com`, propagation is done and Part 4 can run.

- [ ] Back in Vercel → Settings → Domains, both entries show a green **Valid Configuration**
      (the "Invalid Configuration" warning showing now is expected until DNS moves)
- [ ] HTTPS works — Vercel issues the certificate itself, no action needed

**What this changes:** if you took the recommended route, DNS is now managed at Vercel. If you ever
add business email on this domain, the MX records go in Vercel's DNS panel rather than hPanel. Your
`@gmail.com` addresses are unaffected either way.

---

## Part 4 — Verify the cutover ⚠️ do not skip

This is the step that proves the whole migration worked.

- [x] Run this in Git Bash:

```bash
for ua in "GPTBot/1.1 (+https://openai.com/gptbot)" \
          "ClaudeBot/1.0 (+claudebot@anthropic.com)" \
          "PerplexityBot/1.0 (+https://perplexity.ai/perplexitybot)" \
          "CCBot/2.0 (https://commoncrawl.org/faq/)" \
          "Googlebot/2.1 (+http://www.google.com/bot.html)"; do
  code=$(curl -s -o /tmp/o.html -w "%{http_code}" -A "$ua" https://neko-sysdev.online/)
  printf "%-16s http=%s  %s bytes\n" "${ua%% *}" "$code" "$(wc -c < /tmp/o.html)"
done
```

**Every line must show `http=200` and tens of thousands of bytes.** Four of these returned `403` on
the old host. If they are all 200 now, ChatGPT, Claude, Perplexity and Common Crawl can read your
site — that is the goal of this entire migration.

- [x] Real content is in the raw HTML with no JavaScript (should print a number ≥ 1):

```bash
curl -s https://neko-sysdev.online/ | grep -c "Agyaman Kuya"
```

- [x] These all load on the live domain:
      `/` · `/services` · `/projects` · `/about` · `/contact` · `/sitemap.xml` · `/robots.txt` ·
      `/llms.txt`
- [x] `http://neko-sysdev.online` upgrades to `https://`
- [x] `https://www.neko-sysdev.online` redirects to the main domain
- [x] A made-up URL like `/nope` shows the styled 404 page
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on `https://neko-sysdev.online` and save
      the score — useful as a before/after record *(the anonymous API quota was exhausted; run it in
      the browser)*

### ✅ Part 4 results — DNS propagated 02:02:49

Registry now delegates to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.

| Crawler | Old host | **Live domain now** |
|---|---|---|
| GPTBot (ChatGPT) | ❌ 403 | ✅ **200 · 374,694 bytes · real content** |
| ClaudeBot | ❌ 403 | ✅ **200 · 374,694 bytes · real content** |
| PerplexityBot | ❌ 403 | ✅ **200 · 374,694 bytes · real content** |
| CCBot (Common Crawl) | ❌ 403 | ✅ **200 · 374,694 bytes · real content** |
| meta-externalagent | ❌ 403 | ✅ **200 · 374,694 bytes · real content** |
| Googlebot | ✅ 200 | ✅ 200 |
| Bingbot | ✅ 200 | ✅ 200 |

All seven found the testimonial text `"Agyaman Kuya"` in raw HTML with JavaScript disabled.

| Check | Result |
|---|---|
| TLS certificate | Let's Encrypt, `CN=neko-sysdev.online`, valid to 23 Oct 2026, verifies clean |
| All 5 routes + 3 SEO files | 200 |
| `/nope` | 404 with the styled page |
| `http://` → `https://` | 308 |
| `www` → apex | 307, path preserved (`/services` → `/services`) |
| Apex | 200, not redirecting |
| Canonical on live domain | `https://neko-sysdev.online` |
| Live domain vs `vercel.app` | byte-identical (matching MD5) |
| Structured data | **0 errors** across all 5 routes |

**Minor, optional:** the `www` redirect returns **307** (temporary). **308** (permanent) is slightly
better for SEO because it tells Google to consolidate ranking signals onto the apex permanently. If
Vercel's domain settings offer a status-code choice, switch it. Low impact — the canonical tag
already does most of this work.

---

## Part 5 — Retire the old InfinityFree site

**Only once every box in Part 4 is ticked.** The nameservers have already moved, so nothing here can
take your live site down.

- [ ] Sign in to [infinityfree.com](https://infinityfree.com) → your account → **File Manager**
      (or connect by FTP)
- [ ] Open `htdocs/` and delete **all** contents — `index.html`, `style.css`, `script.js`, `img/`,
      `.htaccess`, `404.html`, `Uki.html`, and every `.md` file
- [ ] Confirm `https://neko-sysdev.online` **still loads the new site** (it will — it no longer
      touches InfinityFree)
- [ ] Account → **Deactivate / Delete account**

Your archive of the old site stays safe at `C:\xampp\htdocs\Dev-Portfolio`. Do not delete that
folder.

---

## Part 6 — Get indexed by Google, Bing and the AI crawlers

### 6a. Google Search Console

> **Recommended right now: use the DNS method, not the HTML tag.** A *Domain* property covers the
> apex, `www`, `http` and `https` in one go, and it verifies via a TXT record — which sidesteps the
> stale A-record caches entirely, so it works before the caches expire.
>
> - [ ] Search Console → **Add property** → **Domain** → `neko-sysdev.online`
> - [ ] Copy the `google-site-verification=…` TXT value it gives you
> - [ ] Vercel → **Settings → Domains → DNS Records** (Vercel runs your DNS now) → add a `TXT`
>       record on `@` with that value → Save
> - [ ] Back in Search Console → **Verify**
>
> If you'd rather use the HTML tag, the steps below still work — but wait until DNS caches have
> expired everywhere.

- [ ] [search.google.com/search-console](https://search.google.com/search-console) → **Add property**
      → **URL prefix** → `https://neko-sysdev.online`
- [ ] Choose the **HTML tag** method and copy the `content="..."` value
- [ ] In Vercel → Settings → **Environment Variables**, add:
      `GOOGLE_SITE_VERIFICATION` = _that value_ → Save
- [ ] Vercel → **Deployments** → ⋯ on the newest → **Redeploy** (the tag only appears after a rebuild)
- [ ] Back in Search Console → **Verify**
- [ ] **Sitemaps** → enter `sitemap.xml` → **Submit**
- [ ] **URL Inspection** → for each of `/`, `/services`, `/projects`, `/about`, `/contact` →
      **Request indexing**

### 6b. Bing Webmaster Tools

- [ ] [bing.com/webmasters](https://www.bing.com/webmasters) → **Import from Google Search Console**
      (fastest) or add the site manually
- [ ] Submit the same `sitemap.xml`

### 6c. Confirm the structured data

- [ ] [Rich Results Test](https://search.google.com/test/rich-results) → paste
      `https://neko-sysdev.online/services`
- [ ] Confirm **Organization / ProfessionalService**, **Offer**, **FAQ** and **Breadcrumb** are found
      with no errors
- [ ] Test `https://neko-sysdev.online/about` too — expect **Review** and **Person**

### 6d. Google Business Profile — do not skip this one

- [ ] [business.google.com](https://business.google.com) → create a profile for
      **NeKo System Developers Team**
- [ ] Address: Zone 04, Centro Sur, Santo Niño, Cagayan, Philippines 3525
- [ ] Category: _Software company_ / _Website designer_
- [ ] Add the same phone numbers, the website URL, and photos
- [ ] Complete the postcard/phone verification when it arrives

> For a business with a real physical address, this is normally the **fastest ranking win available**
> — it puts you in Google Maps and the local results pack. Nothing in the website code can substitute
> for it.

---

## What to expect afterwards

| When        | What happens                                                                       |
| ----------- | ---------------------------------------------------------------------------------- |
| Immediately | Site live on the domain, AI crawlers unblocked                                     |
| 1–3 days    | Google re-crawls; the new pages start appearing                                    |
| 1–3 weeks   | The old single-page result is replaced by your 5 new URLs                          |
| 4–12 weeks  | AI assistants pick the site up (they refresh their indexes on their own schedules) |

Search rankings are never instant, and nobody can promise position #1. What this build does is remove
every technical reason for Google or an AI assistant to _skip_ you.

### ⚠️ Correction — do not expect review stars or FAQ boxes

An earlier draft of this file said stars and FAQ rich results would appear in 2–6 weeks. **That was
wrong, and it is worth knowing now rather than waiting months for something that will not come.**

- **Review stars won't show.** Google does not display review rich results for reviews a business
  collects and publishes about itself on its own site — that is a "self-serving review" and is
  explicitly disallowed for `LocalBusiness` / `Organization` types. Our `AggregateRating` and six
  `Review` nodes fall squarely in that category.
- **FAQ boxes won't show either.** In August 2023 Google restricted FAQ rich results to well-known
  government and health sites. Ordinary business sites no longer get them.

**Keep the markup anyway.** It is valid (audited, zero errors), and it still does real work: AI
assistants and non-Google engines read it to understand your pricing, credibility and service area —
which is precisely the audience this rebuild was aimed at. It simply won't change how your listing
*looks* in Google.

Star ratings that Google *does* show for a local business come from **Google Business Profile
reviews** (Part 6d), not from your website. That is another reason 6d matters more than it looks.

---

## Making changes later

Vercel redeploys automatically on every push to `master`:

```bash
cd /c/xampp/htdocs/Neko-Sysdev
# edit files...
git add -A
git commit -m "Update pricing"
git push
```

Prices, testimonials, skills, projects and contact details all live in `lib/content/*.ts`. Editing
one value there updates the page, the JSON-LD structured data, and `/llms.txt` at the same time —
you never need to touch a component.

Always run `npm run build` locally before pushing; if it fails there, it will fail on Vercel too.

---

## If something goes wrong

| Symptom                                 | Fix                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Push rejected, "updates were rejected"  | Remote has commits yours doesn't. `git pull --rebase origin master`, then push again.                     |
| Vercel build fails                      | Open the build log. Run `npm run build` locally — the same error appears with more context.               |
| Domain stuck on "Invalid Configuration" | Nameservers haven't propagated. Check with `nslookup -type=NS neko-sysdev.online` and wait.               |
| Still seeing the old site               | Browser or DNS cache. Try a private window, or your phone on mobile data instead of Wi-Fi.                |
| "Not secure" warning                    | The certificate is still being issued. It resolves itself within about an hour of DNS propagating.        |
| A crawler still returns 403             | Confirm DNS actually moved off `byet.org` — that 403 comes from InfinityFree, not Vercel.                 |
| Want to move off Vercel later           | Set `NEXT_PUBLIC_SITE_URL` to the new domain. Canonicals, sitemap, JSON-LD and `/llms.txt` all follow it. |
