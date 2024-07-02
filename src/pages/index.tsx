import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Templates by Liz</title>
        <meta
          name="description"
          content="Ultimate Notion Templates for people who are everything, everywhere all at once."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.templatesbyliz.com" />

        <meta name="twitter:title" content="Templates by Liz" />
        <meta
          name="twitter:description"
          content="Ultimate Notion Templates for people who are everything, everywhere all at once."
        />
        <meta name="twitter:site" content="@lalizlabeth"></meta>
        <meta
          name="twitter:image"
          content="https://www.templatesbyliz.com/og-images/home.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.templatesbyliz.com/og-images/home.png"
        />
        <meta property="og:title" content="Templates by Liz" />
        <meta
          property="og:description"
          content="Ultimate Notion Templates for people who are everything, everywhere all at once."
        />
        <meta
          name="keywords"
          content="notion templates, notion, wedding planning template, wedding planning notion template, travel notion template, travel planner, travel planning, travel planning template, ultimate notion templates, elizabeth lin, lalizlabeth, elizabeth notion templates"
        />
        <link rel="icon" href="/favicon-general.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <header>
            <h1>Templates by Liz</h1>
            <h3>
              <strong>Ultimate Notion Templates</strong> for people who are
              everything, everywhere all at once.
            </h3>
          </header>
          <ul className={styles.templates}>
            <li className={styles.template}>
              <Link href="/product-design">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>Elizabeth&apos;s declassified guide to product design</h2>
                  <p>
                    My honest advice on how to break into the design industry!
                  </p>
                </div>
                <h2 className={styles.templatePrice}>$50</h2>
              </Link>
            </li>{" "}
            <li className={styles.template}>
              <Link href="/portfolio">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>Elizabeth&apos;s portfolio guide</h2>
                  <p>
                    Everything you need to know about creating your UX or
                    product design portfolio!
                  </p>
                </div>
                <h2 className={styles.templatePrice}>$25</h2>
              </Link>
            </li>{" "}
            <li className={styles.template}>
              <Link href="/job-tracker">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>Elizabeth&apos;s job tracker</h2>
                  <p>
                    A job tracker to help you stay organized during your job
                    search!
                  </p>
                </div>
                <h2 className={styles.templatePrice}>FREE</h2>
              </Link>
            </li>
            <li className={styles.template}>
              <Link href="/wedding">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate wedding planning template</h2>
                  <p>
                    {
                      " Be so prepared your in-laws will think you’ve already been married before. "
                    }
                  </p>
                </div>
                <h2 className={styles.templatePrice}>$39</h2>
              </Link>
            </li>
            <li className={styles.template}>
              <Link href="/trip">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate trip planning template</h2>
                  <p>Make the most out of every second of your vacation.</p>
                </div>
                <h2 className={styles.templatePrice}>$9</h2>
              </Link>
            </li>
          </ul>
          <footer>
            <h3>
              Interested in a template for something else? Email your ideas to{" "}
              <strong>elizabethylin@gmail.com</strong>.
            </h3>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
