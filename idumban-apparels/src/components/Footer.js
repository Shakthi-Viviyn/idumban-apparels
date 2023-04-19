import React from 'react';

export default function Footer() {
    
    return (
        <div className="footer">
            <div>
                <p className="address">15, Ramraj Nagar, 80 Feet Road, PO, Gandhinagar, Tiruppur, Tamil Nadu 641603, India</p>
            </div>
            <div className="main-text">
                <h4>IDUMBAN APPARELS</h4>
                <p className="m-0">When fashion meets quality</p>
                <p className="m-0">Your style comes to life</p>
            </div>
            <div className="contact-box">
                <input type="email" className="email" placeholder="Email"/>
                <input type="submit" className='contact-btn' value="Contact us"/>
            </div>
        </div>
    )
}