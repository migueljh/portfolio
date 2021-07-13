import React, { useState, useEffect, useContext } from "react";
import styles from "./projects.module.scss";
import ecommerce from "../img/Projects/Henryfy/ecommercetickets.png";
import moba from "../img/Projects/Moba/mobalogin.jpg";
import underConstruction from "../img/Projects/under-construction.jpg";
import aerolab from "../img/Projects/Aerolab/aerolab.PNG";
import { Context } from "../App";
import { pageTransition, pageVariants, projectTransition } from "../pages";
import { motion } from "framer-motion";
import { en, es } from "./translate";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const { screen, setScreen, theme, language } = useContext(Context);
  const [category, setCategory] = useState("");
  const [text, setText] = useState({
    textEcommerce: "",
    textMoba: "",
    textWeather: "",
    textMovie: "",
  });
  let fontStyles = theme === "dark" ? "rgb(146, 145, 145)" : "#333";

  useEffect(() => {
    setScreen("project");
  }, []);

  useEffect(() => {
    setCategory("showAll");
  }, []);

  const mountedStyle = { animation: `${styles.alertShow} 1s ease-in` };

  const unmountedStyle = {
    animation: `${styles.alertHide} 1s ease-out`,
    animationFillMode: "forwards",
  };

  const onMouseOverEcommerce = () => {
    setText({
      ...text,
      textEcommerce: !language
        ? null
        : language.value === "en" || language === "en"
        ? en.ecommerce
        : es.ecommerce,
    });
  };

  const onMouseOverMoba = () => {
    setText({
      ...text,
      textMoba: !language
        ? null
        : language.value === "en" || language === "en"
        ? en.moba
        : es.moba,
    });
  };

  const onMouseOverAerolab = () => {
    setText({
      ...text,
      textAerolab: !language
        ? null
        : language.value === "en" || language === "en"
        ? en.aerolab
        : es.aerolab,
    });
  };

  const onMouseOverMovie = () => {
    setText({
      ...text,
      textMovie: !language
        ? null
        : language.value === "en" || language === "en"
        ? en.movies
        : es.movies,
    });
  };

  const onMouseLeave = () => {
    setText({
      ...text,
      textEcommerce: "",
      textMoba: "",
      textAerolab: "",
      textMovie: "",
    });
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        marginTop: "-2px",
      }}
    >
      <div
        className={styles.projectsContainer}
        style={{ display: screen === "menu" ?? "none" }}
      >
        <div className={styles.container}>
          <p
            className={styles.textTitle}
            style={{
              color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
            }}
          >
            {language.value === "en" || language === "en" ? en.title : es.title}
          </p>
        </div>
        <div className={styles.container}>
          <p
            className={styles.textSubTitle}
            style={{
              color: fontStyles,
              width: "50%",
            }}
          >
            {!language
              ? null
              : language.value === "en" || language === "en"
              ? en.subtitle
              : es.subtitle}
          </p>
        </div>
        <div className={styles.container}>
          <p
            className={styles.textSubTitle}
            style={{
              fontSize: "20px",
              color: fontStyles,
              marginTop: "20px",
            }}
          >
            {!language
              ? null
              : language.value === "en" || language === "en"
              ? en.filter
              : es.filter}
          </p>
        </div>
        <div className={styles.rowFilter}>
          <div className={styles.subContainer}>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("showAll")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                {!language
                  ? null
                  : language.value === "en" || language === "en"
                  ? en.show_all
                  : es.show_all}
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("react")}
            >
              <p style={{ color: fontStyles }}>ReactJS</p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("reactNative")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                React Native
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("redux")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Redux
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
          </div>

          <div className={styles.subContainer}>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("html5")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                HTML5
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("bootstrap")}
            >
              <p
                className={styles.bootstrap}
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Bootstrap
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("node")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                NodeJS
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("express")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Express
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
          </div>

          <div className={styles.subContainer}>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("passport")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Passport
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("postgresql")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Postgres
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("sequelize")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                Sequelize
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
            <span
              className={styles.rowColumn}
              onClick={() => setCategory("design")}
            >
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                UX/UI Design
              </p>
              <div
                className={styles.lineOne}
                style={{
                  backgroundColor:
                    theme === "light" ? "rgb(146, 145, 145)" : "#2e2e2e",
                }}
              ></div>
              <div className={styles.lineTwo}></div>
            </span>
          </div>
        </div>

        <div className={styles.projects}>
          <div className={styles.containerRow}>
            {category === "showAll" ||
            category === "react" ||
            category === "html5" ||
            category === "bootstrap" ||
            category === "redux" ||
            category === "node" ||
            category === "express" ||
            category === "passport" ||
            category === "postgresql" ||
            category === "sequelize" ||
            category === "design" ? (
              <motion.div
                className={styles.projectsRow}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
              >
                <ProjectBox
                  title={styles.projectsRowTitle}
                  projectTitle="Henryfy"
                  curtain={styles.curtain}
                  onMouseOver={onMouseOverEcommerce}
                  onMouseLeave={onMouseLeave}
                  subtitle={styles.projectsRowSubTitle}
                  textCurtain={text.textEcommerce}
                  srcImg={ecommerce}
                  classnameImg={styles.imgFirstRow}
                  urlName="henryfy"
                />
              </motion.div>
            ) : null}
            {/*  {category === "showAll" ||
            category === "reactNative" ||
            category === "redux" ||
            category === "node" ||
            category === "express" ||
            category === "postgresql" ||
            category === "sequelize" ||
            category === "design" ? (
              <motion.div
                className={styles.projectsRow}
                style={{ backgroundColor: "white", height: "202px" }}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>
                  <p className={styles.projectsRowTitle}>MOBA </p>
                </span>
                <Link to="/projects/moba">
                  <div
                    className={styles.curtain}
                    onMouseEnter={onMouseOverMoba}
                    onMouseLeave={onMouseLeave}
                  >
                    <p
                      className={styles.projectsRowSubTitle}
                      style={{ marginTop: "20px" }}
                    >
                      {text.textMoba}
                    </p>
                  </div>
                  <img
                    src={moba}
                    className={styles.imgFirstRow}
                    style={{ width: "120px" }}
                    alt=""
                  />
                </Link>
              </motion.div>
            ) : null} */}
          </div>

          {/*  <div className={styles.containerRow} id={styles.secondContainerRow}>
            {category === "showAll" ||
            category === "react" ||
            category === "redux" ? (
              <motion.div
                className={styles.projectsRow}
                style={{ backgroundColor: "white", height: "202px" }}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
              >
                <span>
                  <p className={styles.projectsRowTitle}>Aerolab Challenge </p>
                </span>
                <a href="https://aerolab-challenge-puce.vercel.app/">
                  <div
                    className={styles.curtainBelow}
                    onMouseEnter={onMouseOverAerolab}
                    onMouseLeave={onMouseLeave}
                  >
                    <p
                      className={styles.projectsRowSubTitle}
                      style={{ marginTop: "30px" }}
                    >
                      {text.textAerolab}
                    </p>
                  </div>
                  <img
                    src={aerolab}
                    className={styles.imgSecondRow}
                    style={{ width: "auto" }}
                    alt="aerolab_challenge"
                  />
                </a>
              </motion.div>
            ) : null}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
