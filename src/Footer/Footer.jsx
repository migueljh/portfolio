import React, { useContext, useState, useEffect } from "react";
import styles from "./footer.module.scss";
import { Context } from "../App";
import Switch from "react-switch";
import { Dropdown } from "semantic-ui-react";
import languages from "./languajeOptions";
import "semantic-ui-css/semantic.min.css";
import { en, es } from "./translate";

const Footer = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("checked") === "true"
  );
  const { screen, theme, setTheme, language, setLanguage } = useContext(
    Context
  );
  const handleSwitch = () => {
    setChecked(!checked);
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem(
      "theme",
      theme === "dark" ? "light" : theme === "light" ? "dark" : null
    );
  };

  useEffect(() => {
    localStorage.setItem("checked", checked);
  }, [checked]);

  const handleChange = (e, { value }) => {
    setLanguage({ value });
    localStorage.setItem("language", value);
  };

  console.log("language", language);
  console.log(localStorage);

  console.log("theme", theme);

  return (
    <div
      className={styles.footerSubContainer}
      style={{
        backgroundColor: theme === "dark" ? "#333" : "white",
        display: screen === "menu" ? "none" : null,
      }}
    >
      <div className={styles.flexRows}>
        <div className={styles.rows} id={styles.themeFooter}>
          <p
            className={styles.textFooter}
            style={{
              color: theme === "light" ? "#333" : "rgb(170, 169, 169)",
            }}
          >
            {!language ? null : language.value === "en" || language === "en" ? en.theme : es.theme}
          </p>
          <p style={{ marginLeft: "20px" }}>
            <Switch
              checked={checked}
              onChange={handleSwitch}
              handleDiameter={28}
              offColor="#fff"
              onColor="#333"
              offHandleColor="#fff"
              onHandleColor="#333"
              height={30}
              width={120}
              borderRadius={6}
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20,
                    color: "rgb(170, 169, 169)",
                    fontWeight: "800",
                    paddingRight: 0,
                  }}
                >
                  { !language ? null : language.value === "en" || language === "en" ? en.dark : es.dark}
                </div>
              }
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20,
                    color: "#333",
                    fontWeight: "800",
                    paddingRight: 0,
                  }}
                >
                  {!language ? null : language.value === "en" || language === "en" ? en.light : es.light}
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "rgb(170, 169, 169)",
                    fontSize: 18,
                  }}
                >
                  <i className="fas fa-moon"></i>
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#333",
                    fontSize: 18,
                  }}
                >
                  <i class="fas fa-sun"></i>
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </p>
        </div>
        <div className={styles.rows} id={styles.iconsFooter}>
          <p
            className={styles.textFooter}
            style={{
              color: theme === "light" ? "#333" : "rgb(170, 169, 169)",
              marginTop: "0px",
            }}
          >
            { !language ? null : language.value === "en" || language === "en" ? en.talk : es.talk}
          </p>

          <div className={styles.iconsRow}>
            <i
              class="fab fa-github-square fa-2x"
              style={{
                color: theme === "light" ? "#333" : "rgb(170, 169, 169)",
              }}
            ></i>
            <i 
              class="fab fa-linkedin fa-2x"
              style={{
                paddingLeft: "15px",
                color: theme === "light" ? "#333" : "rgb(170, 169, 169)",
              }}
            ></i>
          </div>
        </div>

        <div className={styles.rows} id={styles.languageFooter}>
          <p
            className={styles.textFooter}
            style={{
              color: theme === "light" ? "#333" : "rgb(170, 169, 169)",
            }}
          >
            { /* language.value === "en" ||  */language === "en"  
              ? en.language
              : es.language}
          </p>
          <Dropdown
            button
            className="icon"
            labeled
            selection
            icon="language"
            options={languages}
            text={
               /* language.value === "en" ||  */language === "en"  
                ? "English"
                : "Español"
            }
            onChange={handleChange}
            style={{
              backgroundColor: theme === "dark" ? "#333" : "white",
              color: theme === "dark" ? "rgb(170, 169, 169)" : "#333",
              fontSize: "18px",
              /* border : "none" */
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          className={styles.textSubFooter}
          style={{
            fontSize: "20px",
            color: theme === "light" ? "#333" : "white",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          { !language ? null : language.value === "en" || language === "en" ? en.credits : es.credits}
        </p>
      </div>
    </div>
  );
};

export default Footer;
