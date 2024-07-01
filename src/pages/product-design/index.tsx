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
              poster="/product-design/placeholder.png"
              style={{ borderRadius: 10, border: "1px solid black" }}
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
              </h3>
              <p className={styles.bodyText}>
                {
                  "There is an overwhelming amount of advice circulating the internet for aspiring product designers. It can be hard to know where to even start. Whose advice should I listen to? How do I know if product design is a good fit for me? Should I sign up for a bootcamp? What should I learn first?"
                }
              </p>
              <p className={styles.bodyText}>
                {
                  "Over the past decade, I’ve mentored hundreds of product designers to land their first product design role! I used my experience to craft a guide to be your companion 👭 throughout your product design journey!"
                }
              </p>

              <p className={styles.bodyText}>
                {
                  " Whether you're just beginning your product design journey or actively seeking your first role, this guide will help point you in the right direction!"
                }
              </p>
            </div>
            <a href={props.paymentLink} className={styles.btn}>
              Purchase for $50
            </a>
          </header>

          <section className={styles.section}>
            <h2 className={styles.headingMedium}>A little preview</h2>
            <p className={styles.bodyText}>
              {
                'One of my favorite chapters from the book "Bootcamps, grad school, & certificates, oh my!" is published online for free! I dive into my honest thoughts on the variety of ways to learn design. Read the full chapter on'
              }{" "}
              <a className={styles.link} href="">
                my blog
              </a>
              .
            </p>
            <img src="/product-design/preview.png"></img>
          </section>
          <section className={styles.section}>
            <h2 className={styles.headingMedium}>
              What&apos;s included in the guide?
            </h2>
            <p className={styles.bodyText}>
              A digital guide with 24 chapters of written content + some bonus
              material!
            </p>
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📕 Introduction</h5>
                <p className={styles.bodyText}>
                  {
                    "What do product designers do? Many people have misconceptions about what product design is and is not. How do you know if product design might be a good fit for your interests?"
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>What is product design?</li>
                  <li>Product design is not...</li>
                  <li>Should I become a product designer?</li>
                </ol>
              </div>
            </div>{" "}
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📙 The skills</h5>
                <p className={styles.bodyText}>
                  {
                    "What skills do product designers need? How do I know that I'm ready for the job?"
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
            </div>
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📒 How to learn</h5>{" "}
                <p className={styles.bodyText}>
                  {
                    "What is the best way to learn product design? Should I join a bootcamp or apply to grad school? Here, I go into ways you can learn product design in detail."
                  }
                </p>
                <ol className={styles.orderedList}>
                  <li>Elizabeth's principles for learning</li>
                  <li>Design something</li>
                  <li>Ways to learn</li>
                  <li>Bootcamps, grad school, and certificates, oh my!</li>
                  <li>How do I get better at X?</li>
                  <li>Getting projects</li>
                </ol>
              </div>
            </div>{" "}
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>📗 The job search</h5>{" "}
                <p className={styles.bodyText}>
                  {
                    "Now that you're ready, how do you land your first design job? How can you prepare yourself for the interview process?"
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
            </div>
            <div className={styles.callout}>
              <div className={styles.calloutSection}>
                <h5 className={styles.headingSmall}>✨ Bonus goodies</h5>
                <p className={styles.bodyText}>
                  {"Plus, a couple templates to help you along the way!"}
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
