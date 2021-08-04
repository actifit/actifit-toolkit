import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image width="32" height="32" href="/actifit_logo.png"/>
    </Svg>
  );
};

export default Icon;
