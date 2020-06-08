import React from "react";
import ColorScheme from "color-scheme";
import Panel from "./Panel";
import "../../assets/stylesheets/pallete.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setColorScheme } from "../../redux/actions/paletteActions";

const Palette = (props) => {
  const { hue, scheme: colorScheme, variation } = props.palette;
  // get scheme from colorScheme package
  const getColorScheme = (props) => {
    // create instance
    let scheme = new ColorScheme();
    // get Form details
    scheme.from_hue(hue).scheme(colorScheme).variation(variation);
    let colors = scheme.colors();

    return colors.map((color, i) => <Panel color={color} key={i} />);
  };

  return <div className="pallete">{getColorScheme()}</div>;
};

const mapStateToProps = (state) => ({
  palette: state.palette,
});

export default withRouter(
  connect(mapStateToProps, {
    setColorScheme,
  })(Palette)
);
