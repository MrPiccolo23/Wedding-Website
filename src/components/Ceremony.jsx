import React from 'react';
import "../css/Ceremony.css";
import "../css/Pink.css";
import Venue from '../img/icons/venue.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Ceremony = () => {

    const handleDownloadClick = () => {
    }

    return (
        <section id="ceremony" className='ceremony-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Celebrate our love</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {/* Ceremony Box */}
                    <div className='ceremony-item ceremony'>
                        <div className='ceremony-item-inner'>
                            <h3>Ceremony</h3>
                            <span className='date'>25 July 2024</span>
                            <p>Polhawn Fort, Rame Head, Torpoint PL10 1LL.</p>
                            <div className='ceremony-filter'>
                                <a href='./Travel-Pack-2022.pdf' target='_blank' rel='noopener noreferrer' download>
                                    <button className='filter-btn' onClick={handleDownloadClick}>Download Travel Pack</button>
                                </a>
                            </div>
                            <img src={Venue} alt="ceremony"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/RAauRiG1GZHHjFLk7" title='Find Us on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ceremony;