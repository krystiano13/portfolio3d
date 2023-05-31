import React from "react";
import { useNavigate } from "react-router";

import "./Home.css";
import "../Wrapper.css";

const Home = ({ triggerAnimation }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    triggerAnimation(0);
  }, []);
  React.useEffect(() => {
    window.history.pushState(null, null, window.location.href);
  });

  return (
    <div className="Home Wrapper">
      <section className="Home__content">
        <h1 className="Home__content__title">Krystian Zieja</h1>
        <h2 className="Home__content__subtitle">Frontend Developer</h2>
        <button
          onClick={() => {
            navigate("/about");
          }}
          className="Home__content__button"
        >
          Start
        </button>
      </section>
      <section className="Home__waves">
        <div className="Home__waves__wave wave1"></div>
        <div className="Home__waves__wave wave2"></div>
        <div className="Home__waves__wave wave3"></div>
        <div className="Home__waves__wave wave4"></div>
      </section>
    </div>
  );
};

export default Home;
