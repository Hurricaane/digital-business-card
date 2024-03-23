import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__social" href="https://github.com/Hurricaane"><FontAwesomeIcon icon={faGithubSquare} /></a>
    </footer>
  )
};
