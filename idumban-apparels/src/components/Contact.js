import React from "react";

export default function Contact() {

    return (
        <div className="contact-container navbar-offset">
            <div className="first-section w-100">
                <div className="header-container">
                    <h2 className="mb-3">We would be happy to hear from you</h2>
                    <h5>Contact us today to get a free quote!</h5>
                </div>
                <div className="contact-details-container w-100">
                    <div className="contact-item">
                        <h6>Address</h6>
                        <p className="address m-0">
                        15, Ramraj Nagar, 80 Feet Road, PO, Gandhinagar, Tirupur, Tamil Nadu 641603, India
                        </p>
                    </div>
                    <div className="v-divider"/>
                    <div className="contact-item">
                        <h6>Phone</h6>
                        <div className="alignment">
                            <img src="/images/phone-icon.png" alt=""/>
                            <p className="m-0">+91 93644 44767</p>
                        </div>
                    </div>
                    <div className="v-divider"/>
                    <div className="contact-item">
                        <h6>Email</h6>
                        <div className="alignment">
                            <img src="/images/mail-icon.png" alt=""/>
                            <p className="m-0">mahesh@idumban.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section">
                <div className="map-container w-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.0780930498952!2d77.3210650643602!3d11.13094474285792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9073285ba96df%3A0x10410b560fd0a328!2sIdumban%20Apparels!5e0!3m2!1sen!2sca!4v1681867712060!5m2!1sen!2sca" 
                     loading="lazy"></iframe>
                </div>
                <form className="w-100">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="E-mail"/>
                    <input type="text" name="phone" placeholder="Phone Number"/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            
        </div>
    );
}