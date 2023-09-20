import React from 'react';
import "../css/Transport.css";
import "../css/Pink.css";


const Transport = () => {
    return (
        <section id="transport" className='transport-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Parking & Transport</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                </div>
                <div className='row justify-content-center accommodation-row'>
                    {/* Accommodation Box 1 */}
                    <div className='transport-item accommodation'>
                        <div className='transport-item-inner'>
                            <h3>Parking</h3>
                            <p>The main car park behind the Fort can take up to around 20 cars. There are a further 35 or more spaces in the parking laybys up the drive.
                                </p>
                                <br/>
                            <h3>Taxi</h3>
                            <p>
                                If booking a taxi to and from the wedding, please note that they will need to be pre-booked ahead of time. Please book early to avoid disappointment.<br/>
                                Taxi firms in the local area include:<br/>
                                •	Kernow Cars – 01752 822200<br/>
                                •	Jim’s Taxis – 01752 812112<br/>
                                •	Anthony’s Taxis – 07788 900 222
                                </p>
                                <br/>
                                <h3>Traveling from Plymouth</h3>
                            <p>If you choose to travel from Plymouth, there is a ferry service between Torpoint and Plymouth that runs constantly 24 hours a day setting off every half an hour. It takes about 8 - 10 minutes to cross.</p>
                        </div>
                    </div>
                </div>
                {/* <div className='row'>
                    <div className='section-title'>
                        <p className='para'>For other options, search for places near 'Rame' on booking websites and airbnb</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Transport;