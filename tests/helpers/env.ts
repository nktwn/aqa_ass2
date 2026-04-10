import dotenv from "dotenv";

dotenv.config({ path: ".env.qa" });

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const qaBaseUrl = trimTrailingSlash(
  process.env.QA_BASE_URL || "http://127.0.0.1:3000",
);

export const qaApiBaseUrl = trimTrailingSlash(
  process.env.QA_API_BASE_URL || "http://127.0.0.1:8080",
);

export const qaApiHealthPath = process.env.QA_API_HEALTH_PATH || "/metrics";

export const shouldRunApiSmoke = process.env.QA_RUN_API_SMOKE === "true";

