import React, { useContext, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { ThemeContext } from "../../Context";

const Contact = () => {

    const formRef = useRef();

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(
            console.log("hello")
        )
        .then((result) => console.log(result.text),
         (error) => console.error(error))

    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Lets discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +250124879555
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            john@doe.mail
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            5th Avenue Harambee
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What's your story?</b> Get in touch. Always available for Freelancing if the project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_name" placeholder="Name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_subject" placeholder="Subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" name="user_email" placeholder="Email" />
                        <textarea name="message" rows="5" placeholder="Message" style={{ backgroundColor: darkMode && "#333" }}></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;