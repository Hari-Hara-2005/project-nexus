import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ScrollDown = () => {
  const ScrollContainer = styled(Box)({
    position: "absolute",
    bottom:"50px",
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const ScrollSpan = styled("span")(({ delay }) => ({
    display: "block",
    width: "20px",
    height: "20px",
    borderBottom: "1px solid #fff",
    borderRight: "1px solid #fff",
    transform: "rotate(45deg)",
    margin: "-10px",
    animation: "animate 2s infinite",
    animationDelay: delay,
    "@keyframes animate": {
      "0%": {
        opacity: 0,
        transform: "rotate(45deg) translate(-20px, -20px)",
      },
      "50%": {
        opacity: 1,
      },
      "100%": {
        opacity: 0,
        transform: "rotate(45deg) translate(20px, 20px)",
      },
    },
  }));

  return (
    <ScrollContainer>
      <ScrollSpan delay="0s" />
      <ScrollSpan delay="-0.2s" />
      <ScrollSpan delay="-0.4s" />
    </ScrollContainer>
  );
};

export default ScrollDown;
