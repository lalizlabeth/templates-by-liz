import { sendEmail } from "../server/services/email"

function Portfolio(props: { name: string }) {
  const { name } = props

  return (
    <div>
      <div>
        <Greeting name={name} />
      </div>
      <br />
      <div>
        Thank you so much for downloading the portfolio guide! In case you lose the link, you can find it <a href="https://lalizlabeth.notion.site/Elizabeth-s-portfolio-guide-019cc8e19e5246e199bd33029e14c6fb">here</a>. When you’re done, I would love to see a before and after of your portfolio after you complete this guide. Please don’t hesitate to reach out if you have any additional questions or feedback.
      </div>
      <br />
      <div>
        Good luck with your portfolio!
      </div>
      <div>
        Elizabeth
      </div>
      <div>
        <a href="https://twitter.com/lalizlabeth">@lalizlabeth</a>
      </div>
      <br />
      <div>
        p.s. If you’re interested, I&apos;m working on a course called The art of visual design. Learn more <a href="https://www.artofvisualdesign.com/">here</a> ✨
      </div>
    </div>
  )
}

function Greeting(props: { name: string }) {
  if (props.name) {
    return (
      <>
        Hi {props.name}!
      </>
    )
  }
  return (
    <>
      Hi!
    </>
  )
}

export async function sendPortfolioEmail(name: string, email: string) {
  await sendEmail({
    to: email,
    subject: "💖 Thanks for downloading Elizabeth's portfolio guide!",
    element: <Portfolio name={name} />
  })
}
