import React from "react";
import { motion } from "framer-motion";

import "./Button.scss";

const Button = ({ text, icon }) => {
  return (
    <motion.button
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="app__button"
    >
      {icon}
      {text}
    </motion.button>
  );
};

export default Button;
