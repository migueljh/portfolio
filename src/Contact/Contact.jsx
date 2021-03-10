import React, { useEffect, useState, useContext } from "react";
import styles from "./contact.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../pages";
import styled from "styled-components";
import {en, es} from "./translate"

const ButtonContinue = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  width: 150px;
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
    background-color: ${({ theme }) =>
      theme === "dark" ? "#333" : "#fff"};#333;
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

const ButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  width: 250px;
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
    background-color: ${({ theme }) =>
      theme === "dark" ? "#333" : "#fff"};
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

  &:hover::before {
    left: 80%;
  }

  &:hover::after {
    right: 80%;
  }
`;

const Alert = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#333" : "#fff"};
  padding: 20px 40px;
  position: fixed;
  height: 130px;
  
  border-radius: 4px;
  border-left: 8px solid rgb(146, 145, 145);
  overflow: hidden;
  z-index: 999;
  width: 500px;
`;

const Contact = () => {
  const [page, setPage] = useState("");
  const [block, setBlock] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { screen, setScreen, theme, language } = useContext(Context);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const mountedStyle = { animation: `${styles.alertShow} 0.5s ease-in` };
  const unmountedStyle = {
    animation: `${styles.alertHide} 1s ease-out`,
    animationFillMode: "forwards",
  };

  const valideEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const onChangeInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendEmail = async (e) => {
    if (data.message) {
      setBlock(false);
      setShowAlert(true);
      setAnimate(true);
    } else {
      setBlock(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.message) {
      setBlock(false);
      try {
        let response = await axios.post("https://miguel-hernandez.herokuapp.com/send-email", {
          name: data.name,
          email: data.email,
          message: data.message, 
        });
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setBlock(true);
    }
    setData({ ...data, message: "" });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    setPage("first");
  }, []);

  useEffect(() => {
    setScreen("contact");
  }, []);

  const firstContinue = () => {
    if (data.name) {
      setPage("second");
      setBlock(false);
    } else {
      setBlock(true);
    }
  };

  const secondContinue = () => {
    if (valideEmail(data.email)) {
      setPage("third");
      setBlock(false);
    } else {
      setBlock(true);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ height: "100%" }}
    >
      <form
        style={{
          display: screen === "menu" ? "none" : null,
          backgroundColor: theme === "light" ? "#fff" : "#333",
        }}
        onSubmit={onSubmit}
      >
        <div className={styles.flexContainer}>
          <p
            className={styles.textTitle}
            style={{
              color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              marginBottom: "10px"
            }}
          >
            {language.value === "en" || language === "en"  ? en.title : es.title}
          </p>
        </div>
        <div className={styles.flexContainer}>
          <p
            className={styles.textSubTitle}
            style={{
              color: theme === "light" ? "#333" : "rgb(146, 145, 145)",
              width: "80%"
            }}
          >
            {language.value === "en" || language === "en"  ? en.subtitle : es.subtitle}
          </p>
        </div>
        <div>
          {page === "first" ? (
            <>
              <div className={styles.formContainer}>
                <div className={styles.formContact}>
                  <div className={styles.containerIcon}>
                    <i className="fas fa-user" id={styles.iconInput}></i>
                  </div>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    style={{
                      visibility: "visible",
                      backgroundColor: theme === "light" ? "#fff" : "#333",
                      color:
                        theme === "light" ? "#333" : "rgb(146, 145, 145)",
                    }}
                    value={data.name}
                    onChange={onChangeInput}
                    required="required"
                  />

                  <label
                    for="name"
                    className={styles.labelName}
                    style={{
                      borderBottom:
                        block === false
                          ? "1px solid rgb(146, 145, 145)"
                          : "1.5px solid #fb5c5b",
                    }}
                  >
                    <span className={styles.contentName}> {language.value === "en" || language === "en"  ? en.name : es.name} </span>
                  </label>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <ButtonContinue theme={theme} onClick={firstContinue}>
                  <p className={styles.btn}>{language.value === "en" || language === "en"  ? en.continue : es.continue}</p>
                </ButtonContinue>
              </div>
            </>
          ) : page === "second" ? (
            <>
              <div className={styles.formContainer}>
                <div className={styles.formContact}>
                  <div className={styles.containerIcon}>
                    <i class="fas fa-envelope" id={styles.iconInput}></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    autocomplete="off"
                    style={{
                      visibility: "visible",
                      backgroundColor: theme === "light" ? "#fff" : "#333",
                      color:
                        theme === "light" ? "#333" : "rgb(146, 145, 145)",
                    }}
                    value={data.email}
                    onChange={onChangeInput}
                    required="required"
                  />
                  <label
                    for="email"
                    className={styles.labelName}
                    style={{
                      borderBottom:
                        block === false
                          ? "1px solid rgb(146, 145, 145)"
                          : "1.5px solid #fb5c5b",
                    }}
                  >
                    <span className={styles.contentName}> {language.value === "en" || language === "en"  ? en.email : es.email} </span>
                  </label>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <ButtonContinue theme={theme} onClick={secondContinue}>
                  <p className={styles.btn}>{language.value === "en" || language === "en"  ? en.continue : es.continue}</p>
                </ButtonContinue>
              </div>
            </>
          ) : page === "third" ? (
            <>
              <div className={styles.formContainer}>
                <div className={styles.formContact}>
                  <div className={styles.containerIcon}>
                    <i
                      className="fas fa-pen-square"
                      id={styles.iconInput}
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <input
                    type="text"
                    name="message"
                    autocomplete="off"
                    style={{
                      visibility: "visible",
                      backgroundColor: theme === "light" ? "#fff" : "#333",
                      color:
                        theme === "light" ? "#333" : "rgb(146, 145, 145)",
                    }}
                    value={data.message}
                    onChange={onChangeInput}
                    required
                  />
                  <label
                    htmlFor="message"
                    className={styles.labelName}
                    style={{
                      borderBottom:
                        block === false
                          ? "1px solid rgb(146, 145, 145)"
                          : "1.5px solid #fb5c5b",
                    }}
                  >
                    <span className={styles.contentName}> {language.value === "en" || language === "en"  ? en.message : es.message} </span>
                  </label>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <ButtonSubmit theme={theme} onClick={sendEmail}>
                  <p className={styles.btn}>{language.value === "en" || language === "en"  ? en.submit : es.submit}</p>
                </ButtonSubmit>
              </div>

              {showAlert === true ? (
                <div className={styles.alert}>
                <Alert
                  theme={theme}
                  style={animate ? mountedStyle : unmountedStyle}
                  id={styles.alertalert}
                >
                  <div className={styles.secondFlexContainer}>
                    <span
                      className={styles.msg}
                      style={{
                        color:
                          theme === "dark" ? "#333" : "rgb(146, 145, 145)",
                        fontWeight: "800",
                      }}
                    >
                      {language.value === "en" || language === "en"  ? en.alert_msg : es.alert_msg}
                    </span>
                    <div className={styles.flexRow}>
                      <Link to="/">
                        <button
                          className={styles.btnAlert}
                          style={{ width: "140px" }}
                        >
                          <p className={styles.btnAlertText}>
                          {language.value === "en" || language === "en"  ? en.home : es.home}
                            <i
                              className="fas fa-home"
                              style={{ marginLeft: "5px" }}
                            ></i>
                          </p>
                        </button>
                      </Link>
                      <button
                        className={styles.btnAlert}
                        onClick={refreshPage}
                        style={{ marginLeft: "10px" }}
                      >
                        <p className={styles.btnAlertText}>
                        {language.value === "en" || language === "en"  ? en.send_another : es.send_another}
                          <i
                            className="fas fa-edit"
                            style={{ marginLeft: "5px" }}
                          ></i>
                        </p>
                      </button>
                    </div>
                  </div>
                </Alert>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
