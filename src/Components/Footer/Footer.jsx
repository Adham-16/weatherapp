import React from 'react'
import './Footer.css'

export function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="#" className="contact">
                                <input type="text" placeholder="Enter your email to subscribe..." />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                        <div className="col-md-3">
                            <div className="social">
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-google-plus-g" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-pinterest" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
