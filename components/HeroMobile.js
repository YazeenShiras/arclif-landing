import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Mobile.module.css";
import HeroOptionsMobile from "./HeroOptionsMobile";

const HeroMobile = () => {
  const hideNotifications = () => {
    document.getElementById("notifyContainer").style.display = "none";
    document.getElementById("bgContanierMobile").style.marginTop = "70px";
  };

  return (
    <div className={styles.home__mobile}>
      <div id="notifyContainer" className={styles.notify}>
        <div className={styles.leftNotify}>
          <p>Join AITA 2021</p>
          <div className={styles.buttonNotify}>
            <p>&gt; &gt;</p>
            <a href="http://arclif.in">
              <i>PARTICIPATE NOW</i>
            </a>
            <p>&lt; &lt;</p>
          </div>
        </div>
        <div className={styles.rightNotify}>
          <Image
            onClick={hideNotifications}
            className={styles.closeIcon__notify}
            src="/close__icon.svg"
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>
      <div
        id="bgContanierMobile"
        className={styles.bgContanier__mobile}
        style={{ backgroundImage: `url('/hero.jpg')` }}
      ></div>
      <div className={styles.titleContanier__mobile}>
        <h1>
          Find the best Architects, <br /> Designers and Products <br /> across
          the Globe
        </h1>
        <p>
          Arclif.com is an online architecture service platform founded in 2016
          to connect Architects, Designers, Home Contractors and Building
          Suppliers closer to Home seekers with their products and services
          across the world considering the scenario in Construction industry.
        </p>

        {/* <h5>Join Us Today</h5>
        <div className={styles.hero__input}>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            placeholder="Email / Mobile Number"
            autoComplete="off"
          />
        </div>
        <Link href={value == true ? "/verify" : "/"} passHref>
          <div className={styles.hero__button}>Sign up</div>
        </Link> */}

        <Link href="https://arclif.com/account/signup" passHref>
          <div className={styles.hero__button}>join now</div>
        </Link>

        {/* <div className={styles.hero__options}>
          <p>Sign Up With</p>
          <Image
            src="/google__icon.svg"
            width={13}
            height={13}
            alt=""
            className={styles.hero__icon}
          />
          <Image
            src="/apple__icon.svg"
            width={13}
            height={13}
            a
            alt=""
            className={styles.hero__icon}
          />
        </div> */}
      </div>
      <HeroOptionsMobile
        imageUrl="/marketPlace.jpg"
        title="Arclif Marketplace"
        description="Shop the trendiest products by the best brands, from candle stands
            to clocks,not to mention the cosy quilts for your finest sleeps at
            an unbeatable price. You can choose a wide range of products like
            coffee tables, lights, imported cook wares, mats, carpets, curtains,
            locks, mirrors, indoor plants, garden furnitures, shower cubicles,
            soap dish, sinks etc."
        link="https://arclif.com/account/signup"
        linkText="Shop Now"
      />

      <HeroOptionsMobile
        imageUrl="/ideas.jpg"
        title="Ideas and Inspirations"
        description="Our world is full of creative people. Find the best ideas,
            inspirations and informations for your next design project or your
            dream home. If you are a budding architect or designer, there is a
            sea of opportunities awaiting you .Post your concepts and ideas on
            our portal that will take you light years ahead in your career."
        link="https://arclif.com/account/signup"
        linkText="Explore"
      />

      {/*  <HeroOptionsMobile imageUrl='/people.jpg' title='People and Projects' description='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.' link="https://www.arclif.com/search/profile" linkText='Explore' /> */}
    </div>
  );
};

export default HeroMobile;
