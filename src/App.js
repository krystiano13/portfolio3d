import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Home from "./views/Home/Home";

const Background = React.lazy(() => import('./components/Background/Background'));

const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Background />
          </Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export { App };