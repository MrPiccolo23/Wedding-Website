import React from 'react';
import "../css/Footer.css";
import "../css/Pink.css";
import couple from '../img/couple2.jpg'; 

const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-content">
                    <div class="couple-name">
                        <img src={couple} alt="Wedding couple"/>
                    </div>
                    <p>We look forward to celebrating with you!</p>
                    <div className="copyright">
                    <small>
                        Built and designed by{" "}
                        <a
                            href="https://github.com/MrPiccolo23"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sattar Naqvi
                        </a>{" "}
                        &copy; All rights reserved
                    </small>
                </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;