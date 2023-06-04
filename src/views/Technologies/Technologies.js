import React from "react";
import PropTypes from "prop-types";
import { techList } from "./techlist";
import gsap from "gsap";
import { useNavigate } from "react-router";

import "./Technologies.css";
import "../Wrapper.css";

const Technologies = ({ triggerAnimation }) => {
  const ref = React.useRef(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    gsap.set(ref.current, { x: -1000, autoAlpha: 0 });
    gsap.to(ref.current, { x: 0, autoAlpha: 1, duration: 0.75 });
  }, []);

  const goBack = () => {
    gsap.to(ref.current, { x: -1000, autoAlpha: 0, duration: 0.5 });
    setTimeout(() => {
      triggerAnimation(1);
    }, 500);
    setTimeout(() => {
      navigate("/portfolioLiveTest/about");
    }, 750);
  };

  const goNext = () => {
    gsap.to(ref.current, { x: -1000, autoAlpha: 0, duration: 0.5 });
     setTimeout(() => {
       triggerAnimation(3);
     }, 500);
     setTimeout(() => {
       navigate("/portfolioLiveTest/projects/first");
     }, 750);
  }

  return (
    <div ref={ref} className="Technologies Wrapper">
      <section className="Technologies__content">
        <h1 className="Technologies__content__title">Technologies</h1>
        <h2 className="Technologies__content__subtitle">That I know :</h2>
        <div className="Technologies__content__techSection">
          {techList.know.map((item) => (
            <div key={item} className="skill">
              {item}
            </div>
          ))}
        </div>
        <h2 className="Technologies__content__subtitle">
          That I&apos;m learning
        </h2>
        <div className="Technologies__content__techSection">
          {techList.learn.map((item) => (
            <div key={item} className="skill">
              {item}
            </div>
          ))}
        </div>
        <div className="Technologies__content__Buttons">
          <button
            onClick={() => goBack()}
            className="Technologies__content__Buttons__btn"
          >
            Back
          </button>
          <button onClick={() => goNext()} className="Technologies__content__Buttons__btn">Next</button>
        </div>
      </section>
      <section className="Technologies__waves">
        <div className="Technologies__waves__wave wave1"></div>
        <div className="Technologies__waves__wave wave2"></div>
        <div className="Technologies__waves__wave wave3"></div>
        <div className="Technologies__waves__wave wave4"></div>
      </section>
    </div>
  );
};

Technologies.propTypes = {
  triggerAnimation: PropTypes.func,
};

export default Technologies;
