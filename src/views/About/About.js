import React, { useRef, lazy, Suspense } from "react";
import gsap from 'gsap';
import AboutWaves  from "./components/AboutWaves";
import AboutArticle from "./components/AboutArticle";
import { useNavigate } from "react-router";

import "./About.css";
import "../Wrapper.css";

const About = ({ triggerAnimation }) => {
  const AboutRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.set(AboutRef.current, { autoAlpha : 0, x : 1000 });
    gsap.to(AboutRef.current, { x : 0, autoAlpha : 1, duration : .75 });
  }, []);

  const goBack = () => {
    gsap.to(AboutRef.current, { autoAlpha : 0, x : 600, duration : .75 });
    setTimeout(() => triggerAnimation(0),500);
    setTimeout(() => navigate('/'),750);
  }

  return (
    <div ref={AboutRef} className="About Wrapper">
      <section className="About__content">
        <h1 className="About__content__title">About Me</h1>
        <section className="About__content__info">
          <div className="About__content__info__img" />
          <AboutArticle goBack={goBack} />
        </section>
      </section>
      <AboutWaves />
    </div>
  );
};

export default About;
