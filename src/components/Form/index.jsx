import React from "react";
import { connect } from "react-redux";
import { setColorScheme } from "../../redux/actions/paletteActions";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  state = {
    hue: "21",
    scheme: "triade",
    variation: "soft",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  update = (e) => {
    e.preventDefault();
    this.props.setColorScheme(this.state);
  };
  render() {
    const { hue, scheme, variation } = this.state;
    return (
      <form>
        <input
          type="text"
          name="hue"
          value={hue}
          placeholder="hue"
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="scheme"
          placeholder="scheme"
          value={scheme}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="variation"
          placeholder="variation"
          value={variation}
          onChange={this.handleChange}
        ></input>
        <button type="submit" onClick={this.update} placeholder="Update">
          Update
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  palette: { hue: state.hue, scheme: state.scheme, variation: state.variation },
});

export default withRouter(connect(mapStateToProps, { setColorScheme })(Form));
