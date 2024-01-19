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
        <title>Elizabeth&apos;s job tracker</title>
        <meta
          name="description"
          content="A job tracker that focuses on your dreams"
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
            {" "}
            <video
              className={styles.video}
              playsInline
              autoPlay
              width="100%"
              poster="/job-tracker/job-tracker-still.png"
              style={{ borderRadius: 10 }}
            >
              <source
                src="/job-tracker/job-tracker.mp4"
                type="video/mp4"
              ></source>
            </video>
            <div className={styles.headerText}>
              <h1 className={styles.headingLarge}>
                Elizabeth&apos;s job tracker
              </h1>
              <p className={styles.bodyText}>
                This is the Notion job tracker I used when I was searching for a
                new job ✨! I know there are a bajillion job trackers out there
                already, but I think this one is a little unique.
              </p>
              <p className={styles.bodyText}>
                I included a special area to help you figure out what your dream
                job looks like. How do you figure out if a job is a good fit?
                What specific aspects are you prioritizing in your next role?
              </p>
              <p className={styles.bodyText}>
                Good luck on your job search and I hope this template will help
                organize some of the chaos during your job search!
              </p>
            </div>
            <a
              href="https://lalizlabeth.notion.site/Elizabeth-s-Job-Tracker-18783944e4b84f929b19dea0265df5c4?pvs=4"
              className={styles.btn}
            >
              Use the template!
            </a>
          </header>

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
