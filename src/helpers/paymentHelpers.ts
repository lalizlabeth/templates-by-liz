import { env } from "~/env.mjs";

export function getTripPlannerPaymentLink() {
  const environment = env.NODE_ENV
  if (environment === "production") {
    return "https://buy.stripe.com/6oEeWQ0oY3Wf7163cd"
  }
  return "https://buy.stripe.com/test_eVa29p95HbEy7Is6op"
}
