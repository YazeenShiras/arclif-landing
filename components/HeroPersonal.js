import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const HeroPersonal = () => {
  const [radio, setRadio] = useState(true);

  const checkProfessional = () => {
    var professional = document.querySelector(
      "input[type=radio][id=proffessional]:checked"
    );
    if (professional) {
      setRadio(true);
    }
  };

  const checkNormal = () => {
    var normal = document.querySelector("input[type=radio][id=normal]:checked");
    if (normal) {
      setRadio(false);
    }
  };

  return (
    <div>
      <div className={styles.hero}>
        <div
          style={{ backgroundImage: `url('/hero__image.png')` }}
          className={styles.left__hero}
        ></div>
        <div className={styles.right__hero}>
          <h6 className={styles.personal__title}>
            Are you a professional ? or here to find some professionals?{" "}
          </h6>
          <form className={styles.personal__form}>
            <div className={styles.radio__personal}>
              <div className={styles.left__radio}>
                <input
                  onClick={checkProfessional}
                  type="radio"
                  name="radio__personal"
                  value="Professional Account"
                  id="proffessional"
                />{" "}
                <label htmlFor="proffessional">Professional Account</label>
              </div>
              <div className={styles.right__radio}>
                <input
                  onClick={checkNormal}
                  type="radio"
                  name="radio__personal"
                  value="Normal Account"
                  id="normal"
                />{" "}
                <label htmlFor="normal">Normal Account</label>
              </div>
            </div>
            <Link
              href={radio == true ? "/proffessional" : "https://arclif.com"}
              passHref
            >
              <div className={styles.hero__button}>NEXT</div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroPersonal;
