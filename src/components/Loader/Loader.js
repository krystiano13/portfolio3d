import React from "react";
import { Dna } from "react-loader-spinner";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      <Dna width="25vh" height="25vh" ariaLabel="Loading" />
    </div>
  );
};

export { Loader };
