import { sendEmail } from "../server/services/email";

function ProductDesign() {
  return (
    <div>
      <div>Hi!</div>
      <br />
      <div>
        Thank you so much for downloading Elizabeth&apos;s Declassified Guide to
        Product Design! In case you lose the link, you can find it{" "}
        <a href="https://lalizlabeth.notion.site/Elizabeth-s-Declassified-Guide-to-Product-Design-6238679950f24423aea6edd5d10bf25f?pvs=74">
          here
        </a>
        . Please reach out if you have any additional questions or feedback.
      </div>
      <br />
      <div>Good luck with your design journey!</div>
      <div>Elizabeth</div>
      <br />
      <div>
        p.s. If you&apos;re interested, I&apos;m working on a course called The
        Art of Visual Design. Learn more{" "}
        <a href="https://www.artofvisualdesign.com/">here</a> ✨
      </div>
    </div>
  );
}

export async function sendProductDesign(email: string) {
  await sendEmail({
    to: email,
    subject:
      "💖 Thanks for downloading Elizabeth's Declassified Guide to Product Design!",
    element: <ProductDesign />,
  });
}
