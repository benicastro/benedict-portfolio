# Benedict Castro — Professional Portfolio Website (v0.2)

A polished, **working** multi-page static portfolio built using dependency-free Node.js, reusable template functions, plain JavaScript, and CSS. The design deliberately avoids exposing client data or presenting fictional examples as professional outcomes.

## Current status

- [x] Home, About, Projects, Case Studies, Skills, Resume, Contact
- [x] Four individually linkable case studies based on documented professional experience
- [x] Client-safe case study text, without invented metrics
- [x] Functional project filters
- [x] Interactive data-quality demo using **fictional** `.example` company domains and names
- [x] CSV download for demo data
- [x] Responsive navigation, keyboard-friendly controls, reduced-motion support
- [x] Search-engine metadata, OG cover, favicon, sitemap/robots when `SITE_URL` is set
- [x] GitHub Pages action that automatically handles repository base paths
- [ ] Public GitHub repository and deployment (requires choosing an account/repository)
- [ ] Replace the May 2026 PDF with an updated public resume after review
- [x] Verified GitHub profile link (`https://github.com/benicastro`)
- [ ] Publish selected independently shareable code samples
- [ ] Add screenshots and accurate project-specific metrics where permission/evidence allows

## Quick start

**Requirements:** Node.js 20 or newer. No npm dependencies or installation step.

```bash
npm run dev
```

Visit `http://127.0.0.1:4173`. The developer server serves the last build; after content/style changes, restart `npm run dev` or run `npm run build` in a second terminal.

To create static deployment files:

```bash
npm run build
```

Output lives in `dist/`. You can upload this directory to any static host.

## Content and source layout

```text
src/
  data/projects.json        # Four case-study records, editable
  lib/site.mjs              # Reusable HTML layout, navigation, card and visual components
scripts/
  build.mjs                 # All pages, metadata, sitemap, copy assets
  serve.mjs                 # Minimal local preview server
public/
  assets/styles.css         # Site-wide responsive design
  assets/site.js            # Project filter, demo, download, nav, email copy
  assets/favicon.svg
  assets/og-cover.svg
  resume.pdf                # User-supplied ATS resume, May 2026
.github/workflows/deploy.yml
```

Project content is stored as structured JSON. This keeps the current version fully buildable **without external packages**. A later move to Astro content collections or Markdown is straightforward and recommended once the site grows into a larger publication; the initial architectural recommendation was Astro, but the verified v0.1 code deliberately uses a lighter build to remain usable in an offline development environment.

## Add a project

1. Open `src/data/projects.json`.
2. Create a new project object using an existing record as a reference; set a unique `slug`, `order`, and `categoryId` (`python`, `research`, `crm`, or `software`).
3. Keep `context` explicit: **Professional experience · Anonymized** or **Independent demonstration · Synthetic data**.
4. Include only supported claims and permitted public material. Avoid client names, private emails, proprietary source, and invented outcomes.
5. Run `npm run build`. A new `/projects/<slug>/` route is generated automatically.

## Publish on GitHub Pages

1. Create a **new, empty public** repository named `benedict-portfolio` under [benicastro](https://github.com/benicastro). Use https://github.com/new. **Do not initialize it with a README, license or `.gitignore`**, because this project already includes a README and `.gitignore`. Do not include confidential source files or datasets.
2. Extract the **source ZIP**, enter the nested `benedict-portfolio` folder (the one with `package.json`), and push its content to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Launch portfolio v0.1"
   git branch -M main
   git remote add origin https://github.com/benicastro/benedict-portfolio.git
   git push -u origin main
   ```
3. In the repository open **Settings → Pages**, choose **GitHub Actions** as Build and deployment source.
4. Open **Actions**, check that the *Deploy portfolio to GitHub Pages* workflow succeeds.
5. Your site will be at `https://benicastro.github.io/benedict-portfolio/` if your repository is named `benedict-portfolio`.

The workflow automatically sets `SITE_BASE=/benedict-portfolio/` and `SITE_URL`, so links and assets work on a GitHub Pages project URL. If you rename the repository, those values update on the next deployment. A `YOUR-USERNAME.github.io` repository uses the domain root.

**Custom domain:** once purchased, the workflow and builder should be updated to use the actual domain for `SITE_URL` and root `/` for `SITE_BASE`; configure the domain and DNS with GitHub Pages. Do not deploy with `benedictcastro.com` as if you already own it.

## Privacy, factuality and accessibility

- The downloadable PDF is **your original 2026 resume**, not a newly drafted CV. Check it before publication.
- Professional case-study descriptions summarize actual roles described in the supplied resume/CV/earlier PDF portfolio. They are generalized intentionally.
- Fictional data appears **only in the explicitly labeled demo** and uses reserved `.example` domains.
- No client-level success metrics, quoted feedback, or screenshots have been fabricated.
- Contact links use the email and LinkedIn URL present in the provided resume, and the GitHub account authenticated as `benicastro`.
- Responsive layout, semantic landmarks, descriptive links, aria-pressed controls, focus-visible cues, and prefers-reduced-motion handling are included. Additional screen-reader and accessibility audits are still recommended before launch.

## Suggested improvements after v0.1

**Evidence layer:** Publish one wholly independent, reproducible Python project with synthetic or openly licensed data. A good first example is a public-source research → normalization → deduplication → CRM-ready CSV pipeline, with a GitHub repository, README, sample input/output, and screenshots.

**Content layer:** Upgrade with one or two genuinely measurable professional outcomes if backed by records and permitted to disclose; improve case studies with sanitized visuals.

**Brand layer:** Confirm a preferred domain, add social proof only when permission and evidence exist, and consider migrating to Astro as posts and technical write-ups expand.

**Operations:** Monitor page health, add privacy-conscious analytics only after deciding whether the benefit justifies it, test Lighthouse and screen readers, and check all public PDFs for private information.

## Publishing progress

The local build is configured for `benicastro/benedict-portfolio`. The live repository and Pages deployment have **not** been created yet. GitHub account verified; GitHub permissions available to this assistant do not include creating a repository. Once you create the empty repository, the project can be pushed with the commands above, and GitHub Pages publishing will use the committed workflow.

For a concise launch guide, see [`DEPLOY_TO_GITHUB.md`](DEPLOY_TO_GITHUB.md).

## Source material reviewed

- `bzcastro_resume_ats_05292026.pdf`
- `bzcastro_cv_05292026.pdf`
- `Benedict_Castro_B2B_List_Building_Python_Portfolio.pdf` (the previously created two-page portfolio available within the project)

The third reference was consulted for content, but is intentionally **not redistributed** in this repository.
