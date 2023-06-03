import React from "react";
import gsap from "gsap";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";

import "../../Wrapper.css";
import "../styles/Project.css";

const FirstProject = ({ triggerAnimation }) => {
  const ProjectRef = React.useRef(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    gsap.set(ProjectRef.current, { x: 500, autoAlpha: 0 });
    gsap.to(ProjectRef.current, { x: 0, autoAlpha: 1, duration: 0.75 });
  }, []);
  const goBack = () => {
    gsap.to(ProjectRef.current, { x: 500, autoAlpha: 0 , duration: .75});
    setTimeout(() => triggerAnimation(2), 500);
    setTimeout(() => navigate('/portfolioLiveTest/technologies') , 750);
  }
  return (
    <main ref={ProjectRef} className="Project Wrapper">
      <section className="Project__content">
        <h1 className="Project__content__title">Selected Projects</h1>
        <h2 className="Project__content__subtitle">Pomodoro Timer</h2>
        <section className="Project__content__info">
          <div className="Project__content__info__buttons">
            <button onClick={goBack} className="Project__content__info__buttons__button">
              Back
            </button>
            <button className="Project__content__info__buttons__button">
              View Project
            </button>
            <button className="Project__content__info__buttons__button">
              Next
            </button>
          </div>
          <div className="Project__content__info__screenShotViewer">
            <section className="dot" />
            <section className="dot" />
            <section className="dot" />
          </div>
        </section>
      </section>
      <section className="Project__waves">
        <div className="Project__waves__wave wave1"></div>
        <div className="Project__waves__wave wave2"></div>
        <div className="Project__waves__wave wave3"></div>
        <div className="Project__waves__wave wave4"></div>
      </section>
    </main>
  );
};

FirstProject.propTypes = {
    triggerAnimation : PropTypes.func
}

export { FirstProject };
