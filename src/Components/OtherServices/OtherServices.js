import React, { useState } from "react";
// import "./OtherServices.css";
// import ParticlesBackground from "../Particles/ParticlesBackground";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.scss";
import Top from "./Top";

const durationRegular = 0.35;
const delayRegular = 0.3;
const easeRegular = [0.83, 0, 0.17, 1];

const variantsBottom = {
  initial: {
    height: 0,
    transition: {
      duration: durationRegular,
      delay: delayRegular,
      ease: easeRegular,
    },
  },
  open: {
    height: 300,
    transition: {
      duration: durationRegular,
      delay: delayRegular,
      ease: easeRegular,
    },
  },
  close: {
    height: 0,
    transition: {
      duration: durationRegular,
      delay: delayRegular,
      ease: easeRegular,
    },
  },
};

const variants = {
  transition: {
    duration: durationRegular,
    ease: easeRegular,
  },
};

function OtherServices() {
  return (
    <>
      <div className="awesome">
        {/* dark Mode */}
        <span style={{ color: "#242d49" }}></span>
        <span style={{ alignSelf: "center" }}>More solutions</span>
        <spane style={{ width: "500px", alignSelf: "center" }}></spane>
      </div>
      <div className="otherServicesContainer">
        <div className="appp">
          <AnimateSharedLayout>
            <Item heading="ECOMMERCE AND RETAIL" />
            <Item heading="SAAS" />
            <Item heading="WORDPRESS" />
          </AnimateSharedLayout>
        </div>
        <div className="appp">
          <AnimateSharedLayout>
            <Item heading="STARTUPS" />
            <Item heading="HOW IT WORKS" />
            <Item heading="AFTER HOURS" />
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  );
}
const Bottom = (props) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          variants={variantsBottom}
          initial="initial"
          animate="open"
          exit="close"
          className={`bottom`}
        >
          <div className={`bottom__content`}>
            <p>
              In traditional animation, images are drawn or painted by hand on
              transparent celluloid sheets to be photographed and exhibited on
              film. Today, most animations are made with computer-generated
              imagery (CGI).
            </p>
            <p>
              Computer animation can be very detailed 3D animation, while 2D
              computer animation can be used for stylistic reasons, low
              bandwidth or faster real-time renderings.
            </p>
            <p>
              Commonly the effect of animation is achieved by a rapid succession
              of sequential images that minimally differ from each other. The
              illusion—as in motion pictures in general—is thought to rely on
              the phi phenomenon and beta movement, but the exact causes are
              still uncertain.
            </p>
            <p>
              Criticism of animation has been common in media and cinema since
              its inception. With its popularity, a large amount of criticism
              has arisen, especially animated feature-length films. Many
              concerns of cultural representation, psychological effects on
              children have been brought up around the animation industry, which
              has remained rather politically unchanged and stagnant since its
              inception into mainstream culture.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Item = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={variants}
      initial={false}
      animate={{ boxShadow: "0 18px 32px rgba(0, 0, 0, 0.3)" }}
      transition={variants.transition}
      className={`item`}
    >
      <Top isOpen={isOpen} setIsOpen={setIsOpen} heading={props.heading} />
      <Bottom isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};
export default OtherServices;
