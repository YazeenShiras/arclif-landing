import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBusiness from "../components/HeroBusiness";

const Business = () => {
  return (
    <div>
      <Head>
        <title>Business Account | Arclif</title>
      </Head>
      <Header />
      <HeroBusiness />
      <Footer />
    </div>
  );
};

export default Business;
