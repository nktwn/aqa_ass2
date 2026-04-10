# Assignment 2 Metrics Report

## Source of metrics

Metrics were generated on 2026-04-10 from real Playwright executions and then materialized with `npm run qa:metrics`.

Source files:

- `logs/smoke-report.json`
- `logs/critical-report.json`
- `logs/regression-report.json`
- `logs/assignment2-metrics-summary.json`

## Suite-level result summary

| Suite | Executed tests | Passed | Failed | Skipped | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Smoke | 9 | 8 | 0 | 1 | One live backend smoke remained skipped because API stack was not enabled |
| Critical | 15 | 12 | 0 | 3 | Three live API critical tests were environment-gated |
| Regression | 7 | 6 | 0 | 1 | One positive live auth regression test was environment-gated |

## High-risk automation coverage

See `qa-docs/tables/automation-coverage.csv`.

Headline values:

- Auth: 95%
- Catalog: 85%
- Cart: 90%
- Checkout: 80%
- Orders: 75%

## Execution-time summary

See `qa-docs/tables/execution-time.csv`.

Key result:

- Smoke gate duration: `23731 ms`
- Fastest high-risk module in current run: Order lifecycle at `2.80s` total
- Slowest high-risk module in current run: Authentication and authorization at `16.01s` total

## Defects vs expected risk

See `qa-docs/tables/defects-vs-risk.csv`.

Current Assignment 2 execution result:

- No blocking automated defects remained in the final verified run
- Defect count for all five high-risk modules: `0`
- Status for all five high-risk modules: `Pass`

## Important interpretation note

- UI metrics are based on deterministic frontend verification with a controlled QA-safe mock API layer.
- Live backend API tests are implemented but were skipped in this run because `QA_RUN_API_TESTS=false`.
- Skipped live API cases are preserved in logs for transparency rather than hidden.
