import React, { useState, useEffect, useCallback } from 'react';

import "../css/Menu.css";
import { initializeMenu, handleNext, handlePrev } from '../Javascript/pop-out.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Popout = ({ isVisible, onClose, menuItemsRefs, currentImageIndex }) => {
    const [itemIndex, setItemIndex] = useState(currentImageIndex || 0);

    const totalMenuItems = menuItemsRefs ? menuItemsRefs.length : 0;

    const gpSlideShow = useCallback(() => {
        if (menuItemsRefs && menuItemsRefs[itemIndex] && menuItemsRefs[itemIndex].current) {
            const img = menuItemsRefs[itemIndex].current.querySelector("img");
            if (img && img.dataset.large) {
                const popupImg = document.querySelector(".menu-popup .gp-img");
                if (popupImg) {
                    popupImg.setAttribute("src", img.dataset.large);
                    popupImg.style.display = "block";
                }
    
                const counter = document.querySelector(".gp-counter");
                if (counter) {
                    counter.textContent = `${itemIndex + 1}/${totalMenuItems}`;
                }
            }
        }
    }, [itemIndex, totalMenuItems, menuItemsRefs]);
    
    useEffect(() => {
        if (isVisible) {
            const cleanupListeners = initializeMenu(setItemIndex, gpSlideShow);
            return cleanupListeners;  // This will be invoked when the component unmounts
        }
    }, [gpSlideShow, isVisible]);


    useEffect(() => {
    if (isVisible) {
        gpSlideShow();  // Ensure the image is displayed when the popup is made visible
    }
}, [isVisible, gpSlideShow]);

    useEffect(() => {
        setItemIndex(currentImageIndex || 0);
    }, [currentImageIndex]);

    // Handle closing the popup when clicked outside or on the close button
    const handleClose = useCallback((event) => {
        if (event.target.classList.contains("gp-close") || event.target.classList.contains("menu-popup")) {
            onClose();
            const popup = document.querySelector(".menu-popup");
            popup && popup.classList.remove("open");  // Remove the .open class
        }
    }, [onClose]);
    

    return isVisible ? (
        <div className="menu-popup" onClick={handleClose}>
            <div className="gp-container">
                <div className="gp-counter"></div>
                <div className="gp-close">&times;</div>
                <img className="gp-img" alt="menu img"/>
                <div className="gp-controls">
                    <div className="prev" onClick={() => handlePrev(itemIndex, totalMenuItems, setItemIndex, gpSlideShow)}>
                        <i ><FontAwesomeIcon icon={faAngleLeft} /></i>
                    </div>
                    <div className="next" onClick={() => handleNext(itemIndex, totalMenuItems, setItemIndex, gpSlideShow)}>
                        <i ><FontAwesomeIcon icon={faAngleRight} /></i>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Popout;

