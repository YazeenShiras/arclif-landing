import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <Image
            className={styles.header__logo}
            src="/arclif__logo.svg"
            alt="Arclif Logo"
            width={100}
            height={35}
          />
        </div>
        <div className={styles.header__right}>
          <a href="http://arclif.in" className={styles.header__event}>
            <Image src="/aita.svg" alt="" width={20} height={25} />
            <p>AITA21</p>
          </a>
          <a
            href="mailto:support@arclif.com"
            className={styles.header__support}
          >
            <Image src="/support__icon.svg" alt="" width={18} height={18} />
            <p>Support</p>
          </a>
          <a
            href="https://arclif.com/account/login"
            className={styles.loginButton__header}
          >
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
