import React, { useState } from 'react';
import starterImageThumb from '../img/gallery/thumb/1.png';
import starterImageLarge from '../img/gallery/large/1.png';
import mainImageThumb from '../img/gallery/thumb/2.png';
import mainImageLarge from '../img/gallery/large/2.png';
import sidesImageThumb from '../img/gallery/thumb/3.png';
import sidesImageLarge from '../img/gallery/large/3.png';
import desertImageThumb from '../img/gallery/thumb/4.png';
import desertImageLarge from '../img/gallery/large/4.png';
import "../css/Menu.css";
import "../css/Pink.css";
import Popout from './Popout';

const Menu = () => {
    const [isImageVisible, setImageVisible] = useState(false);
    const [isPopoutVisible, setPopoutVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const images = [
        { thumb: starterImageThumb, large: starterImageLarge },
        { thumb: mainImageThumb, large: mainImageLarge },
        { thumb: sidesImageThumb, large: sidesImageLarge },
        { thumb: desertImageThumb, large: desertImageLarge },
    ];

    const menuItemsRefs = images.map(() => React.createRef());

    const handleDownloadClick = () => {
        setImageVisible(true);
    }

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setPopoutVisible(true);
        const popup = document.querySelector(".menu-popup");
        popup && popup.classList.add("open");  
    }

    const closePopout = () => {
        setPopoutVisible(false);
    }


    return (
        <section id="menu"  className='menu-section'>
            <div className='container'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Menu</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='menu-filter'>
                        <a href='./Menu.pdf' target='_blank' rel='noopener noreferrer' download>
                            <button className='filter-btn' onClick={handleDownloadClick}>Download Menu</button>
                        </a>
                    </div>
                </div>
                <div className='row justify-content-left'>
                    {images.map((image, index) => (
                        <div key={index} ref={menuItemsRefs[index]} className={isImageVisible ? "menu-item" : "menu-item hidden"} data-category="menu">
                            <div className="menu-item-inner" onClick={() => handleImageClick(index)}>
                            <img src={image.thumb} data-large={image.large} alt={`Menu item ${index + 1}`} /> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Popout isVisible={isPopoutVisible} currentImageIndex={currentImageIndex} menuItemsRefs={menuItemsRefs} onClose={closePopout} />
        </section>
    );
};

export default Menu;
