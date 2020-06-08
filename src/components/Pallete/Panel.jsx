import React from "react";

const Panel = (props) => {
  const styles = {
    backgroundColor: `#${props.color}`,
    height: "400px",
    width: "200px",
  };
  return <div className=" panel" style={styles}></div>;
};

export default Panel;
