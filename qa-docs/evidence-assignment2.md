# Assignment 2 Evidence Pack

## Evidence inventory

Assignment 2 evidence was designed for academic submission and later reuse in a research/report section.

Primary machine-generated evidence:

- `logs/smoke-report.json`
- `logs/critical-report.json`
- `logs/regression-report.json`
- `logs/assignment2-metrics-summary.json`
- `logs/quality-gates-summary.json`
- `qa-docs/tables/*.csv`
- `evidence/charts/*.svg`

## Manual screenshot checklist

Automatic screenshots were not generated as a primary artifact in this run, so the following exact screenshot checklist should be used when preparing the final submission package:

| Screenshot ID | What to capture | Suggested filename |
| --- | --- | --- |
| SS-A2-001 | Login page with visible form | `evidence/screenshots/ss-a2-001-login-page.png` |
| SS-A2-002 | Invalid login error message | `evidence/screenshots/ss-a2-002-invalid-login.png` |
| SS-A2-003 | Catalog page after search filter | `evidence/screenshots/ss-a2-003-catalog-search.png` |
| SS-A2-004 | Cart with populated item and total | `evidence/screenshots/ss-a2-004-cart-populated.png` |
| SS-A2-005 | Checkout page with saved address and payment block | `evidence/screenshots/ss-a2-005-checkout-payment-link.png` |
| SS-A2-006 | Orders page showing cancelled order | `evidence/screenshots/ss-a2-006-orders-cancelled.png` |
| SS-A2-007 | GitHub Actions `qa-assignment2` run summary | `evidence/screenshots/ss-a2-007-ci-run.png` |
| SS-A2-008 | Playwright HTML report overview | `evidence/screenshots/ss-a2-008-playwright-report.png` |

## How the evidence should be interpreted

- JSON logs are the execution truth source
- CSV tables are submission-friendly derivatives
- SVG charts are presentation-friendly derivatives
- Manual screenshots complement, but do not replace, the machine-generated evidence
