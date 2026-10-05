# NeKo-SysDev — System Memory & Technical Registry
> **Document Purpose:** Single source of persistent memory for system architecture, hardware environment, developer tools, repository state, and deployment workflow for NeKo System Developers.  
> **Last Verified:** October 2026

---

## 1. Host Machine Specifications

| Property | Details |
| :--- | :--- |
| **Device Name / User** | `GLENN` |
| **System Manufacturer & Model** | LENOVO 83EM |
| **Operating System** | Windows 10 Home Single Language (64-bit, Version 2009) |
| **Processor (CPU)** | 13th Gen Intel(R) Core(TM) i5-13420H (8 Cores, 12 Logical Processors) |
| **Total Physical RAM** | 16.0 GB (16,857,817,088 bytes) |

### Storage & Partition Layout
- **Drive `C:` (Windows-SSD):** 374.72 GB total | ~124.5 GB free (Primary OS, Node.js, XAMPP root)
- **Drive `D:` (GLENN):** 683.55 GB total | ~72.8 GB free (Data storage)
- **Drive `E:` (New Volume):** 1179.46 GB total | ~924.9 GB free (Mass storage)
- **Drive `G:` (Glenard):** 100.00 GB total | ~92.1 GB free (Auxiliary storage)

---

## 2. Developer Toolchain & Runtimes

| Tool / Runtime | Installed Version | Notes / Binary Location |
| :--- | :--- | :--- |
| **Node.js** | `v24.14.0` | Active primary JavaScript runtime |
| **npm** | `11.9.0` | Default package manager |
| **Git** | `2.45.1.windows.1` | Configured with GitHub credentials |
| **PHP** | `8.2.12 (CLI / ZTS Visual C++ 2019 x64)` | `C:\xampp\php\php.exe` |
| **Composer** | `2.9.5` | PHP dependency manager |
| **Local Web Server** | XAMPP (`C:\xampp`) | Apache (`httpd.exe`) & MySQL (`mysql.exe`) available |

---

## 3. Active Project: NeKo-SysDev

- **Workspace Path:** `C:\xampp\htdocs\Neko-Sysdev`
- **Git Repository:** `https://github.com/Glenn-IT/Neko-Sysdev.git`
- **Current Branch:** `master` (Synchronized with `origin/master`)
- **Production URL:** [`https://neko-sysdev.online`](https://neko-sysdev.online)
- **Deployment Platform:** Vercel

### Core Technology Stack
- **Framework:** Next.js 15.5.21 (React Server Components, App Router)
- **UI Library:** React 19.1.0 & React DOM 19.1.0
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Icons:** React Icons (`react-icons` 5.7.0)
- **Language:** TypeScript 5.x

### Build & Production Verification
- **Build Status:** Verified passing (`npm run build` completed cleanly)
- **Rendering Strategy:** 100% Static Site Generation (`○ (Static)`) across all 13 routes:
  - `/` (Homepage — Hero, Services, Workflow, Testimonials, Projects, Contact)
  - `/about`
  - `/services`
  - `/projects`
  - `/contact`
  - `/_not-found`
  - `/robots.txt`
  - `/sitemap.xml`
  - `/llms.txt` (AI crawler summary)
  - `/opengraph-image` (1200×630 dynamic social card)
  - `/icon.ico`

---

## 4. Key Architectural Standards & Patterns

### 1. Centralized Data Architecture
- **Rule:** Never hardcode prices, testimonials, team profiles, or service lists directly in presentation components.
- **Location:** All content lives inside typed data models in `lib/content/*.ts`.
- **Impact:** Any change to content automatically updates web pages, structured data (JSON-LD), and the `/llms.txt` crawler feed simultaneously.

### 2. Search Engine & AI Crawler Optimization
- **Crawlers Allowed:** Google, Bing, GPTBot, ClaudeBot, PerplexityBot, CCBot explicitly handled in `robots.ts`.
- **Structured Data:** Full schema validation including `ProfessionalService`, `WebSite`, `OfferCatalog`, `Review`, `AggregateRating`, `FAQPage`, and `BreadcrumbList`.
- **No-JS Safe Motion:** Motion effects (`Reveal`, `TypingHeadline`) do not render with `opacity: 0` on the server, ensuring crawler indexing is uninterrupted.
- **Reduced Motion Support:** Background particle canvas respects `prefers-reduced-motion` and pauses when the tab is inactive.

### 3. Visual Language
- **Theme:** Deep navy-purple base (`#0d0c22`, `#181739`), glassmorphic overlays, amethyst to Klein blue gradients.
- **Design Origin:** Upgraded successor to `C:\xampp\htdocs\Dev-Portfolio` and inspired by `glenn-it.github.io/Glenn_Portfolio`.

---

## 5. Development & Deployment Cheatsheet

```bash
# Start local development server
npm run dev

# Run static production build test
npm run build

# Start local production preview
npm start

# Run ESLint validation
npm run lint

# Automated one-step Git Push & Deploy (Default timestamped commit)
npm run autopush

# Or directly execute PowerShell with a custom message:
powershell -ExecutionPolicy Bypass -File ./autopush.ps1 -Message "Your commit message"

# Manual Git Push workflow:
git add -A
git commit -m "Your update message"
git push origin master
```

---

## 6. Automated Git Push & Continuous Deployment (CI/CD)

The project includes built-in automation for committing and pushing updates directly to GitHub, which instantly triggers Vercel continuous deployment.

### How It Works
1. **Automation Script:** Located at [`autopush.ps1`](./autopush.ps1).
2. **Inspection:** Inspects the working directory with `git status --porcelain`. If no files are modified, it skips gracefully without creating redundant empty commits.
3. **Staging & Commit:** Automatically stages all modifications, untracked files, and deletions (`git add -A`). Generates an ISO-formatted timestamped commit message if none is provided.
4. **Push:** Pushes to remote `origin master`.
5. **Vercel Hook Trigger:** Since the Vercel project is bound to `Glenn-IT/Neko-Sysdev.git:master`, every push immediately initiates a production build and deployment to [neko-sysdev.online](https://neko-sysdev.online).

### Execution Methods
- **Quick push via npm:**
  ```bash
  npm run autopush
  ```
- **Push with custom message:**
  ```powershell
  .\autopush.ps1 -Message "Feature: updated capstone pricing structure"
  ```
- **Automating via Windows Task Scheduler (Optional):**
  A scheduled task can be pointed to `powershell.exe -ExecutionPolicy Bypass -File C:\xampp\htdocs\Neko-Sysdev\autopush.ps1` to run periodically at the end of each workday.

---

## 7. Ecosystem & Surrounding Workspace Context

Located in `C:\xampp\htdocs`, NeKo-SysDev serves as the central digital agency and portfolio hub for multiple client systems and capstone projects developed by the team, including:
- **Dev-Portfolio:** Original static portfolio (reference source)
- **Academic & Institutional Systems:** `OGMS-Lubo-National-High-School`, `SPSFMS-Student-Profiling-System`, `AGS-AOPCR-IPCR-Generation-System`
- **Booking & E-Services:** `rhu-appointment-system`, `WDACFWRS`, `ptoda_booking_api`, `PiatMoveAdmin`
- **IoT & Hardware Integrations:** `GasLeakDetector`, `PCBCES-Plastic-Bottle-Coin-Exchanger-System`, `smartplant`, `SDASFC`
