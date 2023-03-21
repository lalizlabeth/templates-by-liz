import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

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
              includes single & multi-city templates for solo & group travel
            </h4>
            <a
              className={styles.btn}
              href="https://checkout.stripe.com/c/pay/cs_live_a1KIrWekPdQINeS4E4obfrH4TYq9jO3up3itZz3cFgMIOt6DpUcvAUBYYd#fidkdWxOYHwnPyd1blppbHNgWmRQU2w8TURLV2M3U25McDBydUE3UDVHXCcpJ3VpbGtuQH11anZgYUxhJz8nM2pAYFJUNWpcNlJjMjQzNmZhJ3gl"
            >
              ✻ download for $9 ✻
            </a>
            <img
              className={styles.img}
              width="100%"
              src="/trip/placeholder-image.png"
            />
          </header>
        </div>
      </main>
    </>
  );
};

export default Home;
