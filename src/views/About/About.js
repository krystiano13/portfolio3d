import React from "react";

import './About.css';
import '../Wrapper.css';

const About = ({ triggerAnimation }) => {

    React.useEffect(() => {
        triggerAnimation(1);
    },[]);

    return (
      <div className="About Wrapper">
        <section className="About__content">
          <h1 className="About__content__title">About Me</h1>
          <section className="About__content__info">
            <div className="About__content__info__img" />
            <article className="About__content__info__art">
              <span>
                {" "}
                Jestem absolwentem technikum informatycznego. Po posiedzeniach w
                szkolnej ławce zajmowałem się nauką programowania, które w
                tamtym czasie stało się moim najważniejszym hobby. Chciałbym
                znacząco rozwinąć swoje umiejętności w tej dziedzinie poprzez
                rozpoczęcie pracy w zawodzie programisty
              </span>
              <button className="About__content__info__art__btn">Next</button>
            </article>
          </section>
        </section>
        <section className="About__waves">
          <div className="About__waves__wave wave1"></div>
          <div className="About__waves__wave wave2"></div>
          <div className="About__waves__wave wave3"></div>
          <div className="About__waves__wave wave4"></div>
        </section>
      </div>
    );
}

export { About };