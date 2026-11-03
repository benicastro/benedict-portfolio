# Publish Benedict Castro Portfolio to GitHub Pages

This guide is configured specifically for the **benicastro** GitHub account.

## 1. Create the repository

1. Open <https://github.com/new> while signed in as `benicastro`.
2. Owner: **benicastro**. Repository name: **benedict-portfolio**.
3. Visibility: **Public**.
4. **Leave** “Add a README file”, “Add .gitignore”, and “Choose a license” **unchecked**. This project already contains its own files.
5. Click **Create repository**.

## 2. Push the source

Download and extract `Benedict_Castro_Portfolio_Source_v0.2.zip`. Open the **inner** `benedict-portfolio` folder containing `package.json` in VS Code.

Open Terminal → New Terminal. Run:

```powershell
git init
git add .
git commit -m "Launch Benedict Castro portfolio v0.2"
git branch -M main
git remote add origin https://github.com/benicastro/benedict-portfolio.git
git push -u origin main
```

If Git asks you to sign in, complete the GitHub sign-in flow. If Git complains about an unknown user identity, configure `git config --global user.name` and `git config --global user.email` using your own preferred commit identity. Never paste a GitHub token into the website source.

## 3. Enable GitHub Pages

1. Open <https://github.com/benicastro/benedict-portfolio/settings/pages>.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open <https://github.com/benicastro/benedict-portfolio/actions>, then check **Deploy portfolio to GitHub Pages** for build/deployment results.
4. After successful deployment, the public website should be: <https://benicastro.github.io/benedict-portfolio/>.

The workflow builds the site and sets the correct repository base path automatically.

## 4. Verify before sharing

- Confirm home, Projects, Case studies, Resume and Contact work on desktop and mobile.
- Open a case study, download the resume, switch the synthetic-data demo, and export sample CSV.
- Review the **May 2026 resume** for dates and any personal information you do not wish to publish.
- Review each anonymized case study for permission to disclose methods and project context.
- Confirm the GitHub profile points to <https://github.com/benicastro>.

## Update the site

Edit `src/data/projects.json` for case studies and `src/lib/site.mjs` / `scripts/build.mjs` for shared layout and pages. Then:

```powershell
npm run build
npm test
git add .
git commit -m "Update portfolio content"
git push
```

Every push to `main` triggers GitHub Pages deployment once enabled. The `dist/` directory is a generated artifact; it does not need to be committed to GitHub.
