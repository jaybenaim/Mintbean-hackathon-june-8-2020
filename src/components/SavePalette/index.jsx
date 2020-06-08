import React from "react";
import local from "../../api/local";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class SavePalette extends React.Component {
  savePalette = () => {
    const { palette, userId } = this.props;
    local
      .post("/palettes", { palette, user: userId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
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
