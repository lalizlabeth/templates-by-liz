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
        <link rel="icon" href="/favicon.ico" />
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
              <a href="/trip">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate trip planning template</h2>
                  <p>Make the most out of every second of your vacation.</p>
                </div>
                <h2 className={styles.templatePrice}>$9</h2>
              </a>
            </li>
            <li className={styles.template}>
              <a href="www.bridezillaproof.com">
                <div className={styles.templateIcon}></div>
                <div className={styles.templateDescription}>
                  <h2>The ultimate wedding planning template</h2>
                  <p>
                    Be so prepared your in-laws will think you’ve already been
                    married before..
                  </p>
                </div>
                <h2 className={styles.templatePrice}>$39</h2>
              </a>
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
