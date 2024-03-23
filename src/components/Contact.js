import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <article className="contact">
      <h3>Mes coordonées</h3>
      <ul className="contact__ul">
        <li><FontAwesomeIcon className="contact__icon" icon={faEnvelope} /> dossouyannick@gmail.com</li>
        <li><FontAwesomeIcon className="contact__icon" icon={faPhone} /> +33(0)6 02 30 65 07</li>
        <li><a className="contact__link" href="/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="contact__icon" icon={faGlobe} /> yannickdossou.fr</a></li>
      </ul>
    </article>
  )
};
