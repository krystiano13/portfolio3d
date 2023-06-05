import React from "react";
import Project from "./Subpages/Project";
import PropTypes from "prop-types";
import { Routes } from "../../Routes";

const ProjectFirst = ({ triggerAnimation, animState }) => {
  return (
    <Project
      projectTitle={Routes[2].projectTitle}
      arrayOfClasses={Routes[2].arrayOfClasses}
      triggerAnimation={triggerAnimation}
      left={Routes[2].left}
      live={Routes[2].live}
      code={Routes[2].code}
      animation={Routes[2].animation}
      animState={animState}
    />
  );
};

ProjectFirst.propTypes = {
  triggerAnimation: PropTypes.func,
  animState: PropTypes.number,
};

export default ProjectFirst;
