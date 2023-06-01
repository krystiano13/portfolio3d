import React, { Suspense } from "react";
import "./Background.css";
import { Loader } from "../Loader/Loader";

const Planets = React.lazy(() => import("./Planets"));

const Background = ({ animState,ready }) => {
  return (
    <section className="BackgroundContainer">
      <Suspense fallback={<Loader></Loader>}>
        <Planets ready={() => ready()} animState={animState} />
      </Suspense>
    </section>
  );
};

export default Background;
