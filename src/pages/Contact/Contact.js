import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../../Components/ContactSection/ContactSection";
import styled from "styled-components";
import Map from "../../Components/Map";

const Contact = () => {
  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <ContactSection />
      <Map />
    </motion.div>
  );
};
export default Contact;
