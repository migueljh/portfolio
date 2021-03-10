import React, { useEffect, useContext } from "react";
import styles from "./home.module.scss";
import { Context } from "../App";
import drawn_portrait from "../img/Home/migue copia 2 boca nueva1 sin fondo.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {en, es} from "./translate"
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
        
          <div className={styles.homeText} style={{color: theme === "light" ? "#333" : "#fff"}}>
            
            <h1 className={styles.name}>Miguel Hernandez</h1>
            <h6>Full Stack Javascript Developer</h6>
            {/* <div style={{ width: "500px" }}> */}
              <p className={styles.smallIntro}>
                {" "}
                { /* language.value === "en" ||  */language === "en"  ? en.title : es.title}
              </p>
              <p className={styles.smallIntroTwo}>
              { /* language.value === "en" ||  */language === "en"  ? <p>here you can contact me, and here you can download my resume</p>:<p>aquí puedes contactarme y aquí puedes descargar mi CV</p>}
              </p>
            {/* </div> */}
            
          </div>
          
        </div>
        <div className={styles.person}>
            <img
              src={drawn_portrait}
              className={styles.portrait}
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
