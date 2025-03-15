import React from 'react'
import logo from '/src/assets/logo.png'
import './Header.css'

export function Header() {
    return (
        <>
            <div className="top-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="left-section text-decoration-none" href="index.html">
                            <img src={logo} alt="Logo" />
                            <div className="logo-text">
                                <h1>Weather</h1>
                            </div>
                        </a>
                        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Live cameras</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Photos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
