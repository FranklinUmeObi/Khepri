import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { ReactComponent as ImageLeft } from "../../Assets/Drawings/dreamer.svg";
import { ReactComponent as ImageRight } from "../../Assets/Drawings/balloons.svg";
function HomePage() {
  return (
    <div className="page-home">
      <div className="heroText">
        <h1>Modernising how we can help those in need</h1>
        <p>
          Khepri provides the technology needed for rough sleepers to receive
          donations from society in a world where nobody carries coins
        </p>
      </div>

      <div className="section2">
        <ImageLeft className="drawing"/>
        <div className="callToActionHome">
          <p className="callToActionText">
            If you are feeling charitable, please feel free to donate. This
            button will allow you to donae to the shared pot. This will evenly
            distribute funding to all khepri members
          </p>
          <Link to={"/donate"} className="button"> Donate </Link>
          
        </div>
        <ImageRight  className="drawing"/>
      </div>
    </div>
  );
}

export default HomePage;
