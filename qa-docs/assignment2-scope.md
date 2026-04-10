# Assignment 2 Automation Scope

## Objective

Assignment 2 extends the existing Assignment 1 QA baseline without replacing its structure. The selected automation scope stays aligned with the Assignment 1 risk assessment and targets the highest-risk ecommerce path first.

## Confirmed high-risk modules reused from Assignment 1

1. Authentication and authorization
2. Cart management
3. Checkout and payment initiation
4. Order lifecycle
5. Product catalog and listing

## Assignment 2 automation scope

| Module / Feature | High-risk function | Priority | Expected outcome | Coverage layer |
| --- | --- | --- | --- | --- |
| Authentication and authorization | Valid login | P1 | Known QA-safe user can authenticate and reach the storefront | UI |
| Authentication and authorization | Invalid login | P1 | Wrong credentials are rejected with visible error feedback | UI + API |
| Authentication and authorization | Protected route access | P1 | Anonymous user is redirected away from `/cart` and `/orders` | UI |
| Authentication and authorization | Admin route protection | P1 | Non-admin user is redirected from `/admin/products` | UI |
| Product catalog and listing | Catalog rendering | P1 | Catalog page loads products and total count | UI + API |
| Product catalog and listing | Search and detail entry | P1 | Search narrows result list and user can open product detail page | UI |
| Cart management | Add item to cart | P1 | Authenticated user adds product from detail page into cart | UI |
| Cart management | Update and clear cart | P1 | User can increment quantity and empty the cart | UI |
| Checkout and payment initiation | Address validation | P1 | Checkout blocks payment-link creation until address exists | UI |
| Checkout and payment initiation | Payment-link preparation | P1 | Valid cart plus saved address returns a test payment link | UI |
| Order lifecycle | Order visibility | P1 | Orders page shows created or existing order history | UI |
| Order lifecycle | Order cancellation | P1 | Customer can cancel pending order in visible order list | UI |
| API baseline | Health / auth / cart / catalog validation | P2 | Public and protected endpoints return expected status codes | API |

## Coverage strategy

- UI coverage uses Playwright against the real Next.js frontend and controlled QA-safe API mocks to keep tests deterministic and reproducible.
- API coverage uses Playwright API tests for live backend validation when the backend stack is running.
- Live API positive login remains environment-gated through `QA_RUN_API_TESTS`, `QA_API_LOGIN_PHONE`, and `QA_API_LOGIN_PASSWORD`.

## Scope limitations

- Full payment provider interaction is not executed against a real external processor in this assignment run.
- Live backend API regression is implemented but intentionally skipped unless the backend stack is started.
- Assignment 2 prioritizes stable automation for the critical revenue path before expanding to favorites, notifications, contracts, and admin CRUD depth.
