import type { NextPage } from "next";
import Head from "next/head";
import Style from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={Style.wrapper}>
      <Head>
        <title>Template</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/normalize.css@8.0.1/normalize.css"
        />
      </Head>
    </div>
  );
};

export default Home;
