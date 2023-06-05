import React from "react";
import Project from "./Subpages/Project";
import PropTypes from "prop-types";
import { Routes } from "../../Routes";

const ProjectFirst = ({ triggerAnimation, animState }) => {
  return (
    <Project
      projectTitle={Routes[1].projectTitle}
      arrayOfClasses={Routes[1].arrayOfClasses}
      triggerAnimation={triggerAnimation}
      left={Routes[1].left}
      live={Routes[1].live}
      code={Routes[1].code}
      animation={Routes[1].animation}
      animState={animState}
    />
  );
};

ProjectFirst.propTypes = {
  triggerAnimation: PropTypes.func,
  animState: PropTypes.number,
};

export default ProjectFirst;
