import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import About from "./views/About/About";
import { Technologies } from "./views/Technologies/Technologies";
import { FirstProject } from "./views/Projects/Subpages/FirstProject";

import './styles/Planets.css';

const Home = React.lazy(() => import("./views/Home/Home"));
const Planets = React.lazy(() => import("./components/Background/Planets"));

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
              element={<About triggerAnimation={triggerAnimation} />}
            />
            <Route
              path="/portfolioLiveTest/technologies"
              element={<Technologies triggerAnimation={triggerAnimation} />}
            />
            <Route path="/portfolioLiveTest/projects/first" element={<FirstProject triggerAnimation={triggerAnimation} />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
