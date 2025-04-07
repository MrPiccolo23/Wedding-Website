import React from 'react';
import "../css/RSVP.css";
import "../css/Pink.css";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

const RSVP = () => {
    return (
        <section id="rsvp" className='rsvp-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>You are invited</h2>
                        <p>We hope you can make it to celebrate with us. Please let us know whether you can attend,
                            <br/> along with your choice of main meal as soon as possible so we can get this organised with the caterer.
                            <br />In addition please send us any questions you may have.</p>
                            <br />
                            <p>You can reach us on:
                                <br />
                                - Adam - 
                                <a href="tel:+1234567890" className="phone-link">+1234567890</a>
                                <span style={{ margin: '0 5px' }}> | </span> 
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                    <span style={{ margin: '0 5px' }}> | </span> 
                                    <a href="mailto:adam@example.com" target="_blank" rel="noopener noreferrer" className="email-link">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                        <br />
                                        - Eve - 
                                        <a href="tel:+0987654321" className="phone-link">+0987654321</a>
                                        <span style={{ margin: '0 5px' }}> | </span> 
                                        <a href="https://wa.me/0987654321" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                            </a>
                                            <span style={{ margin: '0 5px' }}> | </span> 
                                            <a href="mailto:eve@example.com" target="_blank" rel="noopener noreferrer" className="email-link">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                                </a>
                            </p>
                                <br />
                                <p>Alternatively fill in the form below to send us an email.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='rsvp-form'>
                        {/* Removed action attribute for demo purposes */}
                        <form method='POST' className='form'>
                            <div className='row'>
                                <div className='input-group w50'>
                                    <input type="text" name='name' placeholder='Name' className='input-control'/>
                                </div>
                                <div className='input-group w50'>
                                    <input type="text" name='email' placeholder='Email' className='input-control'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-group'>
                                    <select name='guests' className='input-control'>
                                        <option value="">Number of Guests</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-group'>
                                    <select name='attendance' className='input-control'>
                                        <option value="i am attending">I am attending</option>
                                        <option value="i am not attending">I am not attending</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-group'>
                                    <textarea name='message' placeholder='Message' className='input-control'></textarea>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-group'>
                                    <button type='submit' className='btn-1'>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
