import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Mobile.module.css";

const HeroOptionsMobile = ({imageUrl, title, description, link, linkText}) => {
  return (
    <div className={styles.heroOptions__mobile}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.imageContainer__mobile}
      ></div>
      <div className={styles.textContanier__mobile}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
};

export default HeroOptionsMobile;
