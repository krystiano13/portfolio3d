import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import gsap from "gsap";
import { HomeWaves } from "./HomeWaves";

import "./Home.css";
import "../Wrapper.css";

const Home = ({ triggerAnimation }) => {
  const navigate = useNavigate();
  const WrapperRef = React.useRef(null);

  React.useEffect(() => {
    gsap.set(WrapperRef.current, { x: 600, autoAlpha: 0, zIndex: 5 });
    gsap.fromTo(
      WrapperRef.current,
      { x: 600, autoAlpha: 0, zIndex: 5 },
      { x: 0, autoAlpha: 1, duration: 0.75 }
    );
  }, []);

  React.useEffect(() => {
    window.history.pushState(null, null, window.location.href);
  });

  const leaveAnimation = () => {
    gsap.to(WrapperRef.current, { x: 600, autoAlpha: 0, duration: 0.75 });
  };

  return (
      <div ref={WrapperRef} className="Home Wrapper">
        <section className="Home__content">
          <h1 className="Home__content__title">Krystian Zieja</h1>
          <h2 className="Home__content__subtitle">Frontend Developer</h2>
          <button
            onClick={() => {
              leaveAnimation();
              setTimeout(() => {
                triggerAnimation(1);
              }, 500);
              setTimeout(() => {
                navigate("/portfolioLiveTest/about");
              }, 750);
            }}
            className="Home__content__button"
          >
            Start
          </button>
        </section>
        <HomeWaves />
      </div>
  );
};

Home.propTypes = {
  triggerAnimation : PropTypes.func
}

export default Home;
