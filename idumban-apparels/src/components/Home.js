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
                        <h2>Quality manufacturer of Garments</h2>
                        <h4>
                            With a commitment to excellence and investment in cutting-edge technology, 
                            we deliver top-tier products that meet the most demanding industry standards
                        </h4>
                    </div>
                    <div className="icons-container">
                        <div className="icon">
                            <img src="/images/t-shirt.png" alt="t-shirt"/>
                            <div className="effect-div"></div>
                        </div>
                        <div className="icon">
                            <img src="/images/trousers.png" alt="trouser"/>
                            <div className="effect-div"></div>
                        </div>
                        <div className="icon">
                            <img src="/images/jacket.png" alt="jacket"/>
                            <div className="effect-div"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3-container">
                <div className="carousel-container">
                    <div id="home-carousel" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/images/homeCarousel/sewing.jpg" className="d-block w-100" alt="sewing section"/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/homeCarousel/cutting.jpg" className="d-block w-100" alt="cutting section"/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/homeCarousel/checking.jpg" className="d-block w-100" alt="checking section"/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/homeCarousel/packing.jpg" className="d-block w-100" alt="packing section"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}