import React, { useRef } from "react";
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useNavigate } from "react-router";
import photo from './photo.jpg';
import AboutArticle from './components/AboutArticle';
import AboutWaves from './components/AboutWaves';
import "./About.css";
import "../Wrapper.css";

const About = ({ triggerAnimation }) => {
  const AboutRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.to(AboutRef.current, { x : 0, autoAlpha : 1, duration : .75 });
  }, []);

  const goBack = () => {
    gsap.to(AboutRef.current, { autoAlpha : 0, x : 600, duration : .75 });
    setTimeout(() => triggerAnimation(0),500);
    setTimeout(() => navigate("/portfolioLiveTest"), 750);
  }

  return (
    <div ref={AboutRef} className="About Wrapper">
      <section className="About__content">
        <h1 className="About__content__title">About Me</h1>
        <section className="About__content__info">
          <div className="About__content__info__img">
            <img loading="eager" className="avatar" src={photo} />
          </div>
          <AboutArticle goBack={goBack} />
        </section>
      </section>
      <AboutWaves />
    </div>
  );
};

About.propTypes = {
  triggerAnimation : PropTypes.func
}

export default About;
