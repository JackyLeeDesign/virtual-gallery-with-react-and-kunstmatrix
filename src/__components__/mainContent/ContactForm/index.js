import React from "react";
import style from "./index.css";
import {
  faFacebook,
  faInstagram,
  faLine
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
const ContactInput = props => {
  const { contactStore } = props;
  let resultText = "";
  if (contactStore.success) {
    resultText =
      "Thank You. I have already received your reply and will get back to you shortly";
  } else if (!contactStore.errorText == "") {
    resultText = contactStore.errorText.concat(" is required");
  } else {
    resultText = "";
  }
  return (
    <div>
      <iframe name="votar" className={style.divHide} />
      <form
        action="sendMessage.php"
        method="post"
        target="votar"
        className={style.formCss}
      >
        <div className={contactStore.success ? "text_green" : "text_red"}>
          {resultText}
        </div>
        <input
          name="name"
          placeholder="Write your name here.."
          onChange={contactStore.handleChange}
          type="text"
        />
        <input
          name="email"
          placeholder="Write your email here.."
          onChange={contactStore.handleChange}
          type="text"
        />
        <input
          name="content"
          placeholder="What would you like to tell me.."
          onChange={contactStore.handleChange}
          type="text"
        />
        <button type="submit" name="submit" onClick={contactStore.handleSubmit}>
          Send Message
        </button>
        <div className={style.divBottom}>
          <a href="https://www.facebook.com/JackyLeeDesigner">
            <FontAwesomeIcon className={style.contactIcon} icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/jacky_lee0620/">
            <FontAwesomeIcon className={style.contactIcon} icon={faInstagram} />
          </a>
          <a href="mailto:xsjackysx@gmail.com?Subject=Hello" target="_top">
            <FontAwesomeIcon
              className={style.contactIcon}
              icon={faEnvelopeOpen}
            />
          </a>
        </div>
        <div className={style.clear} />
      </form>
    </div>
  );
};
ContactInput.propTypes = {
  // An object taking on a particular shape
  contactStore: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    content: PropTypes.string,
    success: PropTypes.bool,
    errorText: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
  })
};
export default inject("contactStore")(observer(ContactInput));
