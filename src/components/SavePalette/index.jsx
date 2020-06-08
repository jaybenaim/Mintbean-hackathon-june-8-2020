import React from "react";
import local from "../../api/local";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class SavePalette extends React.Component {
  state = {};
  savePalette = () => {
    const { palette, userId } = this.props;
    local
      .post("/palettes", { palette, user: userId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  getPalettes = () => {
    const { userId } = this.props;
    local
      .get(`/palettes?userId=${userId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  componentDidUpdate() {
    this.getPalettes();
  }
  render() {
    this.getPalettes();
    return (
      <div onClick={() => this.savePalette()}>
        <FontAwesomeIcon icon={faHeart} /> Save Palette
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  palette: state.palette,
});

export default withRouter(connect(mapStateToProps, {})(SavePalette));
