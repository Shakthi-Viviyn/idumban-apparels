import React from "react";
import "../styles/home.scss";

export default function NavBar() {
    
    return (
        <nav className="navbar fixed-top .navbar-nav-scroll navbar-expand-lg p-4">
            <a className="navbar-brand" href="#">
                 {/* Add logo here */}
                IDUMBAN APPARELS
            </a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavDropdown"> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <div className="collapse navbar-collapse" id="NavDropdown"> */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-5">
                        <li class="nav-item mr-3">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}