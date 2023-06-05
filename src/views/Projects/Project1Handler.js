import React from "react";
import Project from "./Subpages/Project";
import PropTypes from "prop-types";
import { Routes } from "../../Routes";

const ProjectFirst = ({ triggerAnimation, animState }) => {
  return (
    <Project
      projectTitle={Routes[0].projectTitle}
      arrayOfClasses={Routes[0].arrayOfClasses}
      triggerAnimation={triggerAnimation}
      left={Routes[0].left}
      live={Routes[0].live}
      code={Routes[0].code}
      animation={Routes[0].animation}
      animState={animState}
    />
  );
};

ProjectFirst.propTypes = {
  triggerAnimation: PropTypes.func,
  animState: PropTypes.number,
};

export default ProjectFirst;
