# Evidence Index

## Configuration and Deliverable References

| Path | Evidence description |
| --- | --- |
| `playwright.config.ts` | Assignment 1 Playwright configuration |
| `.env.qa.example` | QA environment template |
| `package.json` | Root QA scripts and dependencies |
| `.github/workflows/qa-assignment1.yml` | Assignment 1 CI pipeline |
| `tests/e2e/homepage.smoke.spec.ts` | Homepage smoke coverage |
| `tests/e2e/login.smoke.spec.ts` | Login page smoke coverage |
| `tests/api/backend.smoke.spec.ts` | Optional backend smoke coverage |
| `frontend/src/lib/axios.ts` | QA-safe API base URL override support |
| `qa-docs/risk-assessment.md` | Formal risk assessment |
| `qa-docs/risk-matrix.csv` | Risk matrix export |
| `qa-docs/qa-test-strategy.md` | QA strategy deliverable |
| `qa-docs/qa-environment-setup.md` | Reproducible setup report |
| `qa-docs/baseline-metrics.md` | Baseline metrics report |
| `qa-docs/baseline-metrics.csv` | Baseline metrics export |

## Suggested Screenshots

If screenshots cannot be captured automatically in this environment, take the following manually for submission:

| Screenshot | Exact location | What to capture |
| --- | --- | --- |
| Frontend smoke target | `/login` in local browser | Visible login form with heading |
| Storefront smoke target | `/` in local browser | Homepage hero section and catalog CTA |
| Playwright HTML report | `playwright-report/index.html` after test run | Passed smoke tests summary |
| GitHub Actions run | Repository Actions tab | Successful `qa-assignment1` workflow run |
| Backend metrics or API smoke | `http://127.0.0.1:8080/metrics` when backend is running | Reachable backend smoke endpoint |

## Manual Evidence Checklist

- Capture command-line proof of `npm run qa:test:smoke`
- Capture command-line proof of `GOCACHE=/tmp/go-build GOMODCACHE=/tmp/go-mod go test ./...` from `backend/`
- Capture the generated Playwright report
- Capture the workflow result once pushed to GitHub
- Store any screenshots under `evidence/` using descriptive names
