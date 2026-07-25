# Deployment Checklist — neko-sysdev.online

Take the new Next.js site live on Vercel, point the Hostinger domain at it, and retire the old
InfinityFree site.

**Work top to bottom. Do not skip Part 4, and do not do Part 5 before Part 4 passes.**

---

## Before you start — what you have right now

| | |
|---|---|
| Domain | `neko-sysdev.online`, registered at **Hostinger** |
| Hostinger hosting plan | **None** — domain only |
| Current nameservers | `ns1.byet.org` … `ns5.byet.org` (**InfinityFree**) |
| Current A record | `185.27.134.59` (InfinityFree) |
| Currently live | The **old** single-page site |
| New site | This repo — built, tested, 3 commits, not yet pushed anywhere |

### Why we are moving hosts

This was measured against your live domain, not guessed:

| Crawler | Old host today | After this migration |
|---|---|---|
| Googlebot | ✅ 200 | ✅ 200 |
| Bingbot | ✅ 200 | ✅ 200 |
| GPTBot (ChatGPT) | ❌ **403 Forbidden** | ✅ 200 |
| ClaudeBot | ❌ **403 Forbidden** | ✅ 200 |
| PerplexityBot | ❌ **403 Forbidden** | ✅ 200 |
| CCBot (Common Crawl) | ❌ **403 Forbidden** | ✅ 200 |
| meta-externalagent | ❌ **403 Forbidden** | ✅ 200 |

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

| | |
|---|---|
| Repository | [`Glenn-IT/Neko-Sysdev`](https://github.com/Glenn-IT/Neko-Sysdev) (public) |
| Default branch | `master` |
| Commit pushed | `7c90809` |
| Files on GitHub | **60** — matches the 60 tracked locally |
| `node_modules` / `.next` / `Note.txt` / `.claude` | **none pushed**, as intended |

The branch is `master` rather than `main`. That is fine and needs no change — GitHub has set it as
the repository's default branch, so Vercel will build from it automatically.

---

## Part 2 — Deploy on Vercel

- [ ] Go to [vercel.com](https://vercel.com) → **Sign up with GitHub** (free Hobby plan — no card)
- [ ] **Add New… → Project**
- [ ] Find **`Neko-Sysdev`** → **Import**. If it isn't listed, click **Adjust GitHub App Permissions**
      and grant access to the repo
- [ ] Framework Preset should already read **Next.js**, and Production Branch should read `master`.
      **Change nothing else** — no build command, no output directory, no environment variables
- [ ] Click **Deploy** and wait ~2 minutes
- [ ] Open the `https://neko-sysdev-xxxx.vercel.app` URL it gives you

### Check the preview URL before touching DNS

Doing this now means any problem shows up while your live domain is still untouched.

- [ ] Homepage loads with the particle background and the purple/navy design
- [ ] The heading types through "Capstone Systems → Web Applications → …"
- [ ] Every nav link works: Services, Skills, Projects, About, Contact
- [ ] "Schedule a Meeting" opens the modal; both copy-email buttons work; **Esc** closes it
- [ ] Testimonial slider arrows and dots work
- [ ] Open it on your **phone** — hamburger menu opens, project cards collapse and expand on tap
- [ ] Add `/sitemap.xml`, `/robots.txt` and `/llms.txt` to the URL — all three load

> Do not continue until every box above is ticked.

---

## Part 3 — Point the domain at Vercel

### 3a. Add the domain in Vercel

- [ ] Vercel → your project → **Settings** → **Domains**
- [ ] Add `neko-sysdev.online` → **Add**
- [ ] Add `www.neko-sysdev.online` → **Add** (Vercel redirects www → the main domain automatically)
- [ ] Vercel now shows the DNS values it wants. **Leave this page open.**

### 3b. Change the nameservers at Hostinger

- [ ] [hpanel.hostinger.com](https://hpanel.hostinger.com) → **Domains** → `neko-sysdev.online` →
      **Manage**
- [ ] Find **DNS / Nameservers** → **Change nameservers** → **Use custom nameservers**
- [ ] Delete all five `ns1.byet.org` … `ns5.byet.org` entries
- [ ] Enter the **two nameservers Vercel is showing you** (typically `ns1.vercel-dns.com` and
      `ns2.vercel-dns.com`)
- [ ] **Save**

> ⚠️ **Type the values from Vercel's screen, not from any tutorial — including this one.** Vercel has
> changed its published IPs and nameservers before. Whatever is on your Domains page right now is the
> only correct answer.

- [ ] Wait for propagation — usually **15–60 minutes**, occasionally up to 48 hours. Check with:

```bash
nslookup -type=NS neko-sysdev.online
```

  When it returns the Vercel nameservers instead of `byet.org`, it has propagated.

- [ ] Back in Vercel → Settings → Domains, both entries show a green **Valid Configuration**
- [ ] HTTPS works — Vercel issues the certificate itself, no action needed

**What this changes:** your DNS is now managed at Vercel. If you ever add business email on this
domain, the MX records go in Vercel's DNS panel, not hPanel. Your Gmail addresses are unaffected.

---

## Part 4 — Verify the cutover ⚠️ do not skip

This is the step that proves the whole migration worked.

- [ ] Run this in Git Bash:

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

- [ ] Real content is in the raw HTML with no JavaScript (should print a number ≥ 1):

```bash
curl -s https://neko-sysdev.online/ | grep -c "Agyaman Kuya"
```

- [ ] These all load on the live domain:
      `/` · `/services` · `/projects` · `/about` · `/contact` · `/sitemap.xml` · `/robots.txt` ·
      `/llms.txt`
- [ ] `http://neko-sysdev.online` upgrades to `https://`
- [ ] `https://www.neko-sysdev.online` redirects to the main domain
- [ ] A made-up URL like `/nope` shows the styled 404 page
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on `https://neko-sysdev.online` and save
      the score — useful as a before/after record

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

- [ ] [search.google.com/search-console](https://search.google.com/search-console) → **Add property**
      → **URL prefix** → `https://neko-sysdev.online`
- [ ] Choose the **HTML tag** method and copy the `content="..."` value
- [ ] In Vercel → Settings → **Environment Variables**, add:
      `GOOGLE_SITE_VERIFICATION` = *that value* → Save
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
- [ ] Category: *Software company* / *Website designer*
- [ ] Add the same phone numbers, the website URL, and photos
- [ ] Complete the postcard/phone verification when it arrives

> For a business with a real physical address, this is normally the **fastest ranking win available**
> — it puts you in Google Maps and the local results pack. Nothing in the website code can substitute
> for it.

---

## What to expect afterwards

| When | What happens |
|---|---|
| Immediately | Site live on the domain, AI crawlers unblocked |
| 1–3 days | Google re-crawls; the new pages start appearing |
| 1–3 weeks | The old single-page result is replaced by your 5 new URLs |
| 2–6 weeks | Review stars and FAQ rich results may appear in listings |
| 4–12 weeks | AI assistants pick the site up (they refresh their indexes on their own schedules) |

Search rankings are never instant, and nobody can promise position #1. What this build does is remove
every technical reason for Google or an AI assistant to *skip* you.

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

| Symptom | Fix |
|---|---|
| Push rejected, "updates were rejected" | Remote has commits yours doesn't. `git pull --rebase origin master`, then push again. |
| Vercel build fails | Open the build log. Run `npm run build` locally — the same error appears with more context. |
| Domain stuck on "Invalid Configuration" | Nameservers haven't propagated. Check with `nslookup -type=NS neko-sysdev.online` and wait. |
| Still seeing the old site | Browser or DNS cache. Try a private window, or your phone on mobile data instead of Wi-Fi. |
| "Not secure" warning | The certificate is still being issued. It resolves itself within about an hour of DNS propagating. |
| A crawler still returns 403 | Confirm DNS actually moved off `byet.org` — that 403 comes from InfinityFree, not Vercel. |
| Want to move off Vercel later | Set `NEXT_PUBLIC_SITE_URL` to the new domain. Canonicals, sitemap, JSON-LD and `/llms.txt` all follow it. |
