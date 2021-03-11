import React, { useState, useContext, useEffect } from "react";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";
import { Context } from "../App";
import styled from "styled-components";
import logoLight from "../img/Menu/Untitled (10).png";
import logoDark from "../img/Menu/Untitled (11).png";
import { en, es } from "./translate";

const StyledMenu = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  z-index: 999999999999999;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-flow: column nowrap;
  right: 80px;

  div {
    width: 2rem;
    height: 4px;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ menu }) => (menu ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ menu }) => (menu ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ menu }) => (menu ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ menu }) => (menu ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const SubContainer = styled.div`
  z-index: 999999999;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  font-size: 44px;
  color: white;
  letter-spacing: 2px;
  margin-top: -92px;
  right: 0px;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  flex-direction: column;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #5a5a5a;
  font-weight: 700;
  animation: animSubContainer 1s forwards;
`;

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const [animate, setAnimate] = useState(false);

  const mountedStyle = { animation: `${styles.inAnimation} 300ms ease-in` };
  const unmountedStyle = {
    animation: `${styles.outAnimation} 600ms ease-out`,
    animationFillMode: "forwards",
  };

  const { screen, setColorMenu, setScreen, theme, language } = useContext(
    Context
  );

  const globalMenu = () => {
    setMenu(false);
    setAnimate(false);
    setColorMenu(false);
  };

  const openMenu = () => {
    setMenu(!menu);
    setColorMenu(false);
    if (menu === false) {
      setScreen("menu");
    } else {
      setScreen("");
    }
  };

  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundColor: theme === "light" ? "#fff" : "#333" }}
      >
        <div className={styles.logo}>
          {theme === "light" ? <img src={logoLight} className={styles.logoNav}/> : <img src={logoDark} className={styles.logoNav}/>}
        </div>

        <div className={styles.styledMenuContainer}>
          <StyledMenu menu={menu} onClick={openMenu}>
            <div
              style={{
                backgroundColor: theme === "light" ? "#333" : "white",
              }}
            />
            <div
              style={{
                backgroundColor: theme === "light" ? "#333" : "white",
              }}
            />
            <div
              style={{
                backgroundColor: theme === "light" ? "#333" : "white",
              }}
            />
          </StyledMenu>
        </div>
      </header>
      <div className={styles.menu}>
        {menu === true ? (
          <ul>
            <div
              className={styles.containerList}
              style={
                (animate ? mountedStyle : unmountedStyle,
                {
                  width: screen === "moba" ? "100%" : null,
                  backgroundColor: theme === "light" ? "#fff" : "#333",
                })
              }
            >
              <div
                className={styles.subContainerList}
                style={{
                  backgroundColor: theme === "dark" ? "#333" : null,
                }}
              >
                <div style={{ marginLeft: "-15px" }}>
                  <div className={styles.textList} onClick={globalMenu}>
                    <li>
                      <Link to="/">
                        <p
                          className={styles.menuText}
                          style={{ marginTop: "15px" }}
                        >
                          { !language ? null : language.value === "en" || language === "en" ? en.home : es.home}
                        </p>
                        <div
                          className={styles.lineOne}
                          style={{ marginTop: "0px" }}
                        ></div>
                        <div
                          className={styles.lineTwo}
                          style={{
                            border: theme === "light" ? " 2px solid #333" : null,
                            backgroundColor: theme === "dark" ? "#2e2e2e" : null,
                          }}
                        ></div>
                      </Link>
                    </li>
                  </div>
                  <div className={styles.textList} onClick={globalMenu}>
                    <li>
                      <Link to="/projects">
                        <p
                          className={styles.menuText}
                          style={{ marginTop: "15px" }}
                        >
                          { !language ? null : language.value === "en" || language === "en" ? en.projects : es.projects}
                        </p>
                        <div className={styles.lineOne}></div>
                        <div
                          className={styles.lineTwo}
                          style={{
                            borderBottom:
                              theme === "light" ? " 2px solid #333" : null,
                            borderLeft:
                              theme === "light" ? " 2px solid #333" : null,
                            borderRight:
                              theme === "light" ? " 2px solid #333" : null,
                            backgroundColor: theme === "dark" ? "#2e2e2e" : null,
                          }}
                        ></div>
                      </Link>
                    </li>
                  </div>
                  <div className={styles.textList} onClick={globalMenu}>
                    <li>
                      <Link to="/resume">
                        <p
                          className={styles.menuText}
                          style={{ marginTop: "15px" }}
                        >
                          { !language ? null : language.value === "en" || language === "en" ? en.resume : es.resume}
                        </p>
                        <div className={styles.lineOne}></div>
                        <div
                          className={styles.lineTwo}
                          style={{
                            borderBottom:
                              theme === "light" ? " 2px solid #333" : null,
                            borderLeft:
                              theme === "light" ? " 2px solid #333" : null,
                            borderRight:
                              theme === "light" ? " 2px solid #333" : null,
                            backgroundColor: theme === "dark" ? "#2e2e2e" : null,
                          }}
                        ></div>
                      </Link>
                    </li>
                  </div>

                  <div className={styles.textList} onClick={globalMenu}>
                    <li>
                      <Link to="/contact">
                        <p
                          className={styles.menuText}
                          style={{ marginTop: "15px" }}
                        >
                          { !language ? null : language.value === "en" || language === "en" ? en.contact : es.contact}
                        </p>
                        <div className={styles.lineOne}></div>
                        <div
                          className={styles.lineTwo}
                          style={{
                            borderBottom:
                              theme === "light" ? " 2px solid #333" : null,
                            borderLeft:
                              theme === "light" ? " 2px solid #333" : null,
                            borderRight:
                              theme === "light" ? " 2px solid #333" : null,
                            backgroundColor: theme === "dark" ? "#2e2e2e" : null,
                          }}
                        ></div>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        ) : (
          <SubContainer
            theme={theme}
            style={animate ? mountedStyle : unmountedStyle}
          ></SubContainer>
        )}
      </div>
    </>
  );
};

export default Menu;

{
  /*  */
}
