import React from "react";
import PropTypes from "prop-types";

export const ProjectButtons = ({ goBack, viewProject, goNext }) => {
  return (
    <div className="Project__content__info__buttons">
      <button
        onClick={goBack}
        className="Project__content__info__buttons__button"
      >
        Back
      </button>
      <button
        onClick={viewProject}
        className="Project__content__info__buttons__button"
      >
        View Project
      </button>
      <button
        onClick={goNext}
        className="Project__content__info__buttons__button"
      >
        Next
      </button>
    </div>
  );
};

ProjectButtons.propTypes = {
  goBack: PropTypes.func,
  viewProject: PropTypes.func,
  goNext: PropTypes.func,
};
