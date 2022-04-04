import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { GrCloudDownload } from "react-icons/gr";

import { images } from "../../constants";

import "./Navbar.scss";
import Button from "../../shared/Button/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Главная", "Обо мне", "Работы", "Навыки", "Контакт"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a
              href={`#${
                item === "Главная"
                  ? "home"
                  : item === "Обо мне"
                  ? "about"
                  : item === "Работы"
                  ? "work"
                  : item === "Навыки"
                  ? "skills"
                  : "contact"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {/* Button */}

      <Button
        text="Resume"
        icon={<GrCloudDownload style={{ marginRight: 8 }} />}
      />

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Главная", "Обо мне", "Работы", "Навыки", "Контакт"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
