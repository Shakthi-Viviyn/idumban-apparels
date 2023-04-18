import React from "react";



export default function Home(){

    const section1Styles = {
        backgroundImage: "url('/images/section1-home.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className="home-container navbar-offset">
            <div className="first-section max-width" style={section1Styles}>
                <div className="text-container">
                    <h1>IDUMBAN APPARELS</h1>
                    <h2>When fashion meets quality</h2>
                    <h4>Your style comes to life</h4>
                </div>
            </div>
            <div className="second-section max-width">
                <div className="content-container max-width">
                    <div className="text-container">
                        <h2>Quality manufacturer of T-shirts</h2>
                        <h4>
                            With a commitment to excellence and investment in cutting-edge technology, 
                            we deliver top-tier products that meet the most demanding industry standards
                        </h4>
                    </div>
                    <div className="icon-container">
                        <img src="/images/t-shirt.png" alt="t-shirt"/>
                        <div className="effect-div"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}