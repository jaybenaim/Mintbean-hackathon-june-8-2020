import React from "react";
import { connect } from "react-redux";
import { setColorScheme } from "../../redux/actions/paletteActions";
import { withRouter } from "react-router-dom";
import "../../assets/stylesheets/form.css";

class Form extends React.Component {
  state = {
    hue: "21",
    scheme: "triade",
    variation: "soft",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
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
        <label htmlFor="hue">Hue</label>

        <input
          type="text"
          name="scheme"
          placeholder="scheme"
          value={scheme}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="schemes">
          Scheme Type (mono, contrast, triade, tetrade, analogic)
        </label>

        <input
          type="text"
          name="variation"
          placeholder="variation"
          value={variation}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="variation">
          Variation (default, pastel, soft, light, hard, pale)
        </label>
        <br />
        <button
          type="submit"
          className="btn btn-outline-primary"
          onClick={this.update}
          placeholder="Update"
        >
          Update
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withRouter(connect(mapStateToProps, { setColorScheme })(Form));
