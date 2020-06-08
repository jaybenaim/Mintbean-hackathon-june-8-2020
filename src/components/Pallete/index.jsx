import React from "react";
import ColorScheme from "color-scheme";
import Panel from "./Panel";
import "../../assets/stylesheets/pallete.css";

const Pallete = () => {
  const getColorScheme = () => {
    let scheme = new ColorScheme();
    scheme.from_hue(21).scheme("triade").variation("soft");
    let colors = scheme.colors();

    return colors.map((color, i) => <Panel color={color} key={i} />);
  };

  return <div className="pallete">{getColorScheme()}</div>;
};

export default Pallete;
