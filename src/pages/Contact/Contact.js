import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Contact Us
      </h1>
    </motion.div>
  );
};
export default Contact;
