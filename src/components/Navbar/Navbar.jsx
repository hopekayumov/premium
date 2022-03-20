import React from "react";
import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={item}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
