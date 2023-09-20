import React from 'react';
import "../css/TimeLine.css";
import "../css/Pink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCameraRetro, faUtensils, faMusic, faMoon } from '@fortawesome/free-solid-svg-icons';
import RingsWedding from 'react-flaticons/dist/icons/rings-wedding';
import CakeWedding from 'react-flaticons/dist/icons/cake-wedding';
import Sun from 'react-flaticons/dist/icons/sunrise';

const time = () => {
    return (
        <section id='timeline' className='time-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Wedding Day Timeline</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='time-content'>
                        <div className='row'>
                            {/* time item start 1*/}
                            <div className='time-item'>
                                <i><FontAwesomeIcon icon={faCar} className='font-awesome-icon'/></i>
                                <div className='time-text'>
                                    <h3>1pm - Guests arrive</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><RingsWedding className='flaticon-icon'/></i>
                                <div className='time-text'>
                                    <h3>2pm - Ceremony outside on the lawn overlooking the sea</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><FontAwesomeIcon icon={faCameraRetro} className='font-awesome-icon'/></i>
                                <div className='time-text'>
                                    <h3>3pm - Drinks reception, canapes & photos</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><FontAwesomeIcon icon={faUtensils} className='font-awesome-icon'/></i>
                                <div className='time-text'>
                                    <h3>4pm - Dinner served in the fort</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><CakeWedding className='flaticon-icon'/></i>
                                <div className='time-text'>
                                    <h3>6pm - Cake cutting, with refreshments in the summer house</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><FontAwesomeIcon icon={faMusic} className='font-awesome-icon'/></i>
                                <div className='time-text'>
                                    <h3>7pm - Music & dancing with traditional Turkish drum & clarion</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><Sun className='flaticon-icon'/></i>
                                <div className='time-text'>
                                    <h3>9pm - Cornish pasties served at sunset</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            {/* time item start */}
                                <div className='time-item'>
                                <i><FontAwesomeIcon icon={faMoon} className='font-awesome-icon'/></i>
                                <div className='time-text'>
                                    <h3>12am - End of the evening</h3>
                                </div>
                                <div className='time-img'>
                                </div>
                            </div>
                            {/* time item end */}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default time;