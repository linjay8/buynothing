import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#e3e5e8" : "#3A6944",
      color: trigger ? "#3A6944" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      padding: "5px 0px",
    },
  });
};

const ScrollToColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
