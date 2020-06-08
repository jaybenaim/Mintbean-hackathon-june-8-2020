import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPalettes } from "../../redux/actions/paletteActions";

class Saved extends React.Component {
  showPalettes = () => {
    const { userId } = this.props;
    this.props.getPalettes(userId);
  };
  render() {
    return <div className="">{this.showPalettes()}</div>;
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  palettes: state.palettes,
});

export default withRouter(connect(mapStateToProps, { getPalettes })(Saved));
