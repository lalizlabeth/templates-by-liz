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
    return "https://buy.stripe.com/6oEcOIc7G1O77164gk"
  }
  return "https://buy.stripe.com/test_14k4hx95HfUOe6QdQT"
}

export function getProductDesignPaymentLink() {
  const environment = env.NODE_ENV
  if (environment === "production") {
    return "https://buy.stripe.com/00g5mg6Nm8cvclq8wB"
  }
  return "https://buy.stripe.com/test_5kAdS74Pr0ZU6Eo7sw"
}
