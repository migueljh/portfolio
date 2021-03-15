import React, { useEffect, useContext } from "react";
import styles from "./home.module.scss";
import { Context } from "../App";
/* import drawn_portrait from "../img/Home/migue copia 2 boca nueva1 sin fondo.png"; */
import drawn_portrait from "../img/Home/Untitled (15).png";
import drawn_portrait_dark from "../img/Home/Untitled (17).png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { en, es } from "./translate";
import resume_es from "../img/Resume/Miguel_Hernandez_ES.pdf";
import resume_en from "../img/Resume/Miguel_Hernandez_EN.pdf";
const Home = () => {
  const { screen, setScreen, theme, setTheme, language } = useContext(Context);

  useEffect(() => {
    setScreen("home");
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{
        display: screen === "menu" ? "none" : null,
        backgroundColor: theme === "light" ? "#fff" : "#333",
      }}
    >
      {" "}
      {/* si screen es menu, se desaparece el componente, esto es para manejar el tamaño del menu 
      y que no se vea el resto del height de los demás componentes atrás del menú */}
      <div className={styles.home}>
        <div className={styles.container}>
          <div
            className={styles.homeText}
            style={{ color: theme === "light" ? "#333" : "#fff" }}
          >
            <h1 className={styles.name}>Miguel Hernandez</h1>
            <h6>Full Stack Javascript Developer</h6>
            {/* <div style={{ width: "500px" }}> */}
            <p className={styles.smallIntro}>
              {" "}
              {!language ? null : language.value === "en" ||
                language === "en" ? (
                <p>
                  I'm a Web/Mobile Developer,{" "}
                  <a
                    href="/projects"
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    here
                  </a>{" "}
                  you can watch my projects
                </p>
              ) : (
                <p>
                  Soy un Programador Web/Mobile,{" "}
                  <a
                    href="/projects"
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    aquí
                  </a>{" "}
                  puedes ver mis projectos
                </p>
              )}
            </p>
            <p className={styles.smallIntroTwo}>
              {!language ? null : language.value === "en" ||
                language === "en" ? (
                <p>
                  <a
                    href="/contact"
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    here
                  </a>{" "}
                  you can contact me, and{" "}
                  <a
                    href={
                      !language
                        ? null
                        : language.value === "en" || language === "en"
                        ? resume_en
                        : resume_es
                    }
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    here
                  </a>{" "}
                  you can download my resume
                </p>
              ) : (
                <p>
                  <a
                    href="/contact"
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    aquí
                  </a>{" "}
                  puedes contactarme y{" "}
                  <a
                    href={
                      !language
                        ? null
                        : language.value === "en" || language === "en"
                        ? resume_en
                        : resume_es
                    }
                    style={{
                      color: theme === "dark" ? "white" : "#333",
                      textDecoration: "underline",
                    }}
                  >
                    aquí
                  </a>{" "}
                  puedes descargar mi CV
                </p>
              )}
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className={styles.person}>
          {theme === "light" ? (
            <img src={drawn_portrait_dark} className={styles.portrait} />
          ) : (
            <img src={drawn_portrait} className={styles.portrait} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
