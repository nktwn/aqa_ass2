# Script Implementation Log

## Summary

Assignment 2 automation was implemented directly on top of the existing Playwright setup from Assignment 1. New scripts were grouped by feature and backed by reusable page objects, session helpers, and a controlled QA-safe mock backend for deterministic UI coverage.

| Script ID | Module / Feature | Automation framework | Script name / location | Status | Comments |
| --- | --- | --- | --- | --- | --- |
| A2-SCR-001 | Auth | Playwright UI | `tests/e2e/auth/login.critical.spec.ts` | Implemented | Valid and invalid login covered |
| A2-SCR-002 | Authorization | Playwright UI | `tests/e2e/auth/authorization.critical.spec.ts` | Implemented | Protected route and admin-route checks |
| A2-SCR-003 | Catalog | Playwright UI | `tests/e2e/catalog/catalog.critical.spec.ts` | Implemented | Catalog render, search, detail entry |
| A2-SCR-004 | Cart | Playwright UI | `tests/e2e/cart/cart.critical.spec.ts` | Implemented | Add, increase quantity, clear |
| A2-SCR-005 | Checkout | Playwright UI | `tests/e2e/checkout/checkout.critical.spec.ts` | Implemented | Address validation and payment-link creation |
| A2-SCR-006 | Orders | Playwright UI | `tests/e2e/orders/orders.critical.spec.ts` | Implemented | Order visibility and cancellation |
| A2-SCR-007 | Live API auth | Playwright API | `tests/api/auth/auth.live.spec.ts` | Implemented | Runs when backend stack is available |
| A2-SCR-008 | Live API catalog | Playwright API | `tests/api/catalog/catalog.live.spec.ts` | Implemented | Public endpoint validation |
| A2-SCR-009 | Live API cart | Playwright API | `tests/api/cart/cart.live.spec.ts` | Implemented | Anonymous protected-endpoint check |
| A2-SCR-010 | Shared mocks | Playwright helper | `tests/helpers/mock-backend.ts` | Implemented | QA-safe stateful API mock layer |
| A2-SCR-011 | Shared session seeding | Playwright helper | `tests/helpers/session.ts` | Implemented | LocalStorage auth setup for protected flows |
| A2-SCR-012 | Metrics and charts | Node.js | `scripts/generate-assignment2-artifacts.mjs` | Implemented | CSV logs, summaries, SVG charts |
| A2-SCR-013 | Quality gates | Node.js | `scripts/check-quality-gates.mjs` | Implemented | Blocking CI gate evaluation |
