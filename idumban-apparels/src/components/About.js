import React, { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        document.title = 'About | IDUMBAN APPARELS';
    }, []);
    
    const section1Styles = {
        backgroundImage: "url('/images/section1-about.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        minHeight: "50vh"
    }

    return (
        <div className="about-container navbar-offset">
            <div className="first-section">
                <div className="grid-container">
                    <div>
                        <img src="/images/about-pics/1.jpg" width="400" alt=""/>
                    </div>
                    <div>
                        <img src="/images/about-pics/2.jpg" width="400" alt=""/>
                    </div>
                    <div>
                        <img src="/images/about-pics/3.jpg" width="400" alt=""/>
                    </div>
                </div>
                
                <div className="text-container">
                    <h1>Our Roots</h1>
                    <p>
                    Idumban started as a family-owned business in 1970 with a focus on supplying knitted innerwear in the domestic market. Later in the early 1990s, Mr Ramasamy's two sons diversified the business into export activities, to penetrate various international markets.<br/>
                    In 2018, the company underwent a mutual division of property between the brothers, with the elder brother taking over the core business. Meanwhile, the younger brother, Mr R. Mahesh, with his 28 years of experience in the industry, established a new firm named Idumban Apparels. The new business is dedicated to producing and supplying high-quality garments with a focus on the Indian market.<br/>
                    Our production facilities are equipped with the latest machines, and we have formed strategic partnerships with local suppliers for yarn, knitting, dyeing, and printing to ensure the timely delivery of quality products. Our factories adhere to all safety standards, and we provide a conducive work environment to our employees to enable them to achieve their best performance.<br/>
                    At Idumban Apparels, we are committed to quality work, timely delivery, excellent infrastructure, and a competent workforce, which sets us apart as a leading player in the industry.<br/>
                    </p>
                </div>
            </div>
            <div className="second-section" style={section1Styles}/>
            <div className="section3-container">
                <div className="content-container w-100">
                    <div className="text-container">
                        <h3>R.Mahesh</h3>
                        <h5>Managing Director</h5>
                        <p>
                            We are proud to have the founder and proprietor of our company serving as our Managing Director. With over 28 years of experience in the garment manufacturing industry, his knowledge and expertise have been invaluable in establishing and growing our company. His unwavering dedication to our success is reflected in his hands-on approach and attention to detail. Under his visionary leadership, we are confident in our ability to continue to provide high-quality products to our customers.
                        </p>
                    </div>
                    <img src="/images/director.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}