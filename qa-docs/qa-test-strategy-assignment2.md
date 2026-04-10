# QA Test Strategy for Assignment 2

## 1. Strategy continuity

Assignment 2 builds directly on the Assignment 1 QA foundation already present in this repository:

- Assignment 1 risk assessment remains the prioritization source
- Assignment 1 Playwright configuration remains the automation foundation
- Assignment 1 smoke suite remains preserved
- Assignment 1 CI workflow remains intact

The change in Assignment 2 is expansion, not replacement.

## 2. Automation approach

### Layering

- UI / E2E: Playwright against the real Next.js frontend
- API: Playwright API tests for live backend validation when environment is available
- Supporting automation: Node.js scripts for metrics generation and quality-gate enforcement

### Why this approach fits the current repo

- Frontend flows are business-critical and already exposed through stable routes
- Backend infrastructure is heavier and not always available in every QA environment
- Deterministic UI verification was needed without risky business-logic edits
- Live API validation still matters, so it was implemented as environment-gated coverage rather than removed

## 3. High-risk scope covered

| Module | Assignment 2 automation outcome |
| --- | --- |
| Authentication and authorization | Valid login, invalid login, protected route redirect, admin-route rejection |
| Product catalog and listing | Catalog render, search filtering, product-detail entry |
| Cart management | Add to cart, quantity update, clear cart |
| Checkout and payment initiation | Missing-address validation, address save, payment-link preparation |
| Order lifecycle | Order list visibility, pending-order cancellation |

## 4. Reusability and maintainability design

Assignment 2 introduces maintainable test structure additions:

- `tests/pages/` for page objects
- `tests/helpers/session.ts` for auth session seeding
- `tests/helpers/mock-backend.ts` for controlled QA-safe API mocking
- `tests/data/ecommerce-data.ts` for shared deterministic fixtures
- Feature-grouped test folders under `tests/e2e/` and `tests/api/`

This keeps selectors and scenario state centralized and reduces repeated setup logic.

## 5. Quality gates

The strategy now includes blocking quality gates:

- 100% pass on executed smoke tests
- 100% pass on critical flows
- Coverage of all 5 high-risk modules in the critical suite
- Smoke duration at or below 180 seconds
- Zero critical automated failures
- Frontend lint must pass

## 6. CI/CD strategy

Assignment 2 adds `.github/workflows/qa-assignment2.yml` with:

- smoke run
- critical run
- regression run
- metrics generation
- quality-gate enforcement
- artifact upload

Existing backend Go tests are still retained as informational baseline evidence.

## 7. Observed results from latest run

Observed on 2026-04-10:

- Smoke gate duration: `23731 ms`
- Critical failures: `0`
- Critical high-risk modules covered: `5`
- Automation coverage table generated
- Execution-time table generated
- Defects-vs-risk table generated
- SVG charts generated

## 8. Known limitations

- Real external payment processing is not executed in Assignment 2 local verification
- Live backend API positive-path checks depend on backend infrastructure and env variables
- UI automation currently prioritizes customer-critical flows over deeper supplier/admin behavior

## 9. Reproducibility evidence

Reproducibility is strengthened through:

- committed Playwright tests and helpers
- explicit `.env.qa.example`
- generated JSON logs
- generated CSV tables
- generated SVG charts
- CI workflow definition
- evidence inventory and manual screenshot checklist
