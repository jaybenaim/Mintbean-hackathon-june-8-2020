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

    return colors.map((color, i) => <Panel color={color} key={i} />);
  };

  savedElements = () => {
    let elms = this.props.palettes;
    let newElems = [];
    elms.forEach((el, i) => {
      return this.getColorScheme(el.hue, el.scheme, el.variation);
    });
  };

  render() {
    return (
      <div className="saved-palettes">
        Saved Palettes
        {this.savedElements()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, {})(SavedPalette));
