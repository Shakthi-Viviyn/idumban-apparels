import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleInput = (e) => {
        setEmail(e.target.value);
    }

    const handleRedirect = () => {
        setEmail("");
        const params = {email: email};
        navigate("/contact", {state: params});
    }

    
    return (
        <div className="footer">
            <div className="contact-info">
                <div className="alignment">
                    <img src="/images/phone-icon-light.png" alt=""/>
                    <p className="m-0">+91 93644 44767</p>
                </div>
                <div className="alignment mt-2">
                    <img src="/images/mail-icon-light.png" alt=""/>
                    <p className="m-0">mahesh@idumban.com</p>
                </div>
            </div>
            <div className="main-text">
                <h4>IDUMBAN APPARELS</h4>
                <p className="address m-0">15, Ramraj Nagar, 80 Feet Road, PO, Gandhinagar, Tiruppur, Tamil Nadu 641603, India</p>
            </div>
            <div className="contact-box">
                <input type="email" onChange={handleInput} className="email" placeholder="Email"/>
                <input type="submit" onClick={handleRedirect} className='contact-btn' value="Contact"/>
            </div>
        </div>
    )
}