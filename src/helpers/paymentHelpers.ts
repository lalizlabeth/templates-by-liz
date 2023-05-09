import { env } from "~/env.mjs";

export function getTripPlannerPaymentLink() {
  const environment = env.NODE_ENV
  if (environment === "production") {
    return "https://buy.stripe.com/6oEeWQ0oY3Wf7163cd"
  }
  return "https://buy.stripe.com/test_eVa29p95HbEy7Is6op"
}

export function getPortfolioGuidePaymentLink() {
  const environment = env.NODE_ENV
  if (environment === "production") {
    return "https://buy.stripe.com/dR6160b3C78r5X2eUW"
  }
  return "https://buy.stripe.com/test_4gwg0feq1cIC8Mw5km"
}
