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
        <title>Elizabeth&apos;s Declassified Product Design Guide</title>
        <meta
          name="description"
          content="My honest advice on how to break into the design industry!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.templatesbyliz.com/product-design"
        />

        <meta
          name="twitter:title"
          content="Elizabeth's Declassified Product Design Guide"
        />
        <meta
          name="twitter:description"
          content="My honest advice on how to break into the design industry!"
        />
        <meta name="twitter:site" content="@lalizlabeth"></meta>
        <meta
          name="twitter:image"
          content="https://www.templatesbyliz.com/og-images/product-design.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.templatesbyliz.com/og-images/product-design.png"
        />
        <meta
          property="og:title"
          content="Elizabeth's Declassified Product Design Guide"
        />
        <meta
          property="og:description"
          content="My honest advice on how to break into the design industry!"
        />
        <meta
          name="keywords"
          content="product design, product design guide, elizabeth's declassified guide to product design, notion templates, notion, ux design, product design, portfolio, portfolio guide, elizabeth's portfolio guide, ux portfolio, product design portfolio, case studies, elizabeth lin, lalizlabeth, elizabeth notion templates"
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
              poster="/product-design/placeholder.png"
              style={{ borderRadius: 2, border: "1px solid #21242c" }}
            >
              <source
                src="/product-design/intro-subs.mp4"
                type="video/mp4"
              ></source>
            </video>
            <div className={styles.headerText}>
              <h1 className={styles.headingLarge}>
                Elizabeth&apos;s Declassified Product Design Guide
              </h1>
              <h3 className={styles.headingSmall}>
                Digital book with 24 chapters written by yours truly 💖
              </h3>{" "}
              <a href={props.paymentLink} className={styles.btn}>
                Purchase for $50
              </a>
              <p className={styles.bodyText} style={{ marginTop: 24 }}>
                {
                  "There is an overwhelming amount of advice circulating the internet for aspiring product designers. It can be hard to know where to even start 😭. Whose advice should you listen to? How do you know if product design is a good fit for you? Should you sign up for a bootcamp? What skills should you learn first?"
                }
              </p>
              <p className={styles.bodyText}>
                {
                  "Over the past decade, I’ve mentored hundreds of product designers to land their first product design roles. I used my experience to craft a guide to be your companion 👭 throughout your product design journey!"
                }
              </p>
            </div>
          </header>

          <section className={styles.section}>
            <h2 className={styles.headingMedium}>A little preview</h2>{" "}
            <img
              className={styles.image}
              src="/product-design/preview.png"
            ></img>
            <p className={styles.bodyText}>
              {
                'If you want a little sneak peek before getting the full guide, I published one of my favorite chapters: "Bootcamps, grad school, & certificates, oh my!" I dive into my honest thoughts on the variety of ways to learn design.'
              }
            </p>{" "}
            <p className={styles.bodyText}>
              <a
                className={styles.link}
                href="https://designisaparty.com/bootcamps-ohmy/"
              >
                {"> Read the full chapter on my blog"}
              </a>
            </p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.headingMedium}>
              What&apos;s included in the guide?
            </h2>
            <img className={styles.image} src="/product-design/guide.png"></img>
            <p className={styles.bodyText}>
              {
                "You'll get access to a digital book with 24 chapters of written content plus some bonus material! Here's a chapter breakdown:"
              }
            </p>

            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📕 Introduction</h5>
                <p className={styles.bodyText}>
                  {
                    "What do product designers even do? How do I know if product design might be a good fit for my interests?"
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>What is product design?</li>
                  <li>Product design is not...</li>
                  <li>Should I become a product designer?</li>
                </ol>
              </div>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📙 The skills</h5>
                <p className={styles.bodyText}>
                  {
                    "What skills do product designers need to learn? How do I know that I'm ready for the job?"
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>A day in the life of</li>
                  <li>Designers kind of do everything</li>
                  <li>Navigating ambiguity</li>
                  <li>The tools</li>
                  <li>Am I ready?</li>
                </ol>
              </div>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📒 How to learn</h5>{" "}
                <p className={styles.bodyText}>
                  {
                    "What is the best way to learn product design? How do I improve in a specific skill area? Should I join a bootcamp or apply to grad school?"
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>{"Elizabeth's principles for learning"}</li>
                  <li>Design something</li>
                  <li>Ways to learn</li>
                  <li>Bootcamps, grad school, and certificates, oh my!</li>
                  <li>How do I get better at X?</li>
                  <li>Getting projects</li>
                </ol>
              </div>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📗 The job search</h5>{" "}
                <p className={styles.bodyText}>
                  {
                    "How can I increase my chances of landing a design job? How can I prepare myself for the interview process?"
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>I&apos;m ready! What&apos;s next?</li>
                  <li>Apply to everything</li>
                  <li>Networking 101</li>
                  <li>What company size is right for me?</li>
                  <li>The interview process</li>
                  <li>Why am I not landing the interview?</li>
                  <li>Common interview questions</li>
                  <li>The app critique</li>
                  <li>The whiteboard challenge</li>
                </ol>
              </div>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>✨ Bonus goodies</h5>
                <p className={styles.bodyText}>
                  {
                    "As a bonus, I included a couple templates to help you along the way!"
                  }
                </p>
                <ul className={styles.orderedList}>
                  <li>Job tracker template</li>
                  <li>Networking template</li>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.sectionCentered}>
            <div className={styles.headerText}>
              <h2 className={styles.headingMediumLight}>Get the guide!</h2>
              <p className={styles.bodyText}>
                Purchasing the guide helps me continue to be a design educator
                full time! Thank you for your support 💕
              </p>
            </div>
            <a href={props.paymentLink} className={styles.btn}>
              Purchase for $50!
            </a>
          </section>
          <section className={styles.footer}>
            {" "}
            <Link className={styles.link} href="/">
              {"> Check out my other Notion templates <"}
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
