import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "../css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [nav, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const links = [
        { id: 0, link: 'home', name: 'Home' },
        { id: 1, link: 'couple', name: 'Couple' },
        { id: 2, link: 'story', name: 'Story' },
        { id: 3, link: 'ceremony', name: 'Ceremony' },
        { id: 4, link: 'timeline', name: 'TimeLine' },
        { id: 5, link: 'menu', name: 'Menu' },
        { id: 7, link: 'accommodation', name: 'Accommodation' },
        { id: 8, link: 'transport', name: 'Transport' },
        { id: 9, link: 'rsvp', name: 'RSVP' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrollPosition > 50 ? 'fixed' : ''}`}>
                    <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="logo">
                        <Link to="home">Y & T</Link>
                    </div>
                    <div onClick={() => setNav(!nav)} className='hamburger-btn'>
                            {nav ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                
                    <div className="nav">
                        <ul>
                            {links.map(({ id, link, name }) => (
                                <li key={id}>
                                    <Link 
                                        to={link} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-70} 
                                        spy={true} 
                                        activeClass="active">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {nav && (
                <div className="mobile-nav">
                    <ul>
                        {links.map(({ id, link, name }) => (
                            <li key={id}>
                                <Link 
                                    onClick={() => setNav(false)}
                                    to={link} 
                                    smooth={true} 
                                    duration={500} 
                                    offset={-70} 
                                    spy={true} 
                                    activeClass="active">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;



