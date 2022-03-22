import React from "react";
import { FaTelegram } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

import { motion } from "framer-motion";

const SocialMedia = () => (
  <div className="app__social">
    {/* Telegram */}
    <motion.a
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5, type: "tween" }}
      href="https://t.me/algorithm_uz"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaTelegram />
      </div>
    </motion.a>

    {/* Github */}
    <motion.a
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5, type: "tween" }}
      href="https://github.com/hopekayumov"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <ImGithub />
      </div>
    </motion.a>
    {/* LinkedIn */}
    <motion.a
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5, type: "tween" }}
      href="https://LinkedIn.com/in/hopekayumov"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <GrLinkedin />
      </div>
    </motion.a>
  </div>
);

export default SocialMedia;
