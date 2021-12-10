import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroProffessional from "../components/HeroProffessional";

const proffessional = () => {
  return (
    <div>
      <Head>
        <title>Professional Account | Arclif</title>
      </Head>
      <Header />
      <HeroProffessional />
      <Footer />
    </div>
  );
};

export default proffessional;
