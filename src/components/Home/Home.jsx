import React from "react";
import Pallete from "../Pallete";
import "../../assets/stylesheets/home.css";
import Form from "../Form";

const Home = () => {
  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Color Palette Generator</h3>
          <div className="palette-container">
            <Pallete />
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
