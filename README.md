# Ecommerce QA Assignments 1 and 2

## System Overview

This repository contains a separated ecommerce application:

- `frontend/`: Next.js 15 storefront and account UI
- `backend/`: Go Gin API with PostgreSQL, Redis, Swagger, and Prometheus

Core features present in the codebase include authentication, catalog browsing, product details, search/filtering, cart, checkout/payment-link generation, orders, profile/address management, notifications, contracts, and admin product management.

## QA Overview

Assignment 1 deliverables remain in `qa-docs/`, and Assignment 2 now extends that same structure with deeper automation, quality gates, metrics, evidence, and CI support.

Assignment 1 baseline:

- risk assessment
- QA strategy
- QA environment setup
- baseline metrics
- smoke tests
- `.github/workflows/qa-assignment1.yml`

Assignment 2 additions:

- high-risk Playwright UI suites under `tests/e2e/`
- live API suites under `tests/api/`
- reusable page objects, mocks, fixtures, and session helpers
- metrics and quality-gate scripts under `scripts/`
- `.github/workflows/qa-assignment2.yml`
- Assignment 2 reports, tables, logs, and evidence files in `qa-docs/`, `logs/`, and `evidence/`

### Setup

1. Install frontend dependencies:
   `cd frontend && npm ci`
2. Install root QA dependencies:
   `npm ci`
3. Install Playwright browser binaries:
   `npm run qa:install:browsers`
4. Copy QA env template:
   `cp .env.qa.example .env.qa`

### Run QA checks

- Assignment 1 / Assignment 2 smoke suite:
  `npm run qa:test:smoke`
- Critical high-risk suite:
  `npm run qa:test:critical`
- Regression suite:
  `npm run qa:test:regression`
- All QA tests:
  `npm run qa:test`
- Generate metrics artifacts:
  `npm run qa:metrics`
- Evaluate quality gates:
  `npm run qa:quality-gates`
- Backend Go tests:
  `cd backend && GOCACHE=/tmp/go-build GOMODCACHE=/tmp/go-mod go test ./...`

### Live API coverage

Live backend API tests are implemented but disabled by default. To enable them, prepare the backend stack and set:

- `QA_RUN_API_TESTS=true`
- `QA_API_LOGIN_PHONE`
- `QA_API_LOGIN_PASSWORD`

Then run:

`npm run qa:test:api`

### Deliverables

- `qa-docs/risk-assessment.md`
- `qa-docs/risk-matrix.csv`
- `qa-docs/qa-test-strategy.md`
- `qa-docs/qa-environment-setup.md`
- `qa-docs/baseline-metrics.md`
- `qa-docs/baseline-metrics.csv`
- `qa-docs/evidence-index.md`
- `qa-docs/assignment2-scope.md`
- `qa-docs/test-cases.md`
- `qa-docs/script-implementation-log.md`
- `qa-docs/version-control-tracking.md`
- `qa-docs/quality-gates.md`
- `qa-docs/ci-cd-integration.md`
- `qa-docs/alerting-failure-handling.md`
- `qa-docs/metrics-report.md`
- `qa-docs/test-execution-log.md`
- `qa-docs/metrics-visualization.md`
- `qa-docs/qa-test-strategy-assignment2.md`
- `qa-docs/evidence-assignment2.md`
- `qa-docs/tables/`
- `logs/`
- `evidence/charts/`

### Notes

- Assignment 2 UI automation uses the real Next.js frontend plus a QA-safe mock API layer for deterministic high-risk verification.
- Live API testing is included but disabled by default until the backend stack is running.
- The frontend now supports `NEXT_PUBLIC_API_BASE_URL` for QA and CI override without changing normal local defaults.
- Existing backend Go tests are kept as baseline evidence, but several pre-existing failures are documented in `qa-docs/baseline-metrics.md`.
