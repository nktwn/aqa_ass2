# Baseline Metrics

## Summary Table

| Metric | Baseline value | Notes |
| --- | --- | --- |
| Total assessed modules | 12 | Based on repository feature and route analysis |
| High-risk modules | 5 | Auth, cart, checkout, orders, catalog |
| Medium-risk modules | 5 | Product detail, profile/address, search/filter, contracts, admin |
| Low-risk modules | 2 | Notifications, observability |
| Assignment 1 automated QA tests added | 3 | 2 UI smoke tests and 1 optional API smoke |
| Existing automated tests already present | 6 test files | Backend Go tests found in auth, cart, product modules |
| Existing automated suite status | Partially failing | Verification showed pre-existing failures in several backend test packages |
| Estimated Assignment 1 effort | 12-16 hours | Analysis, setup, docs, verification |

## Coverage Plan by Module

| Module | Risk | Assignment 1 status | Planned coverage type | Assignment 2 direction |
| --- | --- | --- | --- | --- |
| Authentication and authorization | High | Partially covered | UI smoke, existing Go tests | Add login success/failure and role-protection E2E |
| Cart management | High | Not yet automated in QA suite | Existing Go tests only | Add add/remove/update cart E2E and API tests |
| Checkout and payment initiation | High | Not yet automated in QA suite | Manual exploration only | Add address selection, payment-link, callback tests |
| Order lifecycle | High | Not yet automated in QA suite | Existing app behavior only | Add order list, cancel, status transition coverage |
| Product catalog and listing | High | Partially covered | Homepage/catalog smoke | Add filter/sort/search assertions |
| Product detail and favorites | Medium | Not covered | Manual | Add product detail and favorite toggle tests |
| User profile and address book | Medium | Not covered | Manual | Add profile edit and address CRUD tests |
| Search and filters | Medium | Not covered | Manual | Add query-state and result consistency tests |
| Contracts and signatures | Medium | Not covered | Manual | Add role-based signature flow tests |
| Admin product management | Medium | Not covered | Manual | Add role gate and CRUD happy path |
| Notifications | Low | Not covered | Manual | Add unread count and mark-read API checks |
| Observability and metrics | Low | Partially covered | API smoke candidate | Add metrics/schema sanity checks |

## Existing Automated Coverage Found in Repository

| Area | Evidence |
| --- | --- |
| Auth service | `backend/modules/auth/service/auth/service_test.go` |
| Auth middleware | `backend/modules/auth/middleware/auth_test.go` |
| JWT utility | `backend/modules/auth/jwt/jwt_test.go` |
| Cart service | `backend/modules/cart/service/service_test.go` |
| Product service | `backend/modules/product/service/service_test.go` |
| Shared test utilities | `backend/internal/testutils/` |

Observed backend test failures during Assignment 1 verification:

- `backend/modules/auth/jwt/jwt_test.go`: test panic in expired-token helper path
- `backend/modules/auth/service/auth/service_test.go`: login expectation mismatch
- `backend/modules/cart/service/service_test.go`: constructor signature mismatch
- `backend/modules/product/service/service_test.go`: repository mock no longer satisfies interface

## Baseline Gaps

### Not covered

- End-to-end authenticated purchase journey
- Payment callback verification
- Role-specific admin and supplier behavior
- Frontend regression checks for catalog filters and orders

### Partially covered

- Authentication
- Catalog rendering
- Backend domain logic through Go tests
- Existing backend unit suite health, because several tests need repair before they can serve as a strict quality gate

### Planned for Assignment 2

- Stable seeded QA accounts
- Deeper API coverage
- Critical path E2E scenarios for cart, checkout, and orders
- Execution metrics tracked across repeated runs
