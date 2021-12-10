import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroVerify from "../components/HeroVerify";

const verify = () => {
  return (
    <div className={styles.verify}>
      <Head>
        <title>Varify OTP | Arclif</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <HeroVerify />
      <Footer />
    </div>
  );
};

export default verify;
