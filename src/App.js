import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Testimonial from "./pages/Testimonials/Testimonial";
import Navbar from "./Components/Navbar/Navbar";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <div className="container">Hello</div> */}
      <AppRoutes />
    </Router>
  );
};

export default App;
