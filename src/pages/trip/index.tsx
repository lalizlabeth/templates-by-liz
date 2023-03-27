import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The ultimate trip planner template</title>
        <meta
          name="description"
          content="Make the most out of every second of your vacation!"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Syne:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <h4>✻ the ultimate notion ✻</h4>
            <h1>trip planner template</h1>
            <h4>
              includes single & multi-city templates for solo & group travel!
            </h4>
            <a
              className={styles.btn}
              href="https://checkout.stripe.com/c/pay/cs_live_a1KIrWekPdQINeS4E4obfrH4TYq9jO3up3itZz3cFgMIOt6DpUcvAUBYYd#fidkdWxOYHwnPyd1blppbHNgWmRQU2w8TURLV2M3U25McDBydUE3UDVHXCcpJ3VpbGtuQH11anZgYUxhJz8nM2pAYFJUNWpcNlJjMjQzNmZhJ3gl"
            >
              ✻ download for $9 ✻
            </a>
            <img
              alt="Template example"
              className={styles.img}
              width="100%"
              src="/trip/placeholder-image.png"
            />
          </header>
          <hr className={styles.divider}></hr>
          <section className={styles.section}>
            <div className={styles.sectionText}>
              <h5 className={styles.tag}>for couples</h5>
              <h2>make the most of every second of your vacation!</h2>
              <p>the template includes...</p>
              <ul>
                <li>custom templates for single & multi-city trips!</li>
                <li>custom templates for solo, couple, & group trips!</li>
                <li>an easy-to-use itinerary creator!</li>
                <li>a budget tracker for every trip!</li>
                <li>a task management system!</li>
              </ul>
            </div>
            <div className={styles.sectionImage}>
              <img src="/trip/example-1.png" height="auto" width="100%"></img>
            </div>
          </section>
          <hr className={styles.divider}></hr>
          <section className={styles.section}>
            <div className={styles.sectionText}>
              <h5 className={styles.tag}>for group trips</h5>
              <h2>trying to plan a reunion with the besties?</h2>
              <ul>
                <li>
                  figure out the ideal dates & location for your bestie reunion.
                </li>
                <li>
                  coordinate every detail and make sure everyone has their
                  flights booked.
                </li>
                <li>assign tasks to different members of your party.</li>

                <li>keep track of expenses and divide it easily later!</li>
                <li>
                  make sure your neediest friend gets everything they wish for
                  and more.
                </li>
              </ul>
            </div>
            <div className={styles.sectionImage}>
              <img src="/trip/example-2.png" height="auto" width="100%"></img>
            </div>
          </section>
          <hr className={styles.divider}></hr>
          <section className={styles.sectionCentered}>
            <h5 className={styles.tag}>for the planners</h5>
            <h2>one template that works for every trip!</h2>
            <p>
              from solo backpacking trips to big family reunions, the ultimate
              notion travel template is guaranteed to be better than the google
              sheet itinerary your type-a friend puts together.
            </p>
            <a
              className={styles.btn}
              href="https://checkout.stripe.com/c/pay/cs_live_a1KIrWekPdQINeS4E4obfrH4TYq9jO3up3itZz3cFgMIOt6DpUcvAUBYYd#fidkdWxOYHwnPyd1blppbHNgWmRQU2w8TURLV2M3U25McDBydUE3UDVHXCcpJ3VpbGtuQH11anZgYUxhJz8nM2pAYFJUNWpcNlJjMjQzNmZhJ3gl"
            >
              ✻ start planning for $9 ✻
            </a>
          </section>
          <hr className={styles.divider}></hr>
          <section className={styles.sectionBio}>
            <div className={styles.sectionImage}>
              <img src="/trip/elizabeth.png" />
            </div>
            <div className={styles.sectionText}>
              <h2 className={styles.headingMedium}>who am i?</h2>
              <p>
                My name is Elizabeth and I work as a product designer during the
                day and love all things related to documentation and
                organization. I&apos;m an Aries Sun and my favorite color is
                pink. I recently organized a my vacations to Mexico, Iceland,
                and Hawaii using Notion
              </p>
              <p>
                You can find me on Twitter at{" "}
                <a href="https://twitter.com/@lalizlabeth">@lalizlabeth</a>.
              </p>
            </div>
          </section>
          <hr className={styles.divider}></hr>
          <section className={styles.sectionCentered}>
            <h2>interested in other templates?</h2>
            <Link className={styles.btn} href="/">
              check out more templates by liz
            </Link>
          </section>
        </div>
        <Marquee
          style={{
            backgroundColor: "#99f141",
            borderBottom: "1px solid #0a1635",
            fontFamily: "Syne",
            fontSize: 16,
            padding: 8,
            position: "fixed",
            top: 0,
          }}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          speed={80}
        >
          {Array.from(Array(20)).map((_, index) => [
            <span key={index}>{"friend reunions ✻ "}</span>,
            <span key={index}>{"group trips"}</span>,
            <span key={index}>{"backpacking adventures"}</span>,
            <span key={index}>{"couple getaways"}</span>,
            <span key={index}>{"honeymoons"}</span>,
            <span key={index}>{"family road trips"}</span>,
            <span key={index}>{"bachelorette parties"}</span>,
            <span key={index}>{"solo travels"}</span>,
          ])}
        </Marquee>
      </main>
    </>
  );
};

export default Home;
