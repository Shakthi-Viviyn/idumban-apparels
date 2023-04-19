import React , {useEffect} from "react";



export default function Home(){

    const section1Styles = {
        backgroundImage: "url('/images/section1-home.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    useEffect(() => {
        function handleHover() {}
    }, [])

    return (
        <div className="home-container navbar-offset">
            <div className="first-section w-100" style={section1Styles}>
                <div className="text-container">
                    <h1>IDUMBAN APPARELS</h1>
                    <h2>When fashion meets quality</h2>
                    <h4>Your style comes to life</h4>
                </div>
            </div>
            <div className="second-section w-100">
                <div className="content-container w-100">
                    <div className="text-container">
                        <h2>Quality manufacturer of Garments</h2>
                        <h4>
                            With a commitment to excellence and investment in cutting-edge technology, 
                            we deliver top-tier products that meet the most demanding industry standards.
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
                <div id="home-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <img src="/images/homeCarousel/sewing.jpg" className="d-block w-100" alt="sewing section"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Sewing</h5>

                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/homeCarousel/cutting.jpg" className="d-block w-100" alt="cutting section"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Cutting</h5>

                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images/homeCarousel/checking.jpg" className="d-block w-100" alt="checking section"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Checking</h5>

                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/homeCarousel/packing.jpg" className="d-block w-100" alt="packing section"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Packing</h5>

                            </div>
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
            <div className="section4-container">
                <div className="content-container w-100">
                    <div className="card mb-3">
                        <img src="images/cards/cone.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body p-3 py-5">
                            <h3 className="card-title">Quality Raw Materials</h3>
                            <p className="card-text"> 
                                Our commitment to sourcing the finest raw materials and subjecting them to rigourous quality tests guarantees our clients only receive best service in industry.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="images/cards/machine.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body p-3 py-5">
                            <h3 className="card-title">Talented Workforce</h3>
                            <p className="card-text">
                                Talented workforce working on your orders means that you can rest easy and be guaranteed to get your needs met to the smallest details.
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="images/cards/packing.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body p-3 py-5">
                            <h3 className="card-title">Flexible Production</h3>
                            <p className="card-text">
                                We have flexible production capabilities to meet your diverse and specific needs, whether it be for high-volume runs or custom projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}