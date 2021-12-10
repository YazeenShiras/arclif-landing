import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const HeroVerify = () => {
  const [otp, setOtp] = useState("");

  const handleChange = () => {
    let otpInput = document.getElementById("otpInput");
    setOtp(otpInput.value);
  };

  return (
    <div>
      <div className={styles.hero}>
        <div
          style={{ backgroundImage: `url('/hero__image.png')` }}
          className={styles.left__hero}
        ></div>
        <div className={styles.right__hero}>
          <h1>
            Connect with
            <br />
            leading architect
            <br />
            network
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <h5>Join Us Today</h5>
          <div className={styles.hero__input}>
            <input
              id="otpInput"
              type="text"
              placeholder="Enter OTP"
              onChange={handleChange}
            />
          </div>
          <Link href={otp !== "" ? "/createAccount" : "/verify"} passHref>
            <div className={styles.hero__button}>Verify OTP</div>
          </Link>
          <div className={styles.verify__options}>
            <Link href="/" passHref>
              <Image
                src="/arrowLeft__icon.svg"
                width={13}
                height={13}
                alt=""
                className={styles.footer__icon}
              />
            </Link>
            <p>Edit Email / Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVerify;
