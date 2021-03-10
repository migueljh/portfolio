import React, { useContext, useEffect } from "react";
import styles from "./henryfy.module.scss";
import { Context } from "../../App";
import { motion } from "framer-motion";
import { pageVariants } from "../../pages";
import ecommerce from "../../img/Projects/Henryfy/ecommercetickets.png";
import ecommerce2 from "../../img/Projects/Henryfy/ecommerce2.png";
import ecommerce3 from "../../img/Projects/Henryfy/ecommerce3.png";
import ecommerce4 from "../../img/Projects/Henryfy/ecommerce4.png";
import ecommerce5 from "../../img/Projects/Henryfy/ecommerce5.png";
import ecommerce6 from "../../img/Projects/Henryfy/ecommerce6.png";
import ecommerce7 from "../../img/Projects/Henryfy/ecommerce7.png";
import ecommerce8 from "../../img/Projects/Henryfy/ecommerce8.png";
import ecommerce9 from "../../img/Projects/Henryfy/ecommerce9.png";
import ecommerce10 from "../../img/Projects/Henryfy/ecommerce10.png";
import ecommerce11 from "../../img/Projects/Henryfy/ecommerce11.png";
import ecommerce12 from "../../img/Projects/Henryfy/ecommerce12.png";
import ecommerce13 from "../../img/Projects/Henryfy/ecommerce13.png";
import ecommerce14 from "../../img/Projects/Henryfy/ecommerce14.png";
import ecommerce15 from "../../img/Projects/Henryfy/ecommerce15.png";
import styled from "styled-components";
import { en, es } from "./translate";

const ButtonRepository = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  width: 200px;
  height: 50px;
  background-color: transparent;
  border: 4px solid;
  color: rgb(146, 145, 145);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};#333;
    transform: skewX(50deg);
    transition: 0.5s linear;
  }

  &::before {
    top: -4px;
    left: 10%;
  }

  &::after {
    bottom: -4px;
    right: 10%;
  }

  &:hover::before{
    left: 80%;
  }

  &:hover::after{
    right: 80%;
  }
`;

const ButtonWebsite = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  width: 210px;
  height: 50px;
  background-color: transparent;
  border: 4px solid;
  color: rgb(146, 145, 145);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};#333;
    transform: skewX(50deg);
    transition: 0.5s linear;
  }

  &::before {
    top: -4px;
    left: 10%;
  }

  &::after {
    bottom: -4px;
    right: 10%;
  }

  &:hover::before{
    left: 80%;
  }

  &:hover::after{
    right: 80%;
  }
`;

const Henryfy = () => {
  const { screen, setScreen, theme, language } = useContext(Context);

  useEffect(() => {
    setScreen("henryfy");
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div
        className={styles.containerHenryfy}
        style={{
          display: screen === "menu" ? "none" : null,
          backgroundColor: theme === "dark" ? "#333" : "#fff",
        }}
      >
        <div className={styles.flexContainer}>
          <p
            className={styles.textTitle}
            style={{
              color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
            }}
          >
            Henryfy
          </p>
        </div>
        <div className={styles.flexContainer}>
          <p
            className={styles.textSubTitle}
            id={styles.subtitle}
            style={{
              color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
              borderLeft:
                theme === "dark"
                  ? "5px solid rgb(214, 214, 214)"
                  : "5px solid #333",
              width: "35%",
            }}
          >
            {/* language.value === "en" ||  */language === "en"  ? en.title : es.title}
          </p>
        </div>
        <div
          className={styles.flexContainer}
          style={{
            flexDirection: "row",
          }}
        >
          <div className={styles.btnContainer}>
            <ButtonWebsite theme={theme} id={styles.btnWebsite}>
              <p
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  marginTop: "18px",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  ? en.website : es.website}
              </p>
              <i
                className="fas fa-globe"
                id={styles.icons}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              ></i>
            </ButtonWebsite>
          </div>
          <div className={styles.btnContainer}>
            <ButtonRepository theme={theme} id={styles.btnRepository}>
              <p
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  marginTop: "18px",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  ? en.repository : es.repository}
              </p>
              <i
                className="fab fa-github"
                id={styles.icons}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              ></i>
            </ButtonRepository>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <img src={ecommerce} className={styles.imgEcommerce} style={{ width: "90%", marginTop: "40px" }} />
        </div>
        <div className={styles.flexContainer}>
          <p
            className={styles.textTitle}
            style={{
              marginTop: "120px",
              color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
            }}
          >
            {/* language.value === "en" ||  */language === "en"  ? en.first_title : es.first_title}
          </p>
        </div>
        <div className={styles.flexContainer} style={{ textAlign: "center" }}>
          <p
            className={styles.textSubTitle}
            style={{
              border: "none",
              color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
              width: "50%",
              marginTop: "20px"
            }}
          >
            {/* language.value === "en" ||  */language === "en"  
              ? en.first_description
              : es.first_description}
            <br />
            <br />
            {/* language.value === "en" ||  */language === "en"  ? en.developed_with : es.developed_with}
            <p
              style={{
                fontWeight: "900",
                color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
              }}
            >
              ReactJS, Redux, Bootstrap, Sequelize, Postgres <br />
              Node, Express, Passport
            </p>
            <div
              className={styles.flexContainer}
              style={{
                marginTop: "80px",
                marginBottom: "80px",
              }}
            >
              <img src={ecommerce2} className={styles.imgEcommerce} />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.registration_title
                  : es.registration_title}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                  border: "none"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.registration_description
                  : es.registration_description}
              </p>
            </div>
            <div
              className={styles.flexImgContainer}
              style={{
                marginTop: "80px",
                marginBottom: "80px",
              }}
            >
              <img src={ecommerce3} className={styles.imgEcommerce}/>
              <img src={ecommerce4} style={{ paddingLeft: "20px" }} className={styles.imgEcommerce}/>
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.guest_title
                  : es.guest_title}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  border: "none",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.guest_description
                  : es.guest_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
              className={styles.imgEcommerce}
                src={ecommerce5}
                style={{
                  /* width: "120%", */
                  marginTop: "80px",
                  marginBottom: "80px",
                  marginRight: "10px"
                }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                Checkout{" "}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  border: "none",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.checkout_description
                  : es.checkout_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce6}
                className={styles.imgEcommerce}
                style={{ marginTop: "80px", marginBottom: "80px" }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.categories_title
                  : es.categories_title}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  border: "none",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                  marginTop: "20px"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.categories_description
                  : es.categories_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce7}
                className={styles.imgEcommerce}
                style={{
                  /* width: "90%", */
                  marginTop: "80px",
                  marginBottom: "80px",
                }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.product_details
                  : es.product_details}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                  marginTop: "20px",
                  border: "none"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.product_details_description
                  : es.product_details_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce8}
                className={styles.imgEcommerce}
                style={{
                  /* width: "90%", */
                  marginTop: "80px",
                  marginBottom: "80px",
                }}
              />
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce9}
                className={styles.imgEcommerce}
                style={{ /* width: "45%",  */height: "50%", marginBottom: "80px" }}
              />
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce10}
                className={styles.imgEcommerce}
                style={{ /* width: "45%", */ height: "50%", marginBottom: "80px" }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.edit_profile
                  : es.edit_profile}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  border: "none",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.edit_profile_description
                  : es.edit_profile_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce11}
                className={styles.imgEcommerce}
                style={{ marginTop: "40px", marginBottom: "80px" }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.administrator
                  : es.administrator}
              </p>
            </div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                  marginTop: "20px",
                  border: "none"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.administrator_description
                  : es.administrator_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce12}
                className={styles.imgEcommerce}
                style={{ marginTop: "80px", marginBottom: "80px" }}
              />
            </div>
            <div className={styles.flexImgContainer}>
              <img src={ecommerce13} className={styles.imgEcommerce} style={{ marginBottom: "80px" }} />
              <img
                src={ecommerce14}
                className={styles.imgEcommerce}
                style={{ marginBottom: "80px", height: "60%" }}
              />
            </div>
            <div className={styles.flexContainer}>
              <p
                className={styles.textTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.reviews_title
                  : es.reviews_title}
              </p>
            </div>
            <div className={styles.flexContainer}></div>
            <div className={styles.flexContainer}>
              <p
              className={styles.textSubTitle}
                style={{
                  color: theme === "dark" ? "rgb(201, 201, 201)" : "#333",
                  width: "50%",
                  border: "none"
                }}
              >
                {/* language.value === "en" ||  */language === "en"  
                  ? en.reviews_description
                  : es.reviews_description}
            </p>
            </div>
            <div className={styles.flexContainer}>
              <img
                src={ecommerce15}
                className={styles.imgEcommerce}
                style={{ marginTop: "80px", marginBottom: "80px" }}
              />
            </div>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Henryfy;
