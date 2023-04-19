import React , {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import "../styles/home.scss";

export default function NavBar() {

    const [scrollPosition, setScrollPosition] = useState(0);

    console.log(scrollPosition);

    useEffect(() => {
        window.addEventListener("scroll", function(){
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        });

    }, []);
    const location = useLocation();
    console.log(location.pathname);

    const navStyles = {
        opacity: (scrollPosition > 100 ? "0.8" : "1"),
        transition: "opacity 0.5s"
    }

    return (
        <nav className="navbar fixed-top .navbar-nav-scroll navbar-expand-lg p-4" style={navStyles}>
            <a className="navbar-brand" href="#">
                <img src="/images/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top"/>
                <span>IDUMBAN APPARELS</span>
            </a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavDropdown"> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="NavDropdown"> */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}