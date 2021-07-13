import React from "react";
import { Link } from "react-router-dom";

const ProjectBox = ({
  title,
  projectTitle,
  curtain,
  onMouseOver,
  onMouseLeave,
  subtitle,
  textCurtain,
  srcImg,
  classnameImg,
  urlName,
  index,
  projectIndex,
}) => {
  return (
    <>
      <span>
        <p className={title}>{projectTitle}</p>
      </span>
      <Link to={`/projects/${urlName}`}>
        <div
          className={curtain}
          onMouseEnter={(e) => onMouseOver(e, projectIndex)}
          onMouseLeave={onMouseLeave}
        >
          <p className={subtitle} style={{ marginTop: "25px" }}>
            {/* tengo 2 index, uno el que trae el objeto y el otro el que le asigno con el mouseover, asi puedo compararlos y que react entienda a cuál me refiero especificamente y no agregue el texto sobre los 3 */}
            {index === projectIndex ? textCurtain : null}
          </p>
        </div>
        <img src={srcImg} className={classnameImg} alt="" />
      </Link>
    </>
  );
};

export default ProjectBox;
