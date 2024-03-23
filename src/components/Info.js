import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../images/HUB06954.jpg"

export default function Info() {
  return (
    <article className="info">
      <figure>
        <img src={profilePic} alt="Yannick Dossou" />
        <figcaption className="offscreen">Yannick Dossou</figcaption>
      </figure>
      <h2>Yannick Dossou</h2>
      <p className="info__p">Développeur Fullstack</p>
      <a href="https://www.linkedin.com/in/yannick-dossou/" target="_blank" rel="noreferrer">
        <button className="info__button">
          <FontAwesomeIcon icon={faLinkedin} /> Linkedin
        </button>
      </a>
    </article>
  )
};
