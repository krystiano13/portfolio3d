import React from "react";
import PropTypes from 'prop-types';

const AboutArticle = ({ goBack }) => {
    return (
      <div className="About__content__info__art">
        <article className="About__content__info__art__text">
          Jestem absolwentem technikum informatycznego. Po posiedzeniach w
          szkolnej ławce zajmowałem się nauką programowania, które w tamtym
          czasie stało się moim najważniejszym hobby. Chciałbym znacząco
          rozwinąć swoje umiejętności w tej dziedzinie poprzez rozpoczęcie pracy
          w zawodzie programisty
        </article>
        <div className="About__content__info__art__Buttons">
          <button onClick={goBack} className="About__content__info__art__Buttons__btn">
            Back
          </button>
          <button className="About__content__info__art__Buttons__btn">
            Next
          </button>
        </div>
      </div>
    );
}

AboutArticle.propTypes = {
  goBack : PropTypes.func
}

export default AboutArticle; 