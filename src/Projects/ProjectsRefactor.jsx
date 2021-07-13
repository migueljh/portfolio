import React, { useState, useEffect, useContext } from "react";
import styles from "./projects.module.scss";
import ecommerce from "../img/Projects/Henryfy/ecommercetickets.png";
import moba from "../img/Projects/Moba/mobalogin.jpg";
import aerolab from "../img/Projects/Aerolab/aerolab.PNG";
import { Context } from "../App";
import { pageTransition, pageVariants, projectTransition } from "../pages";
import { motion } from "framer-motion";
import { en, es } from "./translate";
import ProjectBox from "./ProjectBox";
import categories from "./categories";

const Projects = () => {
  const { screen, theme, language, setScreen } = useContext(Context);
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  let filteredProjects = [];
  let fontStyles = theme === "dark" ? "rgb(146, 145, 145)" : "#333";

  useEffect(() => {
    setCategory("show all");
    setScreen("project");
  }, [setScreen]);

  const onMouseOver = (specificText, projectIndex) => {
    setText(specificText);
    setId(projectIndex);
  };

  const onMouseLeave = () => {
    setText("");
  };

  const allProjects = [
    {
      henryfy: {
        title: "Henryfy",
        text: language === "en" ? en.ecommerce : es.ecommerce,
        img: ecommerce,
        url: "henryfy",
        categories: [
          "bootstrap",
          "express",
          "html5",
          "node",
          "passport",
          "postgres",
          "react",
          "redux",
          "sequelize",
          "show all",
        ],
      },
      moba: {
        title: "MOBA",
        text: language === "en" ? en.moba : es.moba,
        img: moba,
        url: "moba",
        categories: [
          "design",
          "express",
          "node",
          "postgres",
          "react native",
          "redux",
          "sequelize",
          "show all",
        ],
      },
      aerolab: {
        title: "Aerolab",
        text: language === "en" ? en.aerolab : es.aerolab,
        img: aerolab,
        url: "https://aerolab-challenge-puce.vercel.app/",
        categories: ["react", "redux", "show all"],
      },
    },
  ];

  allProjects.forEach((projects) => {
    Object.values(projects).forEach((project) => {
      if (project.categories.includes(category)) {
        filteredProjects.push(project);
      }
    });
  });

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
            {language.value === "en" || language === "en" ? en.title : es.title}
          </p>
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

        {/* Categories */}

        <div className={styles.rowFilter}>
          <div className={styles.subContainer}>
            {categories.map((category) => {
              return (
                <span className={styles.rowColumn}>
                  <p
                    id="categoriesList"
                    onClick={(e) =>
                      setCategory(e.target.innerText.toLowerCase())
                    }
                    style={{ color: fontStyles }}
                  >
                    {category}
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
              );
            })}
          </div>
        </div>

        {/* Projects */}

        <div className={styles.containerRow}>
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                className={styles.projectsRow}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={projectTransition}
                onClick={() => window.scrollTo(0, 0)}
                style={
                  project.title === "MOBA" ? { backgroundColor: "white" } : null
                }
              >
                <ProjectBox
                  title={styles.projectsRowTitle}
                  projectTitle={project.title}
                  curtain={styles.curtain}
                  onMouseOver={() => onMouseOver(project.text, index)}
                  onMouseLeave={onMouseLeave}
                  subtitle={styles.projectsRowSubTitle}
                  textCurtain={text}
                  srcImg={project.img}
                  classnameImg={styles.imgFirstRow}
                  urlName={project.url}
                  id={project.id}
                  index={index}
                  projectIndex={id}
                  key={index}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
