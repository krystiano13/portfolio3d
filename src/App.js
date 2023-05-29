import React, { Suspense } from "react";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

const Background = React.lazy(() => import('./components/Background/Background'));

const App = () => {
    return (
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Background />
        </Suspense>
      </div>
    );
}

export { App };