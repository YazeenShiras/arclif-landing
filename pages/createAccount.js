import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroCreate from "../components/HeroCreate";
import styles from "../styles/Home.module.css";

const createAccount = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Create Account | Arclif</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <HeroCreate />
      <Footer />
    </div>
  );
};

export default createAccount;
