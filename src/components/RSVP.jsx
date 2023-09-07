import React from 'react';
import "../css/RSVP.css";
import "../css/Pink.css";

const RSVP = () => {
    return (
        <section id="rsvp" className='rsvp-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>You are invited</h2>
                        <p>Please kindly RSVP below and let us know your choice of main, along with any questions you may have</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='rsvp-form'>
                        <form action="https://getform.io/f/73766123-2896-4cc9-92e3-c8ea18bba956" method='POST' className='form'>
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