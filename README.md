# GitHub ADLC

A React, TypeScript, Vite, and Tailwind CSS landing page explaining GitHub Agentic SDLC and GitHub Agentic Workflows with a cinematic style, video backgrounds, and liquid glass UI.

## Screenshots

### Homepage hero

![Homepage hero](docs/screenshots/homepage.png)

### Lifecycle — From intent to production

![Lifecycle section](docs/screenshots/lifecycle.png)

### Agentic workflows

![Workflows section](docs/screenshots/workflows.png)

### Full page

![Full page](docs/screenshots/full-page.png)

## Agentic Workflows

This repository includes a suite of AI-powered GitHub Actions workflows that continuously improve code quality, documentation, and developer experience.

### Code Quality

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `code-simplifier` | Analyzes recently modified code and opens PRs with simplifications that improve clarity while preserving functionality | Daily |
| `duplicate-code-detector` | Identifies duplicate code patterns across the codebase and suggests refactoring opportunities | Daily |
| `breaking-change-checker` | Analyzes recent commits and merged PRs for breaking CLI changes | Daily |
| `schema-consistency-checker` | Detects inconsistencies between JSON schema, implementation code, and documentation | Daily |
| `cli-consistency-checker` | Inspects the gh-aw CLI to identify inconsistencies, typos, bugs, or documentation gaps | On demand |

### Testing

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `daily-test-improver` | Discovers testing gaps and implements new tests with measured coverage impact | Daily |
| `daily-testify-uber-super-expert` | Advanced daily testing analysis and improvement | Daily |
| `daily-compiler-quality` | Analyzes compiler code daily to assess quality standards and reports findings | Daily |

### Documentation

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `daily-doc-updater` | Automatically reviews and updates documentation based on recent code changes | Daily |
| `docs-noob-tester` | Tests documentation as a new user would, identifying confusing or broken steps | Daily |
| `daily-multi-device-docs-tester` | Tests documentation for responsive layout issues across mobile, tablet, and desktop | Daily |
| `unbloat-docs` | Reviews and simplifies documentation by reducing verbosity while maintaining clarity | On demand |
| `glossary-maintainer` | Maintains and updates the documentation glossary based on codebase changes | On demand |
| `slide-deck-maintainer` | Maintains the gh-aw slide deck by scanning repository content for updates | On demand |

### CI/CD

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `ci-coach` | Analyzes GitHub Actions workflows for efficiency improvements and cost reduction | Daily |
| `ci-doctor` | Automated CI failure investigator — triggers when monitored workflows fail | On failure |

### Monitoring & Health

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `audit-workflows` | Daily audit of all agentic workflow runs to identify issues and improvement opportunities | Daily |
| `workflow-health-manager` | Meta-orchestrator for monitoring and managing health of all agentic workflows | Daily |
| `metrics-collector` | Collects daily performance metrics for the agent ecosystem | Daily |
| `portfolio-analyst` | Identifies cost reduction opportunities (20%+) while improving workflow reliability | Weekly |

### Other

| Workflow | Description | Schedule |
|----------|-------------|----------|
| `issue-triage-agent` | Automatically triages and labels incoming issues | Weekdays |
| `blog-auditor` | Verifies that the GitHub Next Agentic Workflows blog page is accessible and up-to-date | Weekly |

## Development

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```
