import React, { useContext, useEffect, useRef } from "react";
import styles from "./moba.module.scss";
import { Context } from "../../App";
import { motion } from "framer-motion";
import { pageVariants } from "../../pages";
import moba from "../../img/Projects/Moba/MOBA UI .png";
import moba2 from "../../img/Projects/Moba/MOBA UI (4).png";
import moba3 from "../../img/Projects/Moba/MOBA UI (5).png";
import moba4 from "../../img/Projects/Moba/MOBA UI (6).png";
import moba5 from "../../img/Projects/Moba/MOBA UI (7).png";
import moba6 from "../../img/Projects/Moba/MOBA UI (8).png";
import moba7 from "../../img/Projects/Moba/MOBA UI (10).png";
import moba8 from "../../img/Projects/Moba/MOBA UI (18).png";
import moba9 from "../../img/Projects/Moba/MOBA UI (16).png";
import moba10 from "../../img/Projects/Moba/MOBA UI (19).png";
import mobaDark from "../../img/Projects/Moba/image 2.png";
import moba2Dark from "../../img/Projects/Moba/MOBA UI (22).png";
import moba3Dark from "../../img/Projects/Moba/MOBA UI (24).png";
import moba4Dark from "../../img/Projects/Moba/MOBA UI (25).png";
import moba5Dark from "../../img/Projects/Moba/MOBA UI (26).png";
import moba6Dark from "../../img/Projects/Moba/image 6.png";
import moba7Dark from "../../img/Projects/Moba/image 7.png";
import moba8Dark from "../../img/Projects/Moba/MOBA UI (27).png";
import moba9Dark from "../../img/Projects/Moba/MOBA UI (28).png";
import moba10Dark from "../../img/Projects/Moba/MOBA UI (29).png";
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
  color: ${({ theme }) =>
    theme === "dark" ? "rgb(146, 145, 145)" : "#521886"};"rgb(146, 145, 145)";
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
  color: ${({ theme }) =>
    theme === "dark" ? "rgb(146, 145, 145)" : "#521886"};"rgb(146, 145, 145)";
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
  const { screen, setColorMenu, setScreen, theme, language } = useContext(
    Context
  );

  useEffect(() => {
    setColorMenu(true);
  });

  useEffect(() => {
    setScreen("moba");
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={styles.containerMoba}
      style={{
        display: screen === "menu" ? "none" : null,
        backgroundColor: theme === "dark" ? "#333" : "white",
      }}
    >
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{ color: theme === "dark" ? "white" : "#521886" }}
        >
          MOBA
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textSubTitle}
          style={{
            color: theme === "dark" ? "white" : "black",
            borderLeft:
              theme === "dark" ? "5px solid white" : "5px solid #521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.title : es.title}
        </p>
      </div>
      <div className={styles.flexContainer} style={{ flexDirection: "row" }}>
        <ButtonWebsite theme={theme} id={styles.btnWebsite}>
          <p
            style={{
              color: theme === "dark" ? "white" : "#521886",
              marginTop: "18px",
            }}
          >
            { !language ? null : language.value === "en" || language === "en" ? en.demo : es.demo}
          </p>
          <i
            className="fab fa-youtube"
            style={{
              paddingLeft: "20px",
              color: theme === "dark" ? "white" : "#521886",
            }}
          ></i>
        </ButtonWebsite>

        <ButtonRepository theme={theme} id={styles.btnRepository}>
          <p
            style={{
              color: theme === "dark" ? "white" : "#521886",
              marginTop: "18px",
            }}
          >
            { !language ? null : language.value === "en" || language === "en" ? en.repository : es.repository}
          </p>
          <i
            className="fab fa-github"
            style={{
              paddingLeft: "10px",
              color: theme === "dark" ? "white" : "#521886",
            }}
          ></i>
        </ButtonRepository>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img src={mobaDark} style={{ marginTop: "40px" }} />
        ) : (
          <img src={moba} style={{ marginTop: "40px" }} />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "120px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.friendly_app : es.friendly_app}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.friendly_app_description
            : es.friendly_app_description}

          <p style={{ color: theme === "dark" ? "white" : "#521886" }}>
            { !language ? null : language.value === "en" || language === "en" ? en.languages : es.languages}
          </p>
          { !language ? null : language.value === "en" || language === "en" ? en.designed : es.designed}
          <p style={{ color: theme === "dark" ? "white" : "#521886" }}>Figma</p>
        </p>
      </div>
      <div
        className={styles.flexContainer}
        style={{ marginTop: "80px", marginBottom: "80px" }}
      >
        {theme === "dark" ? <img src={moba2Dark} className={styles.firstImgShared}/> : <img src={moba2} className={styles.firstImgShared}/>}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.title_register : es.title_register}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.register_description
            : es.register_description}
        </p>
      </div>
      <div
        className={styles.flexContainer}
        style={{
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        {theme === "dark" ? <img src={moba3Dark} className={styles.firstImgShared}/> : <img src={moba3} className={styles.secondImgShared}/>}
      </div>
      <div
        className={styles.flexContainer}
        style={{
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        {theme === "dark" ? <img src={moba4Dark} className={styles.firstImgShared}/> : <img src={moba4} className={styles.firstImgShared}/>}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.add_money_title : es.add_money_title}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.add_money_description
            : es.add_money_description}
        </p>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
            src={moba5Dark}
            className={styles.secondImgShared}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        ) : (
          <img
            src={moba5}
            className={styles.secondImgShared}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.statistics : es.statistics}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.statistics_description
            : es.statistics_description}
        </p>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
            src={moba6Dark}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        ) : (
          <img
            src={moba6}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.virtual_card : es.virtual_card}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.virtual_card_description
            : es.virtual_card_description}
        </p>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
            src={moba7Dark}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        ) : (
          <img
            src={moba7}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.transactions_title
            : es.transactions_title}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.transactions_description
            : es.transactions_description}
        </p>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
          className={styles.firstImgShared}
            src={moba8Dark}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        ) : (
          <img
          className={styles.firstImgShared}
            src={moba8}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textTitle}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: theme === "dark" ? "white" : "#521886",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.transfer_unregister
            : es.transfer_unregister}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.transfer_unregister_description
            : es.transfer_unregister_description}
        </p>
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
          className={styles.firstImgShared}
            src={moba9Dark}
            style={{ marginTop: "40px", marginBottom: "80px" }}
          />
        ) : (
          <img
          className={styles.firstImgShared}
            src={moba9}
            style={{ marginTop: "40px", marginBottom: "80px" }}
          />
        )}
      </div>
      <div className={styles.flexContainer}>
        <p
          className={styles.textContent}
          style={{
            border: "none",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" 
            ? en.transfer_unregister_description_2
            : es.transfer_unregister_description_2}
        </p>{" "}
      </div>
      <div className={styles.flexContainer}>
        {theme === "dark" ? (
          <img
          className={styles.firstImgShared}
            src={moba10Dark}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        ) : (
          <img
          className={styles.firstImgShared}
            src={moba10}
            style={{ marginTop: "80px", marginBottom: "80px" }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Henryfy;
