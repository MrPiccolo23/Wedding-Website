import React from 'react';
import "../css/Events.css";
import "../css/Pink.css";
import Venue1 from '../img/icons/venue1.jpg'; 
import Venue2  from '../img/icons/venue2.jpg'; 
import Venue3  from '../img/icons/venue3.jpg'; 
import Venue4  from '../img/icons/venue4.jpg'; 
import Venue5  from '../img/icons/venue5.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Event = () => {
    return (
        <section id="accommodation" className='event-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Places to Stay</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                </div>
                <div className='row justify-content-center accommodation-row'>
                    {/* Accommodation Box 1 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Whitsand Bay Fort</h3>
                            <p>We have 8 two-person suites at £112.50 a night and 5 six-person lodges at £742.50 for a minimum 3-night stay. 
                                Call 01752 822597 to book and mention you're a wedding guest of Yas and Tutku to receive these rates. 
                                The suites and lodges are 6 minutes by car or 30 minutes on foot from the venue.</p>
                            <p> Donkey Ln, Whitsand Bay, Torpoint PL10 1JZ.</p>
                            <img src={Venue1} alt="event"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/znvormke3aofF4fw8" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 2 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Halfway House Inn</h3>
                            <p>An inn located in a nearby town, with multiple rooms available. Price for 2 nights starts at £220 for twin room or £160 for 2 nights for single room.</p>
                            <p>  Fore St, Kingsand, Torpoint PL10 1NA.</p>
                            <img src={Venue2} alt="event"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/rcDFH75oZictK7KM9" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 3 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Rame Barton</h3>
                            <p>Self catering apartments;
                                - Whitsand: Sleeps 4 plus baby at £180 per night.
                                - Edgcumbe: Sleeps 2 plus baby at £120 per night.
                                Loads of free parking. 
                                All high end cotton bedding. Fluffy towels. Organic Toiletries. Selections of teas  and fresh coffee. 
                                Large gardens to relax in.
                                5 minute drive to venue; 10 minute walk.
                                To book get in touch with us and we will contact owner.</p>
                            <p>Military Rd, Rame, Torpoint PL10 1LG.</p>
                            <img src={Venue3} alt="event"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/zMSFnu3WbTVapvcL8" title='Find on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 4 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>New Wiggle Farmhouse</h3>
                            <p>Triple room with private bathroom
                                From £154 for 2 people, or £171 for 3 people, for 2 nights
                                5 minute drive, 21 minute walk</p>
                            <p> Farmhouse, Millbrook, New Wiggle PL10 1JD.</p>
                            <img src={Venue4 } alt="event"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/nnEmBXsv1Fnix5Fx7" title='Find Us on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Accommodation Box 5 */}
                    <div className='event-item accommodation'>
                        <div className='event-item-inner'>
                            <h3>Coombe House B&B</h3>
                            <p>B&B that sleeps between 2 and 4, with 5 rooms available. Starts at £130 a night for 2 people</p>
                            <p> Rame Head, Torpoint PL10 1LL</p>
                            <img src={Venue5} alt="event"/>
                            <div className='social-links'>
                                <a href="https://goo.gl/maps/1HRKQzHoSeDPyu8t6" title='Find Us on Google Maps' target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='section-title'>
                        <p>Other options are available through booking websites and airbnb</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Event;