import Head from "next/head";
import { type NextPage } from "next";
import styles from "./index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Ultimate Wedding Planning Template | Notion Template</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.bridezillaproof.com/" />

        <meta
          name="twitter:title"
          content="The Ultimate Wedding Planning Template"
        />
        <meta
          name="twitter:description"
          content="A stress-free-ish wedding planning Notion template by @lalizlabeth."
        />
        <meta name="twitter:site" content="@lalizlabeth"></meta>
        <meta
          name="twitter:image"
          content="https://www.bridezillaproof.com/og-image.png?1234"
        />
        <meta
          name="description"
          content="A stress-free-ish wedding planning Notion template by @lalizlabeth. For the price of one slice of wedding cake, tie the knot without a thought!
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.bridezillaproof.com/og-image.png"
        />
        <meta
          property="og:title"
          content="The Ultimate Wedding Planning Template"
        />
        <meta
          property="og:description"
          content="A stress-free-ish wedding planning Notion template by @lalizlabeth."
        />
        <meta
          name="keywords"
          content="notion, notion template, wedding template, wedding planner, wedding planning, wedding notion template"
        />
        <link rel="icon" href="/wedding/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Lora:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <section className={styles.header}>
            <h3 className={styles.headingSmall}>
              ☞ Bridezilla-proof since 2022
            </h3>
            <h1 className={styles.headingxLarge}>
              The *<em>Ultimate</em>* Wedding Planning Template.
            </h1>
            <p className={styles.bodyText}>
              A stress-free-ish guide powered by Notion
            </p>
            <button className={styles.btn}>
              <a href="https://checkout.stripe.com/c/pay/cs_live_a1WHSUb1KdZAbSmSumYZh2iQF17ksfQ4Wu1uArMGYCbkzD3OVWOIgRfqAi#fidkdWxOYHwnPyd1blppbHNgWmRQU2w8TURLV2M3U25McDBydUE3UDVHXCcpJ3VpbGtuQH11anZgYUxhJz8nPXJIPEZyY29WPGJ%2FYXVwPEREJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycitnd2xhYH9saWlkdXdqamMrZmpoKid4JSUl">
                * Download for $39 *
              </a>
            </button>
          </section>

          <section className={styles.feature}>
            <div className={styles.featureText}>
              <h2 className={styles.headingMedium}>☞ </h2>
              <h2 className={styles.headingMedium}>
                Be so prepared that your in-laws will think you&apos;ve already
                been married.
              </h2>
              <p className={styles.bodyText}>
                With this Notion template, you&apos;ll have one source of truth
                for all your wedding planning! Your budget tracker, guest list,
                and tasks will all live in one place.
              </p>
            </div>
            <div className={styles.featureImage}>
              <video autoPlay muted playsInline>
                <source src="/wedding/video-3.mp4" type="video/mp4"></source>
              </video>
            </div>
          </section>
          <section className={styles.featureList}>
            <h2 className={styles.headingMedium}>
              What does TUWPT<span className={styles.highlight}>*</span>{" "}
              include?
            </h2>
            <ul className={styles.featureListItems}>
              <li>Detailed tasks with tips and a suggested timeline</li>
              <li>A guest list management system</li>
              <li>An easy-to-use budget & spending tracker</li>
              <li>A tool to organize & select your vendors</li>
              <li>A place to store all your meeting notes</li>
              <li>Tips for saving money every step of the way</li>
            </ul>
            <p className={styles.caption}>
              <span className={styles.highlight}>*</span>The Ultimate Wedding
              Planning Template
            </p>
          </section>
          <section className={styles.feature}>
            <div className={styles.featureText}>
              <h2 className={styles.headingMedium}>☞ </h2>
              <h2 className={styles.headingMedium}>
                Detailed tasks make each step of the planning process easy &
                breezy.
              </h2>
              <p className={styles.bodyText}>
                Plan your perfect <strong>* big day *</strong>. We guarantee
                that you won&apos;t have to see any impossible-to-read wedding
                script fonts!
              </p>
            </div>
            <div className={styles.featureImage}>
              <img src="/wedding/image-test.png" />
            </div>
          </section>

          <section className={styles.featureCentered}>
            <h1 className={styles.headingLarge}>
              Yes, it&apos;s totally worth it!
            </h1>
            <p className={styles.bodyText}>
              For the price of one slice of wedding cake, tie the knot without a
              thought!
            </p>
            <button className={styles.btn} style={{ marginTop: 48 }}>
              <a href="https://checkout.stripe.com/c/pay/cs_live_a1WHSUb1KdZAbSmSumYZh2iQF17ksfQ4Wu1uArMGYCbkzD3OVWOIgRfqAi#fidkdWxOYHwnPyd1blppbHNgWmRQU2w8TURLV2M3U25McDBydUE3UDVHXCcpJ3VpbGtuQH11anZgYUxhJz8nPXJIPEZyY29WPGJ%2FYXVwPEREJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnJycitnd2xhYH9saWlkdXdqamMrZmpoKid4JSUl">
                * Download for $39 *
              </a>
            </button>
          </section>

          <section className={styles.featureBio}>
            <div className={styles.featureImage}>
              <img src="/wedding/liz-varun.png" />
            </div>
            <div className={styles.featureText}>
              <h2 className={styles.headingMedium}>Who am I?</h2>
              <p className={styles.bodyText}>
                My name is Elizabeth and I planned a successful wedding using
                this template in the Bay Area in 2022! I work as a product
                designer during the day and love all things related to
                documentation and organization. I&apos;m an Aries Sun and my
                favorite color is pink.
              </p>
              <p className={styles.bodyText}>
                You can find me on Twitter at{" "}
                <a href="https://twitter.com/@lalizlabeth">@lalizlabeth</a>.
              </p>
            </div>
          </section>

          <section
            className={styles.featureCentered}
            style={{ borderBottom: "none" }}
          >
            <h2 className={styles.headingMedium} style={{ marginBottom: 20 }}>
              Interested in other templates?
            </h2>
            <Link className={styles.btn} href="/">
              check out more templates by liz
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
