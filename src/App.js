import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import AnimatedRoutes from "./Components/Animated/AnimatedRoutes";
import Intro from "./Components/Intro/Intro";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* <div className="container">Hello</div> */}
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
