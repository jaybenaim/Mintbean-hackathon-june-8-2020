import React, { Component } from "react";
import Panel from "../Pallete/Panel";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ColorScheme from "color-scheme";

class SavedPalette extends Component {
  state = {};

  getColorScheme = (hue, colorScheme, variation) => {
    let scheme = new ColorScheme();
    scheme.from_hue(hue).scheme(colorScheme).variation(variation);
    let colors = scheme.colors();

    return colors;
  };

  savedElements = () => {
    let elms = this.props.palettes;
    let newElems = [];
    elms.forEach((el, i) => {
      newElems.push(this.getColorScheme(el.hue, el.scheme, el.variation));
    });
    return newElems.map((el) => <Panel color={el} />);
  };

  render() {
    return <div className="saved-palettes"></div>;
  }
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, {})(SavedPalette));
