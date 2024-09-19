import React from 'react'
import "./about.css";
import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
export const Aboutus = () => {
    return (
        <div className='about-container'>

        <div className="container">
            <span className="big-circle"></span>
            <img src="img/shape.png" className="square" alt="" />
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Hey,There I am always happy to help you</h3>
                    <p className="text">
                        If you have any queriesyou can contact us throug Email,LinkedIn, Instagram etc.
                    </p>

                    <div className="info">
                        <div className="information">
                            <img src="img/location.png" className="icon" alt="" />
                            <p>Alonce City Near R.D Guardy Medical College Ujjain</p>
                        </div>
                        <div className="information">
                            <img src="img/email.png" className="icon" alt="" />
                            <p>NIT.MCA.G1.7747@GMAIL.COM</p>
                        </div>
                        <div className="information">
                            <img src="img/phone.png" className="icon" alt="" />
                            <p>8959264362</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100084193336691">
                                {/* <i className="fab fa-facebook-f"></i> */}
                                <AiFillFacebook />
                            </a>
                            <a href="https://twitter.com/NIT_MCA_G1SINGH">
                                {/* <i className="fab fa-twitter"></i> */}
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/qureshi_hassan_30/">
                                {/* <i className="fab fa-instagram"></i> */}
                                <BsInstagram />
                            </a>
                            <a href="http://www.linkedin.com/in/G1-SINGH">
                                {/* <i className="fab fa-linkedin-in"></i> */}
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>

    );
}
export default Aboutus;