# Assignment 2 Metrics Visualization

## Generated visual artifacts

The following SVG charts were generated directly from the latest metrics data:

| Visualization | File | Source |
| --- | --- | --- |
| Automation coverage per module | `evidence/charts/automation-coverage.svg` | `qa-docs/tables/automation-coverage.csv` |
| Execution time per module | `evidence/charts/execution-time.svg` | `qa-docs/tables/execution-time.csv` |
| Defects vs expected risk | `evidence/charts/defects-vs-risk.svg` | `qa-docs/tables/defects-vs-risk.csv` |

## Recreation command

Run:

`npm run qa:metrics`

This command rebuilds:

- `qa-docs/tables/automation-coverage.csv`
- `qa-docs/tables/execution-time.csv`
- `qa-docs/tables/defects-vs-risk.csv`
- `qa-docs/tables/test-execution-log.csv`
- `evidence/charts/*.svg`

## Academic-use note

SVG output is intentionally lightweight and version-friendly, making it suitable for thesis appendices, methodology evidence, and later research-paper figures.
