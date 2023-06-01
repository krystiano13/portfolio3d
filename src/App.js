import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";

const Home = React.lazy(() => import('./views/Home/Home'));
const About = React.lazy(() => import('./views/About/About'));

const App = () => {
  const [animState,setAnimState] = React.useState(0);
  const [ready,setReady] = React.useState(false);

  const triggerAnimation = (animationId) => {
    setAnimState(animationId);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Background ready={() => setReady(true)} animState={animState} />
        <Routes>
          <Route
            path="/portfolioLiveTest"
            element={
              ready ? (
                <Home ready={ready} triggerAnimation={triggerAnimation} />
              ) : null
            }
          />
          <Route
            path="/portfolioLiveTest/about"
            element={<About triggerAnimation={triggerAnimation} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
