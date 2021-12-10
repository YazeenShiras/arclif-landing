import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const HeroCreate = () => {
  const [radio, setRadio] = useState(true);

  const onHover = () => {
    document.getElementById("dateInput").type = "date";
  };

  const checkPersonal = () => {
    var personal = document.querySelector(
      "input[type=radio][id=personal]:checked"
    );
    if (personal) {
      setRadio(true);
      document.getElementById("lastName").style.display = "block";
      document.getElementById("firstName").style.width = "185px";
      document.getElementById("fname").style.width = "80%";
      document.getElementById("fname").placeholder = "First Name";
      document.getElementById("dateInput").placeholder = "Found year";
      document.getElementById("dateInput").placeholder = "Date of birth";
    }
  };

  const checkBusiness = () => {
    var business = document.querySelector(
      "input[type=radio][id=business]:checked"
    );
    if (business) {
      setRadio(false);
      document.getElementById("lastName").style.display = "none";
      document.getElementById("firstName").style.width = "380px";
      document.getElementById("fname").style.width = "90%";
      document.getElementById("fname").placeholder = "Business Name";
      document.getElementById("dateInput").placeholder = "Found year";
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
          <h5>Choose type of account</h5>
          <form className={styles.formRadio}>
            <input
              onClick={checkPersonal}
              type="radio"
              id="personal"
              name="accont__type"
            />{" "}
            <h6>Personal Account</h6>
            <input
              type="radio"
              onClick={checkBusiness}
              id="business"
              name="accont__type"
            />{" "}
            <h6>Business Account</h6>
          </form>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <div className={styles.nameContanier}>
            <div id="firstName" className={styles.firstNameContanier}>
              <input id="fname" type="text" placeholder="First Name" />
            </div>
            <div id="lastName" className={styles.lastNameContaniner}>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={styles.hero__input__create}>
            <input
              id="dateInput"
              type="text"
              onFocus={onHover}
              placeholder="Date of birth"
            />
          </div>
          <div className={styles.hero__input__create}>
            <input type="text" placeholder="State" />
          </div>
          <div className={styles.hero__input__create}>
            <input type="text" placeholder="District" />
          </div>
          <div className={styles.hero__input__create}>
            <input type="text" placeholder="City" />
          </div>
          <Link href={radio == true ? "/personal" : "/business"} passHref>
            <div id="next" className={styles.hero__button}>
              NEXT
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCreate;
