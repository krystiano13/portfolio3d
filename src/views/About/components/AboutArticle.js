import React from "react";
import PropTypes from 'prop-types';

const AboutArticle = ({ goBack, goNext }) => {
    return (
      <div className="About__content__info__art">
        <article className="About__content__info__art__text">
          I am a graduate of a technical high school specializing in computer
          science. After classes, I devoted myself to learning programming,
          which became my primary hobby at that time. I would like to
          significantly develop my skills in this field by starting a career as
          a programmer.
        </article>
        <div className="About__content__info__art__Buttons">
          <button
            onClick={goBack}
            className="About__content__info__art__Buttons__btn"
          >
            Back
          </button>
          <button
            onClick={goNext}
            className="About__content__info__art__Buttons__btn"
          >
            Next
          </button>
        </div>
      </div>
    );
}

AboutArticle.propTypes = {
  goBack : PropTypes.func,
  goNext : PropTypes.func
}

export default AboutArticle; 