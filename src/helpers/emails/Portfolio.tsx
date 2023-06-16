import { sendEmail } from "../server/services/email"

function Portfolio(props: { name: string }) {
  const { name } = props

  return (
    <div>
      Hi {name}!
      <br />
      Thank you for purchasing Elizabeth's porfolio guide :)
    </div>
  )
}

export async function sendPortfolioEmail(name: string, email: string) {
  await sendEmail({
    to: email,
    subject: "Thank you for your purchase",
    element: <Portfolio name={name} />
  })
}
