import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const HeroProffessional = () => {
  const [value, setValue] = useState("Architect");

  const ArchitectClick = () => {
    setValue("Architect");
    document.getElementById("selectedProfessionContanier").style.display =
      "flex";
    document.getElementById("selectedProfessionContanier").style.width =
      "100px";
  };

  const StudentClick = () => {
    setValue("Student");
    document.getElementById("selectedProfessionContanier").style.display =
      "flex";
    document.getElementById("selectedProfessionContanier").style.width = "90px";
  };

  const EngineerClick = () => {
    setValue("Engineer");
    document.getElementById("selectedProfessionContanier").style.display =
      "flex";
    document.getElementById("selectedProfessionContanier").style.width =
      "100px";
  };

  const DesignerClick = () => {
    setValue("Designer");
    document.getElementById("selectedProfessionContanier").style.display =
      "flex";
  };

  const PhotographerClick = () => {
    setValue("Photographer");
    document.getElementById("selectedProfessionContanier").style.display =
      "flex";
    document.getElementById("selectedProfessionContanier").style.width =
      "125px";
  };

  const closeProfession = () => {
    document.getElementById("selectedProfessionContanier").style.display =
      "none";
  };

  const freelancerClick = () => {
    document.getElementById("profession__title").style.display = "block";
    document.getElementById("selected__contaniner").style.display = "block";
    document.getElementById("options__contanier").style.display = "grid";
    document.getElementById("employeeContanier").style.display = "none";
  };

  const employeeClick = () => {
    document.getElementById("profession__title").style.display = "none";
    document.getElementById("selected__contaniner").style.display = "none";
    document.getElementById("options__contanier").style.display = "none";
    document.getElementById("employeeContanier").style.display = "block";
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
              onClick={freelancerClick}
              id="freelancer"
              type="radio"
              name="radio__proffessional"
            />{" "}
            <h6>Freelancer</h6>
            <input
              onClick={employeeClick}
              id="employee"
              type="radio"
              name="radio__proffessional"
            />{" "}
            <h6>Employee</h6>
          </form>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          <div id="employeeContanier" className={styles.employeeContanier}>
            <div className={styles.hero__input__create}>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className={styles.hero__input__create}>
              <input type="text" placeholder="Job Title" />
            </div>
            <div className={styles.hero__input__create}>
              <select
                id="selects"
                className={styles.categories}
                name="categories"
              >
                <option className={styles.category} value="product__category">
                  Job Category
                </option>
                <option className={styles.category} value="product__category">
                  Product Category
                </option>
                <option className={styles.category} value="product__category">
                  Product Category
                </option>
                <option className={styles.category} value="product__category">
                  Product Category
                </option>
                <option className={styles.category} value="product__category">
                  Product Category
                </option>
              </select>
            </div>
          </div>

          <h5 id="profession__title">Select your Profession</h5>
          <div
            id="selected__contaniner"
            className={styles.selected__contaniner}
          >
            <div
              id="selectedProfessionContanier"
              className={styles.selected__proffession}
            >
              <p id="selected">{value}</p>{" "}
              <Image
                className={styles.cross__icon}
                src="/cross__icon.svg"
                width={10}
                height={10}
                alt=""
                onClick={closeProfession}
              />
            </div>
          </div>
          <div id="options__contanier" className={styles.options__contanier}>
            <div
              onClick={ArchitectClick}
              id="architect__proffession"
              className={styles.option__profession}
            >
              Architect
            </div>
            <div
              onClick={StudentClick}
              id="student__proffession"
              className={styles.option__profession}
            >
              Student
            </div>
            <div
              onClick={EngineerClick}
              id="Engineer__proffession"
              className={styles.option__profession}
            >
              Engineer
            </div>
            <div
              id="Designer__proffession"
              onClick={DesignerClick}
              className={styles.option__profession}
            >
              Designer
            </div>
            <div
              onClick={PhotographerClick}
              className={styles.option__profession}
            >
              Photographer
            </div>
            <div onClick={ArchitectClick} className={styles.option__profession}>
              Architect
            </div>
            <div onClick={DesignerClick} className={styles.option__profession}>
              Designer
            </div>
            <div
              onClick={PhotographerClick}
              className={styles.option__profession}
            >
              Photographer
            </div>
          </div>
          <Link href="https://arclif.com" passHref>
            <div className={styles.hero__button}>NEXT</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroProffessional;
