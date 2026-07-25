# Getting Visitors — NeKo-SysDev

A practical guide to bringing people to [neko-sysdev.online](https://neko-sysdev.online), written
for this specific business: capstone system developers in Santo Niño, Cagayan, selling to Philippine
students and small businesses.

Ordered by **what brings enquiries soonest**, not by what sounds most technical.

---

## Reality check, first

The site went live and was submitted to Google today. Two things follow from that:

- **Google will not be your main traffic source for roughly 6–12 months.** New domains take months
  to build enough trust to rank for competitive terms. This is normal and not a sign anything is
  broken.
- **Your first customers will come from Facebook and referrals**, the same way your existing six
  testimonials did — all from Cagayan State University students.

The technical SEO work is finished and it is genuinely good. But SEO is a compounding asset, not a
switch. Treat it as the long game while the sections below carry you in the short term.

---

## Priority order

| # | Channel | Effort | First results | Why |
|---|---|---|---|---|
| 1 | Google Business Profile reviews | 1 hour | Days | Only route to star ratings; strongest local signal |
| 2 | Facebook groups + Page | Ongoing | Days–weeks | Where your audience actually asks |
| 3 | Referrals from past clients | 1 hour | Days | Warmest leads you will ever get |
| 4 | Project-idea content | Medium | 2–6 months | Highest-intent search queries you can realistically win |
| 5 | Short video demos | Medium | Weeks–months | Students search YouTube for system demos |
| 6 | Direct school outreach | High | Seasonal | Slow to start, compounds every year |

---

## 1. Google Business Profile reviews — do this first

Your website's review markup **cannot** produce star ratings in Google search. Google does not show
review rich results for reviews a business publishes about itself. Business Profile reviews are the
only route to stars.

- [ ] Finish Business Profile setup and complete verification
- [ ] Message the students behind your six testimonials and ask each for a Google review
- [ ] Aim for **10 reviews** in the first month
- [ ] Reply to every review, positive or negative — Google rewards active profiles
- [ ] Add photos: screenshots of delivered systems, the team, defense-day photos if students consent

Ten genuine reviews will do more for local visibility than any further change to the website code.
This is the highest-return hour available to you.

> **Never** buy reviews or post fake ones. Google detects patterns and can suspend the profile,
> which costs you the local pack entirely.

---

## 2. Facebook — your real channel

The Philippines has among the highest Facebook usage in the world, and capstone students ask in
groups long before they search Google.

### Create a proper Page

- [ ] Facebook Page for **NeKo System Developers Team** (not just personal profiles)
- [ ] Link it from the site's social icons — right now those point to two personal accounts, which
      reads less established to a prospective client
- [ ] Same name, address and phone as the site and Business Profile. Consistency is a ranking signal

### Groups, without getting banned

Join capstone, IT-student and university-specific groups. Then:

- **Answer questions genuinely.** Someone asks how to do QR attendance in Android — actually answer
  it. Mention you build systems only when it is relevant.
- **Never** paste price lists into groups. Most ban it, and it reads as spam.
- Post finished work as short screen recordings. Thirty seconds of a working barangay system beats
  any paragraph of description.
- Let people come to you in DMs. That is the conversion.

### Post ideas that work

| Post | Why it works |
|---|---|
| 30-second screen recording of a delivered system | Proof, not claims |
| "5 capstone title ideas for IT students this year" | Saved and shared |
| Before/after of a messy vs clean database schema | Shows competence |
| A student's defense-day photo (with permission) | Social proof |
| Short answer to a common technical question | Builds reputation |

---

## 3. Referrals — the warmest leads

Every satisfied student has batchmates and juniors facing the same problem next year.

- [ ] Message past clients: ask them to keep you in mind for blockmates and juniors
- [ ] Consider a small referral thank-you — a discount on their friend's project
- [ ] Stay in the group chats. Capstone panic spreads by word of mouth, and you want to be the name
      that comes up

Your six testimonials are all from one university. That is a network already working — feed it
rather than starting new ones from scratch.

---

## 4. Content — the SEO play that fits you

Forget "web developer Philippines." You will not outrank agencies for that, and those searchers are
not your customer anyway.

**Your real queries look like this:**

- "capstone project ideas for IT students Philippines"
- "barangay information system capstone"
- "water billing system thesis"
- "IT capstone title with source code"
- "how much does a capstone system cost"

These are lower competition, and the people typing them are *exactly* your buyers.

### The biggest single opportunity

`/projects` currently lists **31 project types on one page**. All 31 compete as a single URL.

Split them into individual pages — `/projects/barangay-information-management-system` and so on —
and each becomes its own ranking target with its own title, description and structured data. Add
150–300 words to each about what the system does, its modules, and the stack.

The data already lives in `lib/content/projects.ts`, so this is a routing change plus generated
metadata, not writing 31 pages from nothing.

### Other content worth writing

| Page | Targets |
|---|---|
| "How much does a capstone system cost in the Philippines?" | High-intent price searches |
| "How to choose a capstone topic" | Students at the earliest stage |
| "What to prepare for your thesis defense" | Builds trust; shares well |
| "PHP vs Laravel for your capstone" | Technical searchers |

Write for students, not for Google. Answer the question properly and ranking follows.

---

## 5. Video

Students search YouTube for system demos as much as Google.

- Screen-record a walkthrough of a delivered system (with client permission)
- Title it the way a student searches: *"Barangay Information System — Capstone Demo (PHP, MySQL)"*
- Put the site link in the description
- Cross-post short cuts to TikTok and Facebook Reels

You do not need production value. Clear screen, clear voice, real system.

---

## 6. Timing — demand is seasonal

Your demand follows the academic calendar. Map these to your local schools:

| Phase | What students need | What to push |
|---|---|---|
| Topic proposal | Ideas, feasibility, scope | Project-idea content, free advice in groups |
| Development | A developer, fast | Packages, portfolio, testimonials |
| Pre-defense | Documentation, training, rehearsal | Guidance and defense-prep messaging |
| Post-defense | Nothing — they are done | Collect reviews and testimonials |

Push hardest in the two months **before** topic selection. A student choosing a topic is shopping;
the same student after defense is not.

---

## 7. Measure, or you are guessing

Search Console shows Google traffic only. It cannot show direct visits, Facebook referrals, which
pages people actually read, or where they leave.

- [ ] Add analytics (Vercel Analytics is one line of code on this project)
- [ ] Check Search Console monthly: which queries bring impressions, which pages get clicks
- [ ] Ask every enquiry "how did you find us?" and write the answer down

After two months you will know which of these sections is actually working for you — and you can
stop doing the rest.

---

## What not to waste money on

| Don't | Why |
|---|---|
| Buy backlinks or "SEO packages" | Wasted at best, a Google penalty at worst |
| Keyword-stuff the site | Already well optimised; more repetition hurts |
| Buy followers or reviews | Detected, and review fraud can suspend your profile |
| Boost Facebook posts randomly | Target by location and interest, or it is money burned |
| Expect fast Google results | Check indexing at day 3, then leave it alone for weeks |
| Rebuild the site again | It is not the bottleneck. Distribution is |

---

## Copy-paste templates

**Asking a past client for a Google review**

> Hi [name]! Congrats again on passing your defense 🎉 Would you mind leaving us a quick Google
> review? It really helps other students find us. Takes about a minute: [your Business Profile link]
> Thank you so much!

**Answering a capstone question in a group** *(no pitch — this is the point)*

> For QR attendance you can use the ZXing library on Android and store the scan results through a
> PHP REST API into MySQL. The main thing to plan early is what happens when a student scans twice —
> decide whether that is an error or a time-out, otherwise your data gets messy at defense time.

**Replying to a DM enquiry**

> Hi! Yes, we build [system type]. So we can scope it properly: what school are you from, when is
> your defense, and do you already have an approved topic? Packages start at ₱3,000 for a simple
> site and ₱5,000 for a basic system — full capstone systems depend on the modules you need. You can
> see the details here: neko-sysdev.online/services

---

## Your weekly routine (about 2 hours)

- **Mon** — Answer 2–3 questions in capstone groups. No pitching.
- **Wed** — Post one piece of proof: a demo clip, a screenshot, a tip.
- **Fri** — Follow up on any DMs; ask one finished client for a review.
- **Monthly** — Check Search Console; note which queries appear; write one content page.

Consistency beats intensity. Two hours a week for six months will outperform one frantic week.

---

## Available technical upgrades

Two things that would help, not yet built:

1. **31 individual project pages** — the largest organic opportunity available, built from data that
   already exists in `lib/content/projects.ts`
2. **Analytics** — so you can see traffic beyond Google search

Neither is required for the site to work. Both are worth doing when you want to push traffic
seriously.
