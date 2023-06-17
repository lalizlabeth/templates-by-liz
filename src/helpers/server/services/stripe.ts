import Stripe from 'stripe';
import { env } from '~/env.mjs';
import { sendPortfolioEmail } from '~/helpers/emails/Portfolio';

export const stripe = new Stripe(env.STRIPE_PKEY, {
  apiVersion: "2022-11-15"
})

export async function handleStripeEvent(event: Stripe.Event) {
  if (event.type === "payment_intent.succeeded") {
    const object = event.data.object
    if (isPaymentIntent(object)) {
      await handlePaymentIntentSuccess(object)
      return
    }
    throw new Error(`Did not receive payment intent. ${JSON.stringify(object)}`)
  }
  throw new Error(`Unrecognized stripe webhook event: ${event.type}`)
}

export function isPaymentIntent(object: Stripe.Event.Data.Object): object is Stripe.PaymentIntent {
  // @ts-expect-error stripe type is poorly defined
  return object.object === "payment_intent"
}

export async function handlePaymentIntentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const { customerDetails, productIds } = await findPaidProductsForPayment(paymentIntent.id)

  const name = customerDetails?.name || ""
  // TODO
  const email = "elizabethylin@gmail.com" // customerDetails?.email || ""

  // Production portfolio guide
  if (productIds.includes("prod_NrNO3FoIeL2hSx")) {
    await sendPortfolioEmail(name, email)
  }
  // Test portfolio guide
  if (productIds.includes("prod_NrNKP9UygoUcP1")) {
    await sendPortfolioEmail(name, email)
  }
}

export async function findPaidProductsForPayment(paymentIntentId: string) {
  const sessions = await stripe.checkout.sessions.list({
    payment_intent: paymentIntentId,
    expand: ["data.line_items"],
  }).autoPagingToArray({ limit: 100 })
  const successOnly = sessions.filter(
    pi => pi.payment_status === "paid" || pi.payment_status === "no_payment_required"
  )
  const customerDetails = successOnly.find(session => session.customer_details)?.customer_details

  const productIds: string[] = []
  for (const session of successOnly) {
    if (!session.line_items?.data) {
      continue
    }
    for (const lineItem of session.line_items?.data) {
      const price = lineItem.price
      if (!price) {
        continue
      }
      const productId = getProductId(price.product)
      productIds.push(productId)
    }
  }
  return { productIds, customerDetails }
}

function getProductId(productThing: string | Stripe.Product | Stripe.DeletedProduct) {
  if (typeof productThing === "string") {
    return productThing
  }
  return productThing.id
}
