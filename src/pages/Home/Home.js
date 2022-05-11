import React from "react";
import { motion } from "framer-motion";
import Intro from "../../Components/Intro/Intro";
// import About from "../About/About";
// import FloatingDiv from "../../Components/FloatingDiv/FloatingDiv";
import "./Home.css";
import Services from "../Service/Services";
import Works from "../../Components/Works/Works";
// import TestimonialsSection from "../../Components/TestimonialsSection";
import "../../index.css";
import Servicess from "../Services/Servicess";
// import ServiceSection from "../Sections/ServiceSection";
import SupportedTech from "../../Components/SupportedTech/SupportedTech";
import Cards from "../../Components/SolutionsCard/Cards";
import OtherServices from "../../Components/OtherServices/OtherServices";
import Pricing from "../../Components/Pricing/Pricing";
const Home = () => {
  return (
    <motion.div
      className="container"
      style={{
        width: "80%",
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Intro />
      <Works />
      {/* <Services /> */}
      <Cards />
      <Servicess />
      {/* <ServiceSection /> */}
      {/* <FloatingDiv /> */}
      {/* <TestimonialsSection /> */}
      <SupportedTech />
      <OtherServices />
      <Pricing />
    </motion.div>
  );
};
export default Home;
