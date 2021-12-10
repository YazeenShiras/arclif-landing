import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      {/* <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.left__footer__top}>
            <div className={styles.logo__footer}>
              <a href="arclif.com">
                <Image src="/arclif__logo.svg" width={80} height={30} alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quam laborum eos in maiores veritatis obcaecati eaque sint
              voluptatibus delectus! Maiores non quos molestiae debitis
              accusamus
            </p>
          </div>
          <div className={styles.center__footer__top}>
            <div className={styles.left__center__footer}>
              <h4>What arclif provides</h4>
              <div className={styles.content__cf}>
                <div className={styles.left__content__cf}>
                  <ul>
                    <li>Jobs</li>
                    <li>Estimator</li>
                    <li>Requirements</li>
                    <li>Charity</li>
                    <li>Q&A</li>
                  </ul>
                </div>
                <div className={styles.right__content__cf}>
                  <ul>
                    <li>Marketplace</li>
                    <li>Projects</li>
                    <li>Companies</li>
                    <li>Proffesional</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.right__center__footer}>
              <h4>Quick links</h4>
              <div className={styles.content__cf}>
                <div className={styles.left__content__cf}>
                  <ul>
                    <li>Jobs</li>
                    <li>Estimator</li>
                    <li>Requirements</li>
                    <li>Charity</li>
                    <li>Q&A</li>
                  </ul>
                </div>
                <div className={styles.right__content__cf}>
                  <ul>
                    <li>Marketplace</li>
                    <li>Projects</li>
                    <li>Companies</li>
                    <li>Proffesional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right__footer__top}>
            <h4>Quick Links</h4>
            <div className={styles.content__rf}>
              <ul>
                <li>About</li>
                <li>Help</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>
                  <div className={styles.social__footer}>
                    <p>Follow</p>
                    <div className={styles.socialIcon__contanier}>
                      <Image
                        src="/instagram__icon.svg"
                        width={12}
                        height={12}
                        alt=""
                        className={styles.socialIcon}
                      />
                      <Image
                        src="/facebook__icon.svg"
                        alt=""
                        width={12}
                        height={12}
                        className={styles.socialIcon}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p> &copy; Copyright 2021 arclif.com. All rights reserved.</p>
        </div>
      </footer> */}

      <div className={styles.footer__sample}>
        <p> &copy; Copyright 2021 arclif.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
