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
              <Link href="/trip">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate trip planning template</h2>
                  <p>Make the most out of every second of your vacation.</p>
                </div>
                <h2 className={styles.templatePrice}>$9</h2>
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
              <Link href="https://lalizlabeth.notion.site/The-Ultimate-Bucket-List-Template-53b802e1d1964926b36355cea6ac6efd">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate bucket list template</h2>
                  <p>
                    {
                      "Need a date or besties night out idea? Track your bucket list items for your city!"
                    }
                  </p>
                </div>
                <h2 className={styles.templatePrice}>FREE</h2>
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
