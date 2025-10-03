import type { SubmitError, SubmitResult } from "./types";

export async function submitApplication(
  payload: Record<string, unknown>
): Promise<SubmitResult> {
  console.log("Submitting payload:", payload);

  // Simulate latency
  await new Promise((resolve) => setTimeout(resolve, 900));

  // Simulate failure 20% of the time
  const fail = Math.random() < 0.2;
  if (fail) {
    throw { message: "SUBMIT_FAILED", status: 500 } as SubmitError;
  }

  // Return fake app ID
  return {
    id: `APP-${Date.now().toString(36).toUpperCase()}`,
  };
}
