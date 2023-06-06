import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import gsap from 'gsap';

import "../Wrapper.css";
import "./Contact.css";

const Contact = ({ triggerAnimation }) => {
  const navigate = useNavigate();
  const contactRef = React.useRef(null);

  React.useEffect(() => {
    gsap.set(contactRef.current, { x: -500, autoAlpha: 0 });
    gsap.to(contactRef.current,{ x : 0, autoAlpha : 1, duration : .5 })
  },[]);

  const goBack = () => {
    gsap.to(contactRef.current, { x : -500, duration : .5, autoAlpha : 0 })
    .then(() => {
        triggerAnimation(5);
        navigate('/portfolioLiveTest/projects/third');
    })
  }

  return (
    <div ref={contactRef} className="Contact Wrapper">
      <section className="Contact__content">
        <h1 className="Contact__content__title">Contact & Links</h1>
        <main className="Contact__content__main">
          <a
            className="Contact__content__main__a"
            href="mailto:crystianotv@gmail.com"
          >
            <button className="ContactButton">Email</button>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="Contact__content__main__a"
            href="https://www.linkedin.com/in/krystian-zieja-1b9902253/"
          >
            <button className="ContactButton">Linkedin</button>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="Contact__content__main__a"
            href="https://github.com/krystiano13"
          >
            <button className="ContactButton">Github</button>
          </a>
          <button onClick={goBack} className="ContactButton">Back</button>
        </main>
      </section>
      <section className="Contact__waves">
        <div className="Contact__waves__wave wave1"></div>
        <div className="Contact__waves__wave wave2"></div>
        <div className="Contact__waves__wave wave3"></div>
        <div className="Contact__waves__wave wave4"></div>
      </section>
    </div>
  );
};

Contact.propTypes = {
    triggerAnimation : PropTypes.func
}

export default Contact;
