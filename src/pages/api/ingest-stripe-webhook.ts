import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from '~/env.mjs'
import { buffer } from 'micro'
import { handleStripeEvent, stripe } from '~/helpers/server/services/stripe'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers["stripe-signature"]
  if (!signature) {
    throw new Error("Invalid signature.")
  }
  try {
    const body = await buffer(req)
    const event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET)
    await handleStripeEvent(event)
  } catch (error) {
    console.log("Webhook error", error)
    res.status(400).send(`Webhook Error`);
    return
  }

  res.status(200).json({ status: 'Success' })
}

