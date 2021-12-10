import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroPersonal from "../components/HeroPersonal";
import styles from "../styles/Home.module.css";

const personal = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Personal | Arclif</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <HeroPersonal />
      <Footer />
    </div>
  );
};

export default personal;
