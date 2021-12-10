import Link from "next/link";
import styles from "../styles/Home.module.css";

const HeroBusiness = () => {
  const checkProduct = () => {
    var personal = document.querySelector(
      "input[type=radio][id=product]:checked"
    );
    if (personal) {
      document.getElementById("inputName").placeholder = "Product Name";
    }
  };

  const checkService = () => {
    var service = document.querySelector(
      "input[type=radio][id=service]:checked"
    );
    if (service) {
      document.getElementById("inputName").placeholder = "Service Name";
    }
  };

  const checkBoth = () => {
    var both = document.querySelector("input[type=radio][id=both]:checked");
    if (both) {
      document.getElementById("inputName").placeholder =
        "Product & Service Name";
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
          <h5>Type of Business</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>
          <form className={styles.formRadio}>
            <input
              id="product"
              type="radio"
              onClick={checkProduct}
              name="radio__business"
            />{" "}
            <h6>Product</h6>
            <input
              onClick={checkService}
              id="service"
              type="radio"
              name="radio__business"
            />{" "}
            <h6>Service</h6>
            <input
              onClick={checkBoth}
              id="both"
              type="radio"
              name="radio__business"
            />{" "}
            <h6>Product & Service</h6>
          </form>
          <div className={styles.inputContaniner__business}>
            <div className={styles.hero__input__create}>
              <input id="inputName" type="text" placeholder="Product Name" />
            </div>
            <div className={styles.hero__input__create}>
              <select
                id="selects"
                className={styles.categories}
                name="categories"
              >
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
                <option className={styles.category} value="product__category">
                  Product Category
                </option>
              </select>
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

export default HeroBusiness;
