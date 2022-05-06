import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as IconHeart } from "./heart.svg";
import "./styles.scss";

const stopPropagation = (e) => {
  e.stopPropagation();
};

const durationRegular = 0.35;
// const delayRegular = 0.75;
const easeRegular = [0.83, 0, 0.17, 1];

const variantsTop = {
  closed: {
    height: "80px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    height: "300px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsImage = {
  closed: {
    width: "80px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    width: "100%",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsImageOverlay = {
  closed: {
    opacity: 0,
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    opacity: 0.85,
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsButton = {
  closed: {
    opacity: 0,
    width: "0px",
    marginRight: "0px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    opacity: 1,
    width: "38px",
    marginRight: "20px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsButtonElement = {
  closed: {
    opacity: 0,
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsTopContent = {
  closed: {
    marginLeft: "80px",
    alignItems: "flex-end",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    marginLeft: "0px",
    alignItems: "flex-end",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};

const variantsText = {
  closed: {
    color: "black",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    color: "white",
    transition: {
      duration: durationRegular,
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

const Top = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <motion.div
      layout
      variants={variantsTop}
      transition={variantsTop.transition}
      animate={isOpen ? variantsTop.open : variantsTop.closed}
      onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      className={`top`}
    >
      <motion.div
        layout
        variants={variantsImage}
        transition={variantsImage.transition}
        initial={variantsImage.closed}
        animate={isOpen ? variantsImage.open : variantsImage.closed}
        className={`image`}
      >
        <motion.img
          layout
          variants={variants}
          transition={variants.transition}
          className={`image__asset`}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Prof._Stampfer%27s_Stroboscopische_Scheibe_No._X.gif"
          alt="alt"
        />
        <AnimatePresence>
          <motion.div
            layout
            variants={variantsImageOverlay}
            initial={variantsImageOverlay.closed}
            animate={
              isOpen ? variantsImageOverlay.open : variantsImageOverlay.closed
            }
            transition={
              isOpen
                ? variantsImageOverlay.open.transition
                : variantsImageOverlay.closed.transition
            }
            className={`image__overlay`}
          />
        </AnimatePresence>
      </motion.div>

      <motion.div
        variants={variantsTopContent}
        transition={
          isOpen
            ? variantsTopContent.open.transition
            : variantsTopContent.closed.transition
        }
        initial={variantsTopContent.closed}
        animate={isOpen ? variantsTopContent.open : variantsTopContent.closed}
        className={`top_content`}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.span
              transition={variantsButton}
              initial={variantsButton.closed}
              animate={variantsButton.open}
              exit={variantsButton.closed}
              className={`button`}
            >
              <motion.a
                transition={variantsButtonElement}
                initial={variantsButtonElement.closed}
                animate={variantsButtonElement.open}
                exit={variantsButtonElement.closed}
                href="http://www.google.com"
                onClick={stopPropagation}
                className={`button__element`}
              >
                <IconHeart />
              </motion.a>
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div
          variants={variantsText}
          transition={
            isOpen
              ? variantsText.open.transition
              : variantsText.closed.transition
          }
          initial={variantsText.open}
          animate={props.isOpen ? variantsText.open : variantsText.closed}
          className={`text`}
        >
          <p className={`text__header`}>{props.heading}</p>

          <p className={`text__subheader`}>
            Phénakisticope, zoetrope, flip book, praxinoscope and film
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Top;
