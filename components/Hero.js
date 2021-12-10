import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (input !== "") {
      if (input.includes("@")) {
        if (input.includes(".com")) {
          setValue(true);
        }
      } else {
        setValue(false);
      }
    }
  }, [input]);

  useEffect(() => {
    if (input !== "") {
      let isnum = /^\d+$/.test(input);
      if (input.length == 10) {
        if (isnum) {
          setIsPhone(true);
          if (isPhone === true) {
            setValue(true);
          } else {
            setValue(false);
          }
        }
      }
    }
  }, [input, isPhone]);

  /* const handleChange = () => {
    const emailInput = document.getElementById("email");
    setInput(emailInput.value);
    console.log(emailInput.value);
  }; */

  return (
    <div>
      <div id="heroContainer" className={styles.hero}>
        <div
          style={{ backgroundImage: `url('/hero.jpg')` }}
          className={styles.left__hero}
        ></div>
        <div className={styles.right__hero}>
          <h1>
            Find the best
            <br />
            Architects, Designers <br /> and Products
            <br />
            across the Globe
          </h1>
          <p>
            Arclif.com is an online architecture service platform founded in
            2016 to connect Architects, Designers, Home Contractors and Building
            Suppliers closer to Home seekers with their products and services
            across the world considering the scenario in Construction industry.
          </p>
          {/* <h5>Join Us Today</h5> */}
          {/* <div className={styles.hero__input}>
            <input
              onChange={handleChange}
              type="text"
              id="email"
              placeholder="Email / Mobile Number"
              autoComplete="off"
            />
          </div> */}
          {/* <Link href={value == true ? "/verify" : "/"} passHref>
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
              height={13}a
              alt=""
              className={styles.hero__icon}
            />
          </div> */}
        </div>
      </div>

      <section className={styles.marketplace}>
        <div className={styles.left__marketplace}>
          <h2>Arclif Marketplace</h2>
          <p>
            Shop the trendiest products by the best brands, from candle stands
            to clocks,not to mention the cosy quilts for your finest sleeps at
            an unbeatable price. you can choose a wide range of products like
            coffee tables, lights ,imported cook wares, mats, carpets, curtains,
            locks, mirrors, indoor plants, garden furnitures, shower cubicles,
            soap dish, sinks etc.
          </p>
          <a href="https://arclif.com/account/signup">Shop Now</a>
        </div>
        <div className={styles.right__marketplace}>
          <div
            style={{ backgroundImage: `url('/marketPlace.jpg')` }}
            className={styles.image__marketplace}
          ></div>
        </div>
      </section>

      <section className={styles.jobs}>
        <div className={styles.left__jobs}>
          <div
            style={{ backgroundImage: `url('/ideas.jpg')` }}
            className={styles.image__jobs}
          ></div>
        </div>
        <div className={styles.right__jobs}>
          <h2>Ideas and Inspirations</h2>
          <p>
            Our world is full of creative people. Find the best ideas,
            inspirations and informations for your next design project or your
            dream home.if you are a budding architect or designer, there is a
            sea of opportunities awaiting you .Post your concepts and ideas on
            our portal that will take you light years ahead in your career.
          </p>
          <a href="https://arclif.com/account/signup">Explore</a>
        </div>
      </section>

      {/* <section className={styles.requirements}>
        <div className={styles.left__requirements}>
          <h2>People and Projects</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <a href="https://www.arclif.com/search/profile">Explore</a>
        </div>
        <div className={styles.right__requirements}>
          <div
            style={{ backgroundImage: `url('/people.jpg')` }}
            className={styles.image__requirements}
          ></div>
        </div>
      </section> */}
      <div id="heroMobile" className={styles.mobileOnly}>
        <HeroMobile />
      </div>
    </div>
  );
};

export default Hero;
