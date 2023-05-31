import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { About } from "./views/About/About";
import {
  MercuryPos,
  MercuryRot,
} from "./components/Background/Animations/MercuryAnim";

const Background = React.lazy(() =>
  import("./components/Background/Background")
);
const Home = React.lazy(() => import("./views/Home/Home"));

const App = () => {
  const [animState,setAnimState] = React.useState(0);

  const triggerAnimation = (animationId) => {
    setAnimState(animationId);
  }

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Background animState={animState} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home triggerAnimation={triggerAnimation} />}
            />
            <Route
              path="/about"
              element={<About triggerAnimation={triggerAnimation} />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
