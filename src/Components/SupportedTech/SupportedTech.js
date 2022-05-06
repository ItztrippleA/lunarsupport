import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../img/one.png";
import img2 from "../../img/two.png";
import img3 from "../../img/three.png";
import img4 from "../../img/four.png";
import img5 from "../../img/five.png";
import img6 from "../../img/six.png";
import img7 from "../../img/seven.png";
import img8 from "../../img/eight.png";
import img9 from "../../img/nine.png";
import img10 from "../../img/ten.png";
import "./SupportTech.css";

function SupportedTech() {
  return (
    <div className="App">
      <div className="title">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: "#242d49" }}></span>
          <span>How it works: Tech</span>
          <spane style={{ width: "500px", alignSelf: "center" }}>
            We connect with all technologies for a seamless end to end support
            experience. id put real software logos during content transfer these
            are placeholders
          </spane>
        </div>
      </div>
      <Marquee direction="right" speed={100} delay={5}>
        <div className="image_wrapper">
          <img src={img1} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img2} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img3} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img6} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img7} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img8} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img9} alt="" />
        </div>
        <div className="image_wrapper">
          <img src={img10} alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default SupportedTech;
