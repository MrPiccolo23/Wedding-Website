import React from 'react';
import "../css/Story.css";
import "../css/Pink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import story1 from '../img/story/story-1.jpg'; 
import story2 from '../img/story/story-2.jpg'; 
import story3 from '../img/story/story-3.jpg'; 
import story4 from '../img/story/story-4.jpg'; 
import story5 from '../img/story/story-5.jpg';
import story6 from '../img/story/story-6.jpg'; 

const Story = () => {
    return (
        <section id='story' className='story-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='story-content'>
                        <div className='row'>
                            {/* story item start */}
                            <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>How We Met</h3>
                                    <p>In September 2010, we met at 16 during our time in sixth form in Leeds after Tutku moved from Halifax. We were both in the same Psychology class but too shy to talk at first, until the ice was broken over Facebook! In February 2011, we started seeing each other, with the first date being a lunchtime walk to get snacks in between lessons.</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story1} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Leaving School</h3>
                                    <p>After finishing 6th form in 2012, we both went on to further studies, eventually studying at University, with Yas studying pharmacy at Bradford and Tutku studying dental hygiene and therapy at Leeds.</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story2} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Travelling Together</h3>
                                    <p>The first trip to Cornwall together with Yas' family was 2015, visiting Port Wrinkle where they had been going for all of Yas' childhood. This is very close to Polhawn Fort and the reason we decided to get married in this beautiful area. We continued to travel together, with our favourite holidays being Rome, New York and Istanbul.</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story3} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Graduation.. and Starting Uni Again!</h3>
                                    <p>We both reached the end of our degrees after a lot of hard work… and then both decided we wanted to do it all over again! Yas started Medicine in Sheffield and Tutku started Dentistry in Leeds - with graduation likely to be in the weeks before the wedding!</p>
                                </div>
                                <div className='story-img flex-container'>
                                    <img src={story4} alt="couple love story"/>
                                    <img src={story5} alt="couple love story"/>
                                </div>
                                
                            </div>
                            {/* story item end */}
                            {/* story item start */}
                                <div className='story-item'>
                                <i><FontAwesomeIcon icon={faHeart} className='fa-heart'/></i>
                                <div className='story-text'>
                                    <h3>Proposal</h3>
                                    <p>After many years of anticipation, the proposal finally happened in Brimham rocks during the summer of 2022. With family hiding in the nearby bushes, the proposal happened overlooking the Yorkshire countryside, perfectly timed in between spells of rain!</p>
                                </div>
                                <div className='story-img'>
                                    <img src={story6} alt="couple love story"/>
                                </div>
                            </div>
                            {/* story item end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;