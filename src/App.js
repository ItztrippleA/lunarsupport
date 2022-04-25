import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/Animated/AnimatedRoutes";
import Footer from "./Components/Footer/Footer";
// import Intro from "./Components/Intro/Intro";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* <div className="container">Hello</div> */}
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
