# Assignment 2 Test Execution Log

## Executed on 2026-04-10

Commands used for the final verified run:

- `npm --prefix frontend run dev -- --hostname 127.0.0.1`
- `npm run qa:test:smoke:json`
- `npm run qa:test:critical:json`
- `npm run qa:test:regression:json`
- `npm run qa:metrics`
- `npm run qa:quality-gates`

## Result summary

- Smoke suite passed with one intentional live-API skip
- Critical suite passed with three intentional live-API skips
- Regression suite passed with one intentional live-API skip
- Quality gates passed

## Detailed log

The detailed case-level log is exported to `qa-docs/tables/test-execution-log.csv`.

## Observed constraints

- Frontend verification required the local Next.js dev server to run on `http://127.0.0.1:3000`.
- Live API-positive checks were not executed because the backend stack was not started during the final local verification pass.
