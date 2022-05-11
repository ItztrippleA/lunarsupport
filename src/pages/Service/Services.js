// import React, { useContext } from "react";
import "./Services.css";
import Card from "../../Components/Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
const Services = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: "#242d49" }}>Lunar</span>
        <span>support tiers</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">View more</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Support"}
            detail={
              "Tier 1 Lunar support teams solve user problems by following standard operating procedures (SOP). If no solutions are available..."
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "45rem", top: "12rem" }}
          whileInView={{ left: "34rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Responsibilities"}
            detail={
              "For complex issues that cannot be solved by the first line of support, we will involve our personnel ..."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          {/* <Card
            emoji={Glasses}
            heading={"Self service"}
            detail={
              "We will work with you to build FAQs and self-help wikis which customers can refer to...."
            }
          /> */}
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "25rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          {/* <Card
            emoji={Humble}
            heading={"First line of support"}
            detail={
              "For complex issues that cannot be solved by the first line of support, we will involve our personnel with an in-depth..."
            }
            color="rgba(252, 166, 31, 0.45)"
          /> */}
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};
export default Services;
