import React from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { ViewProject } from "./ViewProject";
import { ProjectWaves } from "./ProjectWaves";

import "../../Wrapper.css";
import "../styles/Project.css";
import { ProjectButtons } from "./ProjectButtons";
import { ScreenShotViewer } from "./ScreenShotViewer";

const Project = ({
  triggerAnimation,
  arrayOfClasses,
  projectTitle,
  left,
  live,
  code,
  animation,
}) => {
  const ProjectRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const idRef = React.useRef(0);
  const navigate = useNavigate();
  const [image, setImage] = React.useState(arrayOfClasses[0]);
  const [id, setId] = React.useState(0);
  const [view, setView] = React.useState(false);

  const arrayOfId = [0, 1, 2];

  React.useEffect(() => {
    idRef.current = id;
  }, [id]);

  React.useEffect(() => {
    gsap.set(ProjectRef.current, { x: left ? 500 : -500, autoAlpha: 0 });
    gsap.to(ProjectRef.current, { x: 0, autoAlpha: 1, duration: 0.5 });

    clearInterval();

    setInterval(() => {
      if (idRef.current !== 2) changeImage(idRef.current + 1);
      else changeImage(0);
    }, 7000);
  }, []);

  const disableView = () => {
    setView(false);
  };

  const viewProject = () => {
    setView(true);
  };

  const changeImage = (id) => {
    setId(id);
    gsap.to(imageRef.current, { autoAlpha: 0, duration: 0.25 }).then(() => {
      setImage(arrayOfClasses[id]);
    });
    gsap.to(imageRef.current, { autoAlpha: 1, duration: 0.25, delay: 0.5 });
  };

  const goBack = () => {
    gsap.to(ProjectRef.current, {
      x: left ? 500 : -500,
      autoAlpha: 0,
      duration: 0.75,
    });
    setTimeout(() => triggerAnimation(2), 500);
    setTimeout(() => navigate("/portfolioLiveTest/technologies"), 750);
  };

  const goNext = () => {
    gsap.to(ProjectRef.current, { x: left ? 500 : -500, autoAlpha: 0, duration: .5 })
    .then(() => setTimeout(() => {
       switch (animation) {
         case "mars":
           triggerAnimation(4);
           break;
         case "jupiter":
           triggerAnimation(5);
           break;
       }
    },100))
    setTimeout(() => navigate("/portfolioLiveTest/projects/second"), 750);
  }

  return (
    <main
      ref={ProjectRef}
      className={
        left === true ? "Project Wrapper left" : "Project Wrapper right"
      }
    >
      {view === true ? (
        <ViewProject live={live} code={code} disableView={disableView} />
      ) : (
        <section ref={contentRef} className="Project__content">
          <h1
            className={
              left
                ? "Project__content__title rightText"
                : "Project__content__title leftText"
            }
          >
            Selected Projects
          </h1>
          <h2
            className={
              left
                ? "Project__content__subtitle rightText"
                : "Project__content__subtitle leftText"
            }
          >
            {projectTitle}
          </h2>
          <section className="Project__content__info">
            <ProjectButtons goNext={goNext} goBack={goBack} viewProject={viewProject} />
            <ScreenShotViewer
              image={image}
              imageRef={imageRef}
              id={id}
              arrayOfId={arrayOfId}
              changeImage={changeImage}
            />
          </section>
        </section>
      )}
      <ProjectWaves />
    </main>
  );
};

Project.propTypes = {
  triggerAnimation: PropTypes.func,
  arrayOfClasses: PropTypes.arrayOf(PropTypes.string),
  projectTitle: PropTypes.string,
  left: PropTypes.bool,
  live: PropTypes.string,
  code: PropTypes.string,
  animation: PropTypes.string,
  animState: PropTypes.number
};

export default Project;
