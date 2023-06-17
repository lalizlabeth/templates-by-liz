import { env } from "~/env.mjs";
import { renderToString } from 'react-dom/server';
import { createTransport } from "nodemailer"
import { ReactElement } from "react";

const transport = createTransport(env.EMAIL_SERVER)

type SendEmailArgs = {
  to: string
  subject: string
  element: ReactElement
}

export async function sendEmail(args: SendEmailArgs) {
  const { to, subject, element } = args
  const html = renderToString(element)

  const result = await transport.sendMail({
    to,
    from: {
      name: "Elizabeth",
      address: "elizabeth@dumpling.designisaparty.com"
    },
    subject,
    replyTo: "elizabethylin@gmail.com",
    text: "",
    html,
  })
  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
  }
}
