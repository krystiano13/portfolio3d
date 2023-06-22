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
const ProjectFirst = React.lazy(() =>
  import("./views/Projects/Project1Handler")
);
const ProjectSecond = React.lazy(() =>
  import("./views/Projects/Project2Handler")
);
const ProjectThird = React.lazy(() =>
  import("./views/Projects/Project3Handler")
);
const Contact = React.lazy(() => import("./views/Contact/Contact"));

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
          <section className="PageWrapper">
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
                    <ProjectFirst
                      triggerAnimation={triggerAnimation}
                      animState={animState}
                    />
                  </Suspense>
                }
              />
              <Route
                path="/portfolioLiveTest/projects/second"
                element={
                  <Suspense>
                    <ProjectSecond
                      triggerAnimation={triggerAnimation}
                      animState={animState}
                    />
                  </Suspense>
                }
              />
              <Route
                path="/portfolioLiveTest/projects/third"
                element={
                  <Suspense>
                    <ProjectThird
                      triggerAnimation={triggerAnimation}
                      animState={animState}
                    />
                  </Suspense>
                }
              />
              <Route
                path="/portfolioLiveTest/contact"
                element={
                  <Suspense>
                    <Contact triggerAnimation={triggerAnimation} />
                  </Suspense>
                }
              />
            </Routes>
          </section>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
