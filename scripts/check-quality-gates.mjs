import fs from "node:fs";
import path from "node:path";

const logsDir = path.join(process.cwd(), "logs");
const reportFiles = {
  smoke: path.join(logsDir, "smoke-report.json"),
  critical: path.join(logsDir, "critical-report.json"),
};

function collectSpecs(node, parentTitle = "") {
  const currentTitle = [parentTitle, node.title].filter(Boolean).join(" > ");
  const specs = [];

  for (const suite of node.suites ?? []) {
    specs.push(...collectSpecs(suite, currentTitle));
  }

  for (const spec of node.specs ?? []) {
    const fullTitle = [currentTitle, spec.title].filter(Boolean).join(" > ");
    for (const test of spec.tests ?? []) {
      const result = test.results?.[test.results.length - 1] ?? {};
      specs.push({
        title: fullTitle,
        status: result.status ?? "unknown",
        durationMs: result.duration ?? 0,
      });
    }
  }

  return specs;
}

function loadTests(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const report = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return collectSpecs(report);
}

const smokeTests = loadTests(reportFiles.smoke);
const criticalTests = loadTests(reportFiles.critical);

const criticalModules = new Set(
  criticalTests.flatMap((test) => {
    const tags = ["@auth", "@catalog", "@cart", "@checkout", "@orders"];
    return tags.filter((tag) => test.title.includes(tag));
  }),
);

const summary = {
  generatedAt: new Date().toISOString(),
  smokePassRate: smokeTests.length
    ? smokeTests.filter((test) => test.status === "passed").length /
      smokeTests.filter((test) => test.status !== "skipped").length
    : 0,
  smokeDurationMs: smokeTests.reduce((sum, test) => sum + test.durationMs, 0),
  criticalFailures: criticalTests.filter(
    (test) => test.status === "failed" || test.status === "timedOut",
  ).length,
  criticalModulesCovered: criticalModules.size,
};

const failures = [];

if (summary.smokePassRate < 1) {
  failures.push("Smoke suite must pass at 100%.");
}

if (summary.smokeDurationMs > 180000) {
  failures.push("Smoke suite must complete in 180 seconds or less.");
}

if (summary.criticalFailures > 0) {
  failures.push("Critical flows must have zero automated failures.");
}

if (summary.criticalModulesCovered < 5) {
  failures.push("Critical suite must cover all 5 high-risk modules.");
}

fs.mkdirSync(logsDir, { recursive: true });
fs.writeFileSync(
  path.join(logsDir, "quality-gates-summary.json"),
  `${JSON.stringify({ ...summary, failures }, null, 2)}\n`,
);

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`QUALITY GATE FAILED: ${failure}`);
  }
  process.exit(1);
}

console.log("Quality gates passed.");
