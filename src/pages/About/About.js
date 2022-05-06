import React from "react";
import { motion } from "framer-motion";
// import Intro from "../../Components/Intro/Intro";
const About = () => {
  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        About
      </h1>
      {/* <Intro /> */}
    </motion.div>
  );
};
export default About;
