import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./projects.module.scss";
import ecommerce from "../img/Projects/Henryfy/ecommercetickets.png";
import moba from "../img/Projects/Moba/mobalogin.jpg";
import underConstruction from "../img/Projects/under-construction.jpg";
import { Context } from "../App";
import { Link } from "react-router-dom";
import { pageTransition, pageVariants, projectTransition } from "../pages";
import { motion } from "framer-motion";
import { en, es } from "./translate";

const Projects = () => {
  const { screen, setScreen, theme, language } = useContext(Context);
  const [showAlert, setShowAlert] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [textAlert, setTextAlert] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState({
    textEcommerce: "",
    textMoba: "",
    textWeather: "",
    textMovie: "",
  });

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
      textEcommerce:  language.value === "en" || language === "en"  ? en.ecommerce : es.ecommerce,
    });
  };

  const onMouseOverMoba = () => {
    setText({
      ...text,
      textMoba:  language.value === "en" || language === "en"  ? en.moba : es.moba,
    });
  };

  const onMouseOverWeather = () => {
    setText({
      ...text,
      textWeather:  language.value === "en" || language === "en"  ? en.weather : es.weather,
    });
  };

  const onMouseOverMovie = () => {
    setText({
      ...text,
      textMovie:
       language.value === "en" || language === "en"  ? en.movies : es.movies
    });
  };

  const onMouseLeave = () => {
    setText({
      ...text,
      textEcommerce: "",
      textMoba: "",
      textWeather: "",
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
        style={{ display: screen === "menu" ? "none" : null }}
      >
        <div className={styles.container}>
          <p
            className={styles.textTitle}
            style={{
              color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
            }}
          >
            { language.value === "en" || language === "en"  ? en.title : es.title}
          </p>
        </div>
        <div className={styles.container}>
          <p
            className={styles.textSubTitle}
            style={{
              color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
              width: "50%",
            }}
          >
            { language.value === "en" || language === "en"  ? en.subtitle : es.subtitle}
          </p>
        </div>
        <div className={styles.container}>
          <p
            className={styles.textSubTitle}
            style={{
              fontSize: "20px",
              color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
              marginTop: "20px",
            }}
          >
            { language.value === "en" || language === "en"  ? en.filter : es.filter}
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
                Show All
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
              <p
                style={{
                  color: theme === "dark" ? "rgb(146, 145, 145)" : "#333",
                }}
              >
                ReactJS
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

        {showAlert === false ? (
          <div
            className={styles.alert}
            style={animate ? mountedStyle : unmountedStyle}
          >
            <span
              className="fas fa-exclamation-circle"
              id={styles.exclamationCircle}
            ></span>
            <span className={styles.msg}>
              <p style={{ color: "black" }}>Currently in deployment</p>
            </span>
            <span className={styles.closeBtn}>
              <span
                className="fas fa-times"
                id={styles.times}
                onClick={() => {
                  setShowAlert(false);
                }}
              ></span>
            </span>
          </div>
        ) : (
          <div
            className={styles.alert}
            style={animate ? mountedStyle : unmountedStyle}
          >
            <span
              className="fas fa-exclamation-circle "
              id={styles.exclamationCircle}
            ></span>
            <span className={styles.msg}>
              {textAlert === "ecommerce"
                ?  language.value === "en" || language === "en"  ? en.ecommerce_alert : es.ecommerce_alert
                : textAlert === "moba"
                ?  language.value === "en" || language === "en"  ? en.moba_alert : es.moba_alert
                : textAlert === "weather"
                ?  language.value === "en" || language === "en"  ? en.weather_alert : es.weather_alert
                : textAlert === "movies"
                ?  language.value === "en" || language === "en"  ? en.movies_alert : es.movies_alert
                : null}
            </span>
            <span className={styles.closeBtn}>
              <span
                className="fas fa-times"
                id={styles.exclamationCircleOpen}
                onClick={() => {
                  setShowAlert(false);
                  setAnimate(false);
                }}
              ></span>
            </span>
          </div>
        )}
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
                <span>
                  <p className={styles.projectsRowTitle}>
                    Henryfy{" "}
                    <i
                      class="fas fa-info-circle fa-0.5x"
                      id={styles.infoIcon}
                      onClick={() => {
                        setShowAlert(true);
                        setAnimate(true);
                        setTextAlert("ecommerce");
                      }}
                    ></i>
                  </p>
                </span>
                <Link to="/projects/henryfy">
                  <div
                    className={styles.curtain}
                    onMouseEnter={onMouseOverEcommerce}
                    onMouseLeave={onMouseLeave}
                  >
                    <p
                      className={styles.projectsRowSubTitle}
                      style={{ marginTop: "25px" }}
                    >
                      {text.textEcommerce}
                    </p>
                  </div>
                  <img
                    src={ecommerce}
                    className={styles.imgFirstRow}
                    style={{
                      width: "350px",
                    }}
                  />
                </Link>
              </motion.div>
            ) : null}
            {category === "showAll" ||
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
              >
                <span>
                  <p className={styles.projectsRowTitle}>
                    MOBA{" "}
                    <i
                      class="fas fa-info-circle fa-0.5x"
                      id={styles.infoIcon}
                      onClick={() => {
                        setShowAlert(true);
                        setAnimate(true);
                        setTextAlert("moba");
                      }}
                    ></i>
                  </p>
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
                  />
                </Link>
              </motion.div>
            ) : null}
          </div>

          <div className={styles.containerRow} id={styles.secondContainerRow}>
            {category === "showAll" ? (
              <motion.div
                className={styles.projectsRow}
                style={{ backgroundColor: "white", height: "202px" }}
                onClick={() => {
                  setShowAlert(true);
                  setAnimate(true);
                  setTextAlert("weather");
                }}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
              >
                <span>
                  <p className={styles.projectsRowTitle}>
                    Weather App{" "}
                    <i
                      class="fas fa-info-circle fa-0.5x"
                      id={styles.infoIcon}
                      onClick={() => {
                        setShowAlert(true);
                        setAnimate(true);
                        setTextAlert("weather");
                      }}
                    ></i>
                  </p>
                </span>
                {/* <Link to="/projects/weather-app"> */}
                <div
                  className={styles.curtainBelow}
                  onMouseEnter={onMouseOverWeather}
                  onMouseLeave={onMouseLeave}
                >
                  <p
                    className={styles.projectsRowSubTitle}
                    style={{ marginTop: "30px" }}
                  >
                    {text.textWeather}
                  </p>
                </div>
                <img src={underConstruction} className={styles.imgSecondRow} />
                {/* </Link> */}
              </motion.div>
            ) : null}
            {category === "showAll" ? (
              <motion.div
                className={styles.projectsRow}
                style={{ backgroundColor: "white", height: "202px" }}
                onClick={() => {
                  setShowAlert(true);
                  setAnimate(true);
                  setTextAlert("movies");
                }}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
              >
                <span>
                  <p className={styles.projectsRowTitle}>
                    Movies Finder{" "}
                    <i
                      class="fas fa-info-circle fa-0.5x"
                      id={styles.infoIcon}
                      onClick={() => {
                        setShowAlert(true);
                        setAnimate(true);
                        setTextAlert("movies");
                      }}
                    ></i>
                  </p>
                </span>
                {/* <Link to="/projects/movies-finder"> */}
                <div
                  className={styles.curtainBelow}
                  onMouseEnter={onMouseOverMovie}
                  onMouseLeave={onMouseLeave}
                >
                  <p
                    className={styles.projectsRowSubTitle}
                    style={{ marginTop: "30px" }}
                  >
                    {text.textMovie}
                  </p>
                </div>
                <img src={underConstruction} className={styles.imgSecondRow} />
                {/* </Link> */}
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
