# Ecommerce QA Assignment 1

## System Overview

This repository contains a separated ecommerce application:

- `frontend/`: Next.js 15 storefront and account UI
- `backend/`: Go Gin API with PostgreSQL, Redis, Swagger, and Prometheus

Core features present in the codebase include authentication, catalog browsing, product details, search/filtering, cart, checkout/payment-link generation, orders, profile/address management, notifications, contracts, and admin product management.

## QA / Assignment 1

Assignment 1 deliverables are stored in `qa-docs/`, with automation assets under `tests/` and CI automation under `.github/workflows/qa-assignment1.yml`.

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

- Smoke suite:
  `npm run qa:test:smoke`
- All Assignment 1 QA tests:
  `npm run qa:test`
- Backend Go tests:
  `cd backend && GOCACHE=/tmp/go-build GOMODCACHE=/tmp/go-mod go test ./...`

### Deliverables

- `qa-docs/risk-assessment.md`
- `qa-docs/risk-matrix.csv`
- `qa-docs/qa-test-strategy.md`
- `qa-docs/qa-environment-setup.md`
- `qa-docs/baseline-metrics.md`
- `qa-docs/baseline-metrics.csv`
- `qa-docs/evidence-index.md`

### Notes

- API smoke testing is included but disabled by default until the backend stack is running.
- The frontend now supports `NEXT_PUBLIC_API_BASE_URL` for QA and CI override without changing normal local defaults.
- Existing backend Go tests are kept as baseline evidence, but several pre-existing failures are documented in `qa-docs/baseline-metrics.md`.
