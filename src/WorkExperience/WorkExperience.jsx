import React, { useContext, useEffect, useRef } from "react";
import styles from "./workExperience.module.scss";
import accenture from "../img/Resume/Group.png";
import ibm from "../img/Resume/Vector.png";
import accentureLight from "../img/Resume/accenture-logo-1.png";
import ibmLight from "../img/Resume/ibm-logo.png";
import { Context } from "../App";
import resume from "../img/Resume/Miguel_Hernandez_FullStack.pdf";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../pages";
import {en, es} from "./translate"

const WorkExperience = () => {
  const { screen, setScreen, theme, language } = useContext(Context);

  useEffect(() => {
    setScreen("resume");
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        marginTop: "-1px",
      }}
    >
      <div style={{ display: screen === "menu" ? "none" : null }}>
        <div className={styles.flexContainer}>
          <p
            className={styles.textTitle}
            style={{
              color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
            }}
          >
            { !language ? null : language.value === "en" || language === "en" ? en.title : es.title}
            <br />
            { !language ? null : language.value === "en" || language === "en" ? en.subtitle : es.subtitle}
          </p>
        </div>
        <div className={styles.flexContainer}>
          <p
            className={styles.textSubTitle}
            style={{
              color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              
            }}
          >
            <br />
            { !language ? null : language.value === "en" || language === "en" ? en.description : es.description}
          </p>
        </div>
        <div className={styles.secondFlexContainer}>
          <p
            className={styles.textResume}
            style={{
              color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
            }}
          >
            { !language ? null : language.value === "en" || language === "en" ? en.invitation : es.invitation}
          </p>
          <a href={resume}>
            <div className={styles.flexContainer}>
              <i
                class="fas fa-save fa-2x"
                style={{
                  color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
                  cursor: "pointer",
                }}
              ></i>
            </div>
            <p
              className={styles.textResumeDownload}
              style={{
                marginTop: "0px",
                borderBottom: theme === "light" ? " 0.5px solid #333" : "0.5px solid rgb(146, 145, 145) ",
                cursor: "pointer",
                color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              }}
            >
              { !language ? null : language.value === "en" || language === "en" ? en.download : es.download}
            </p>
          </a>
        </div>
        <div className={styles.container} style={{marginTop: "20px"}}>
          <div className={styles.projects} id={styles.accenture}>
            <p
              className={styles.textSubTitleProjects}
              style={{
                color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              }}
            >
              { !language ? null : language.value === "en" || language === "en" ? en.accenture_position : es.accenture_position}
              {theme === "light" ? (
                <img
                  src={accentureLight}
                  className={styles.imgAccentureLight}
                />
              ) : (
                <img src={accenture} className={styles.imgAccenture} />
              )}
            </p>
            <div className={styles.line} style={{ width: "40%", backgroundColor: theme === "light" ? "#333" : "rgb(146, 145, 145)" }}></div>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <p
              className={styles.textWorkDescription}
              id={styles.accenture_position}
              style={{
                color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
                width: "50%",
                marginTop: "20px"
              }}
            >
             { !language ? null : language.value === "en" || language === "en" ? en.accenture_job_description : es.accenture_job_description}
            </p>
          </div>

          <div className={styles.projects} id={styles.ibm} style={{marginTop: "40px"}}>
            <p
              className={styles.textSubTitleProjects}
              style={{ 
                color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              }}
            >
              { !language ? null : language.value === "en" || language === "en" ? en.ibm_position : es.ibm_position}

              {theme === "light" ? (
                <img src={ibmLight} className={styles.imgIBM}/>
              ) : (
                <img src={ibm} className={styles.imgIBM} />
              )}
            </p>
            <div className={styles.line} style={{ width: "40%", backgroundColor: theme === "light" ? "#333" : "rgb(146, 145, 145)" }}></div>
          </div>
          <div style={{display: "flex", justifyContent: "center", marginBottom: "40px"}}>
            <p
              className={styles.textWorkDescription}
              id={styles.ibm_position}
              style={{
                color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
                width: "50%",
                marginTop: "20px"
              }}
            >
              { !language ? null : language.value === "en" || language === "en" ? en.ibm_job_description : es.ibm_job_description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
