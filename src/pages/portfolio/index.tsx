import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import { getPortfolioGuidePaymentLink } from "~/helpers/paymentHelpers";

interface HomeProps {
  paymentLink: string;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Elizabeth&apos;s portfolio guide | UX &amp; product design
        </title>
        <meta
          name="description"
          content="Everything you need to know about creating your UX or product design portfolio!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.templatesbyliz.com/portfolio"
        />

        <meta
          name="twitter:title"
          content="Elizabeth's portfolio guide | UX & product design"
        />
        <meta
          name="twitter:description"
          content="Everything you need to know about creating your UX or product design portfolio!"
        />
        <meta name="twitter:site" content="@lalizlabeth"></meta>
        <meta
          name="twitter:image"
          content="https://www.templatesbyliz.com/og-images/portfolio.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.templatesbyliz.com/og-images/portfolio.png"
        />
        <meta
          property="og:title"
          content="Elizabeth's portfolio guide | UX & product design"
        />
        <meta
          property="og:description"
          content="Everything you need to know about creating your UX or product design portfolio!"
        />
        <meta
          name="keywords"
          content="notion templates, notion, ux design, product design, portfolio, portfolio guide, elizabeth's portfolio guide, ux portfolio, product design portfolio, case studies, elizabeth lin, lalizlabeth, elizabeth notion templates"
        />
        <link rel="icon" href="/favicon-general.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <video
              className={styles.video}
              playsInline
              controls
              width="100%"
              poster="/portfolio/placeholder.png"
              style={{ borderRadius: 10, border: "1px solid black" }}
            >
              <source src="/portfolio/intro.mp4" type="video/mp4"></source>
            </video>
            <div className={styles.headerText}>
              <h1 className={styles.headingLarge}>
                Elizabeth&apos;s portfolio guide
              </h1>
              <h3 className={styles.headingSmall}>
                For UX &amp; product designers
              </h3>
              <p className={styles.bodyText}>
                Actionable and honest advice from a designer who&apos;s reviewed
                &#40;and rejected 🫠&#41; thousands of portfolios during her
                career. Learn how you can make your portfolio stand out in a sea
                of hundreds of applications!
              </p>
            </div>
            <a href={props.paymentLink} className={styles.btn}>
              Purchase for $20!
            </a>
          </header>
          <section className={styles.section}>
            <h2 className={styles.headingMedium}>Why me?</h2>
            <p className={styles.bodyText}>
              {
                "I’ve been coaching entry-level designers on their portfolios for more than 10 years! At this point, someone’s portfolio is almost always open in my browser waiting for a review. "
              }
            </p>
            <ol className={styles.list}>
              <li className={styles.listItem}>
                <strong>{"👀 I’ve looked at lots of portfolios."}</strong>
                {
                  " In previous roles, I’ve always been in charge of reviewing portfolios before the initial phone screen. I have looked at over 1,000 portfolios for internships, entry-level, and senior designer positions. I know the bar and who you are competing with. "
                }
              </li>
              <li className={styles.listItem}>
                <strong>🤓 I look at a lot of entry-level portfolios.</strong> I
                wrote about my experience choosing a product design intern out
                of 400 applications{" "}
                <a
                  className={styles.link}
                  href="https://designisaparty.com/creating-opportunities/"
                >
                  here
                </a>
                .
              </li>
              <li className={styles.listItem}>
                <strong>😇 I have a good portfolio.</strong> My portfolio is
                randomly featured on the internet. You can find it{" "}
                <a
                  className={styles.link}
                  href="https://www.bestfolios.com/portfolio/elizabethlin"
                >
                  here
                </a>{" "}
                and{" "}
                <a
                  className={styles.link}
                  href="https://careerfoundry.com/en/blog/ux-design/ux-portfolio-examples-inspiration/"
                >
                  here
                </a>{" "}
                and{" "}
                <a
                  className={styles.link}
                  href="https://medium.com/@ux-notes/building-your-ui-ux-design-portfolio-945404ef3652"
                >
                  here
                </a>
                . &#40;Heads up that I have not updated my portfolio in 3 years
                🤭.&#41;
              </li>
              <li className={styles.listItem}>
                <strong>😈 I have a high bar and will be honest.</strong>{" "}
                Designers are <em>annoying</em> particular and will notice the
                little details. They might get bothered by a font choice or a
                typo on your page. The portfolio guide shares the most common
                mistakes I see.
              </li>
            </ol>
            <p className={styles.bodyText}>
              Still not sure? Check out my portfolio advice and reviews{" "}
              <a
                className={styles.link}
                href="https://www.tiktok.com/@lalizlabeth"
              >
                on TikTok
              </a>
              .
            </p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.headingMedium}>
              What&apos;s included in the guide?
            </h2>
            <p className={styles.bodyText}>
              14 chapters of written content + some bonus material!
            </p>
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingXsmall}>📕 Chapters</h5>
                <ul className={styles.orderedList}>
                  <li>The portfolio review process</li>
                  <li>Elizabeth&apos;s portfolio principles</li>
                  <li>Designing your portfolio</li>
                  <li>Portfolio information architecture</li>
                  <li>Ways to make an impression</li>
                  <li>Choosing projects</li>
                  <li>Case study principles</li>
                  <li>Case study tips &amp; tricks</li>
                  <li>Case study red flags</li>
                  <li>Project screenshots</li>
                  <li>Help! I need project ideas</li>
                  <li>Introducing yourself</li>
                  <li>Writing the about page</li>
                  <li>Finding your design archetype</li>
                </ul>
              </div>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingXsmall}>✨ Bonus content</h5>
                <ul className={styles.orderedList}>
                  <li>Case study planning worksheet</li>
                  <li>Portfolio checklist</li>
                  <li>Case studies checklist</li>
                  <li>Visual design polish checklist</li>
                  <li>Portfolio frequently asked questions</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.sectionCentered}>
            <div className={styles.headerText}>
              <h2 className={styles.headingMediumLight}>
                Make your portfolio stand out in a sea of hundreds of
                applications.
              </h2>
              <p className={styles.bodyText}>
                Purchasing the guide helps me continue to be a design educator
                full-time! Thank you for your support 💕
              </p>
            </div>
            <a href={props.paymentLink} className={styles.btn}>
              Purchase for $20!
            </a>
          </section>
          <section className={styles.footer}>
            {" "}
            <Link className={styles.link} href="/">
              Check out my other Notion templates
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      paymentLink: getPortfolioGuidePaymentLink(),
    },
  };
}
