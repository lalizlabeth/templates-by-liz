import { sendEmail } from "../server/services/email";

function Portfolio() {
  return (
    <div>
      <div>Hi!</div>
      <br />
      <div>
        Thank you so much for downloading Elizabeth's Declassified Guide to
        Product Design! In case you lose the link, you can find it{" "}
        <a href="https://lalizlabeth.notion.site/Elizabeth-s-Declassified-Guide-to-Product-Design-6238679950f24423aea6edd5d10bf25f?pvs=74">
          here
        </a>
        . Please don’t hesitate to reach out if you have any additional
        questions or feedback.
      </div>
      <br />
      <div>Good luck with your design journey!</div>
      <div>Elizabeth</div>
      <div>
        <a href="https://twitter.com/lalizlabeth">@lalizlabeth</a>
      </div>
      <br />
      <div>
        p.s. If you’re interested, I&apos;m working on a course called The art
        of visual design. Learn more{" "}
        <a href="https://www.artofvisualdesign.com/">here</a> ✨
      </div>
    </div>
  );
}

export async function sendPortfolioEmail(email: string) {
  await sendEmail({
    to: email,
    subject: "💖 Thanks for downloading Elizabeth's portfolio guide!",
    element: <Portfolio />,
  });
}
