import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  useLocation,
} from "react-router-dom";

import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Services from "../../pages/Service/Services";
import Testimonial from "../../pages/Testimonials/Testimonial";
import { AnimatePresence } from "framer-motion";

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
      path: "/service",
      element: <Services />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
  ]);
  return routes;
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <AppRoutes location={location} key={location.path} />
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
