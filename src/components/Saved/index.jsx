import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import local from "../../api/local";
import SavedPalette from "./SavedPalette";
// import { getPalettes } from "../../redux/actions/paletteActions";

class Saved extends React.Component {
  state = {
    palettes: [],
  };

  getPalettes = () => {
    const { userId } = this.props;
    const { palettes } = this.state;

    local
      .get(`/palettes?userId=${userId}`)
      .then((res) => {
        this.setState({ palettes: [...palettes, ...res.data] });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getPalettes();
  }

  render() {
    const { palettes } = this.state;
    return (
      <div className="">
        <SavedPalette palettes={palettes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  palettes: state.palettes,
});

export default withRouter(connect(mapStateToProps, {})(Saved));
