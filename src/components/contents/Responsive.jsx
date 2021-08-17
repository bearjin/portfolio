import React from "react";
import { useMediaQuery } from "react-responsive";

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(max-width:1024px)"
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>
}

const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:1025px)"
  });
  return <React.Fragment>{isPc && children}</React.Fragment>
}

export { Tablet, Pc };