# Assignment 2 Quality Gates

## Rationale

Quality gates were defined from the actual Assignment 2 automation structure instead of arbitrary targets. The suite now contains stable UI critical-path coverage for all five high-risk modules and optional live API checks for environments where backend infrastructure is available.

## Implemented gates

| Quality Gate ID | Metric / Criterion | Threshold / Requirement | Importance | Notes / Rationale |
| --- | --- | --- | --- | --- |
| QG-001 | Critical-path pass rate | 100% of `@critical` UI flows must pass | Blocking | Release-critical auth, cart, checkout, order, and catalog flows cannot regress silently |
| QG-002 | Smoke pass rate | 100% of executed `@smoke` tests must pass | Blocking | Smoke suite is the earliest CI signal |
| QG-003 | High-risk module coverage | All 5 high-risk modules must be represented in `@critical` suite | Blocking | Direct reuse of Assignment 1 risk model |
| QG-004 | Smoke execution time | Smoke suite must finish in `<= 180s` | Blocking | Keeps PR verification practical |
| QG-005 | Zero critical defects | `criticalFailures = 0` in generated gate summary | Blocking | Explicit alignment with assignment requirement |
| QG-006 | Frontend lint | `frontend` lint step must pass | Blocking in CI | Static signal already present in project |
| QG-007 | Backend Go tests | Informational baseline only | Informational | Existing repository baseline is not fully green and is documented from Assignment 1 |
| QG-008 | Live API suite | Optional, enabled by `QA_RUN_API_TESTS=true` | Informational unless environment is prepared | Prevents false negatives when backend stack is unavailable |

## Latest measured result

Measured on 2026-04-10 from `logs/quality-gates-summary.json`:

- Smoke pass rate: `1.00`
- Smoke duration: `23731 ms`
- Critical failures: `0`
- Critical modules covered: `5`
- Gate status: `PASS`

## Enforcement mechanism

- CI executes smoke, critical, and regression JSON-report runs.
- `scripts/check-quality-gates.mjs` reads the generated reports and exits with non-zero status if any blocking gate is violated.
- Artifacts remain uploadable even on failure for reproducibility and diagnosis.
