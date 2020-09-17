import React from "react";
import "../Styles/Footer.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__text">
          This Amazon E-Commerce clone was developt{" "}
          <strong>for educational non-profit purposes only</strong>, commercial
          use and propagation or disclosure of it will not be exercised. The
          copyright, image, and intellectual property belong to the brand and I
          do not own it.
        </p>
      </div>

      <div className="footer__content">
        <p className="footer__text">
          This ReactJS app was developed by Ariel Rodríguez Boza during "The
          5-Day React JavaScript Challenge" offered by the Youtube channel
          "Clever Programmer".
        </p>
      </div>
      <div className="footer__content">
        <a
          className="footer__link"
          target="_blank"
          href="https://github.com/crari93/amazon-clone"
        >
          <GitHubIcon fontSize="large" className="icon" />
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://www.youtube.com/c/CleverProgrammer"
        >
          <YouTubeIcon fontSize="large" className="icon" />
        </a>
      </div>
    </div>
  );
}
