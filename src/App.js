import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

const Home = React.lazy(() => import("./views/Home/Home"));
const About = React.lazy(() => import("./views/About/About"));
const Planets = React.lazy(() => import("./components/Background/Planets"));

const App = () => {
  const [animState, setAnimState] = React.useState(0);

  const triggerAnimation = (animationId) => {
    setAnimState(animationId);
  };

  return (
    <div className="App">
      <Suspense fallback={<Loader></Loader>}>
        <BrowserRouter>
          <Planets animState={animState} />
          <Routes>
            <Route
              path="/portfolioLiveTest"
              element={<Home triggerAnimation={triggerAnimation} />}
            />
            <Route
              path="/portfolioLiveTest/about"
              element={<About triggerAnimation={triggerAnimation} />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
