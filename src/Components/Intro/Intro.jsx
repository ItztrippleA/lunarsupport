// import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import astraunaut from "../../img/astraunaut.png";
import astronaut2 from "../../img/astronaut2.png";
// import Instagram from "../../img/instagram.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* <Particles params={particlesConfig}></Particles> */}
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span></span>
          <span>Human Powered Tech Centered</span>
          <span>
            As technology evolves, efficient consumer solutions become essential
            expecially for tech companies in niche industries. It is important
            that these solutions are aligned to meet both business and consumer
            needs. At Lunar Support, we bring veracious insights on how to defy
            this challenge. <br /> Lunar Support is an amalgamation of people,
            innovation and technology set out to knock down the barriers to
            unrivalled and relentless customer support for Life Science Software
            Companies.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">let's talk</button>
        </Link>
        {/* social icons */}
        {/* <div className="i-icons">
          <img
            src={astraunaut}
            alt=""
            style={{
              width: "200px",
            }}
          />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-26%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          src={astraunaut}
          alt=""
          style={{
            width: "150px",
          }}
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "60%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
          <img
            src={astronaut2}
            alt=""
            style={{
              width: "150px",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ top: "20%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Find" text2="Talent" />
        </motion.div>
        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "23rem" }}
          whileInView={{ left: "2.5rem" }}
          transition={transition}
          className="floating-divv"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Support" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
