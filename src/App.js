import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import "./styles/Planets.css";

const Home = React.lazy(() => import("./views/Home/Home"));
const Planets = React.lazy(() => import("./components/Background/Planets"));
const About = React.lazy(() => import("./views/About/About"));
const Technologies = React.lazy(() =>
  import("./views/Technologies/Technologies")
);
const Project = React.lazy(() => import("./views/Projects/Subpages/Project"));

const App = () => {
  const [animState, setAnimState] = React.useState(-1);

  const triggerAnimation = (animationId) => {
    setAnimState(animationId);
  };

  return (
    <div className="App">
      <Suspense fallback={<Loader></Loader>}>
        <BrowserRouter>
          <section className="PlanetsContainer">
            <Planets animState={animState} />
          </section>
          <Routes>
            <Route
              path="/portfolioLiveTest"
              element={<Home triggerAnimation={triggerAnimation} />}
            />
            <Route
              path="/portfolioLiveTest/about"
              element={
                <Suspense>
                  <About triggerAnimation={triggerAnimation} />
                </Suspense>
              }
            />
            <Route
              path="/portfolioLiveTest/technologies"
              element={
                <Suspense>
                  <Technologies triggerAnimation={triggerAnimation} />
                </Suspense>
              }
            />
            <Route
              path="/portfolioLiveTest/projects/first"
              element={
                <Suspense>
                  <Project
                    projectTitle="Pomodoro Timer"
                    arrayOfClasses={["p11", "p12", "p13"]}
                    triggerAnimation={triggerAnimation}
                    left={true}
                    live="https://krystiano13.github.io/pomodoro/"
                    code="https://github.com/krystiano13/pomodoro_src"
                  />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
