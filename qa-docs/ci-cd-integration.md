# CI/CD Integration for Assignment 2

## What changed

Assignment 2 adds a dedicated workflow at `.github/workflows/qa-assignment2.yml` while keeping Assignment 1 intact. The new workflow expands the original smoke-only baseline into repeatable verification with quality gates and generated artifacts.

## Pipeline flow

1. Checkout repository
2. Set up Node.js and Go
3. Install frontend and root QA dependencies
4. Install Playwright Chromium
5. Copy `.env.qa.example` to `.env.qa`
6. Run frontend lint
7. Run backend Go tests as informational baseline
8. Run smoke suite and save JSON report
9. Run critical suite and save JSON report
10. Run regression suite and save JSON report
11. Generate CSV, JSON, and SVG metrics artifacts
12. Enforce quality gates
13. Upload artifacts even if a later step fails

## Blocking vs informational behavior

- Blocking:
  - frontend lint
  - smoke JSON suite
  - critical JSON suite
  - regression JSON suite
  - `qa:quality-gates`
- Informational:
  - backend Go baseline tests
  - live API tests unless environment variables are enabled

## Artifact outputs

- `logs/smoke-report.json`
- `logs/critical-report.json`
- `logs/regression-report.json`
- `logs/assignment2-metrics-summary.json`
- `logs/quality-gates-summary.json`
- `qa-docs/tables/*.csv`
- `evidence/charts/*.svg`

## Reproducibility value

- CI uses the same root QA scripts documented for local execution.
- Generated artifacts are plain-text or SVG and suitable for inclusion in academic appendices.
- Failures still preserve logs and charts for post-run analysis.
