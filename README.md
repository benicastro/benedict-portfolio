# Benedict Castro — Professional Portfolio

[View the portfolio](https://benicastro.github.io/benedict-portfolio/) · [GitHub profile](https://github.com/benicastro) · [Deployment status](https://github.com/benicastro/benedict-portfolio/actions)

A technical portfolio showcasing my work across Python web data collection, B2B account intelligence, CRM-ready data operations, and C#/.NET software engineering.

My work connects source discovery and extraction with data validation, structured delivery, and business applications. The case studies emphasize the problem, approach, technical decisions, and deliverables rather than unsupported performance claims.

## Featured case studies

| Case study | Focus |
| --- | --- |
| Public web and platform data collection | Python-supported collection, API/JSON investigation, structured exports, and documented edge cases |
| Regulated-industry account intelligence | ICP research, source-backed company/contact discovery, and decision-maker mapping |
| CRM-ready enrichment and data quality | Standardization, cross-source validation, deduplication, and import-ready datasets |
| .NET and SQL reporting engineering | ASP.NET MVC, C#, SQL Server reporting logic, and PDF/Excel exports |

These case studies are anonymized summaries of professional experience, not public reproductions of client systems or datasets. An interactive data-quality example on the site uses fictional records and is labeled as a demonstration.

## Website features

- Responsive multi-page design: Home, About, Projects, Skills, Resume, and Contact
- Individually linkable project case-study pages
- Category-based project filtering
- Interactive synthetic-data quality demo with CSV export
- Downloadable résumé and direct contact links
- Semantic navigation, visible keyboard focus, and reduced-motion support
- Metadata and a GitHub Pages-compatible deployment workflow

## Technology

This version uses a dependency-free Node.js static-site generator with reusable JavaScript template functions, HTML, and CSS. It does not use Astro yet. The generated output is a static website hosted with GitHub Pages.

- Runtime for local builds: Node.js 20+
- Build: `scripts/build.mjs`
- Local preview: `scripts/serve.mjs`
- Validation: `scripts/check.mjs`
- Deployment: GitHub Actions → GitHub Pages

## Run locally

Clone the repository and enter the project directory:

```bash
git clone https://github.com/benicastro/benedict-portfolio.git
cd benedict-portfolio
npm run dev
```

Open http://127.0.0.1:4173. There are no third-party npm packages to install. The development server serves the most recent build; restart it after editing or run `npm run build` in a separate terminal.

To build and check the generated site:

```bash
npm run build
npm test
```

Output is generated in `dist/`, which is not committed to this repository.

## Project structure

```text
.github/workflows/deploy.yml  GitHub Pages build and deployment
public/
  assets/                    Styles, browser JavaScript, site icons, social cover
  resume.pdf                 Public downloadable résumé
scripts/
  build.mjs                  Static page generator
  check.mjs                  Build/link validation
  serve.mjs                  Local preview server
src/
  data/projects.json         Case-study content
  lib/site.mjs               Shared layouts and page components
```

## Update the content

1. Edit `src/data/projects.json` to revise or add a case study. Give each entry a unique `slug`, `order`, and `categoryId` (`python`, `research`, `crm`, or `software`).
2. Keep the project context explicit: anonymized professional experience or independent demonstration with synthetic data.
3. Edit shared layout and page content in `src/lib/site.mjs` and `scripts/build.mjs`.
4. Run `npm run build` and `npm test` before committing.
5. Push changes to `main`. The deployment workflow is configured to rebuild and deploy the static website through GitHub Pages.

For initial setup and troubleshooting, see [`DEPLOY_TO_GITHUB.md`](DEPLOY_TO_GITHUB.md). View the [deployment workflow](.github/workflows/deploy.yml) for the exact published build steps.

## Privacy and evidence standards

- Professional work is described only at a general or anonymized level.
- Proprietary source code, confidential client records, and private contact datasets are not published.
- No undisclosed client performance metrics, screenshots, or testimonials are invented.
- Fictional sample records are identified as demonstrations, not as production results.
- Any future public code samples will be independently developed or published with appropriate permission.

## Planned improvements

- Add a fully reproducible independent Python data pipeline with tests and synthetic/openly licensed sample records.
- Add sanitized technical diagrams and project-specific screenshots where permitted.
- Refresh the downloadable résumé and review all public contact details.
- Perform additional accessibility, SEO, and mobile-performance audits.
- Consider migrating content to Markdown/Astro if the site expands significantly.

---

Benedict Z. Castro · Python, data research, CRM data workflows, and .NET software development
