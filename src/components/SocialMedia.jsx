import React from "react";
import { FaTelegram } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

const SocialMedia = () => (
  <div className="app__social">
    {/* Telegram */}
    <a href="https://t.me/algorithm_uz" target="_blank" rel="noreferrer">
      <div>
        <FaTelegram />
      </div>
    </a>
    {/* Github */}
    <a href="https://github.com/hopekayumov" target="_blank" rel="noreferrer">
      <div>
        <ImGithub />
      </div>
    </a>
    {/* LinkedIn */}
    <a
      href="https://LinkedIn.com/in/hopekayumov"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <GrLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
