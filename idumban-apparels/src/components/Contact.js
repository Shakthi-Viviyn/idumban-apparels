import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    useEffect(() => {
        const params = location.state; // eslint-disable-next-line
        if (params != undefined) {
            setFormData((prevState) => ({
            ...prevState,
            email: location.state.email
            }))
            window.scrollTo(0, 500); 
        }
    }, [location.state]);

    function handleChange(e){
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        if (formData.name && formData.email && formData.phone && formData.message) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })

            axios.post('http://localhost:3000/api/contact', formData)
            .then(res => toast.success(res.data))
            .catch(err => toast.error(err.response.data));
        }else{
            toast.error('Please fill all the fields');
        }  
    }

    useEffect(() => {
        document.title = 'Contact | IDUMBAN APPARELS';
    }, []);

    return (
        <div className="contact-container navbar-offset">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                draggable
                pauseOnHover
                transition={Slide}
            />
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
                     loading="lazy" title="location"></iframe>
                </div>

                <form className="w-100">
                    <div className="mb-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={handleChange} className="form-control" name="name" id="name" value={formData.name}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onChange={handleChange} className="form-control" name="email" id="email" value={formData.email}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" onChange={handleChange} className="form-control" name="phone" id="phone" value={formData.phone}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" onChange={handleChange} name="message" id="message" value={formData.message}></textarea>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>

            
        </div>
    );
}