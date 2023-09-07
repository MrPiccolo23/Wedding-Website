import "../css/Menu.css";

export const initializeMenu = () => {
    const wHeight = window.innerHeight;
    document.querySelectorAll(".menu-popup .gp-img").forEach(elem => {
        elem.style.maxHeight = wHeight + "px";
    });

    // Close popup on 'x' click
    const closeBtn = document.querySelector(".gp-close");
    const closeBtnHandler = () => {
        const popup = document.querySelector(".menu-popup");
        if (popup) {
            popup.classList.remove("open");
        }
    }
    closeBtn && closeBtn.addEventListener("click", closeBtnHandler);

    // Close popup on click outside of gp-container
    const galleryPopup = document.querySelector(".menu-popup");
    const galleryPopupHandler = (event) => {
        if (event.target.classList.contains("open")) {
            galleryPopup.classList.remove("open");
        }
    }
    galleryPopup && galleryPopup.addEventListener("click", galleryPopupHandler);

    // NEW CODE STARTS FROM HERE.
    const menuButton = document.querySelector('.menu-section .filter-btn.active'); // Change to a more specific selector if necessary
    const downloadButton = document.querySelector('.menu-section .filter-btn'); // Change to a more specific selector if necessary

    if (menuButton && downloadButton) {
        menuButton.addEventListener('click', function() {
            swapColors(menuButton, downloadButton);
        });

        downloadButton.addEventListener('click', function() {
            swapColors(downloadButton, menuButton);
        });
    }

    // Return cleanup function
    return () => {
        closeBtn && closeBtn.removeEventListener("click", closeBtnHandler);
        galleryPopup && galleryPopup.removeEventListener("click", galleryPopupHandler);
        menuButton && menuButton.removeEventListener("click", swapColors);
        downloadButton && downloadButton.removeEventListener("click", swapColors);
    }
};

function swapColors(btn1, btn2) {
    let tempColor = getComputedStyle(btn1).backgroundColor;
    btn1.style.backgroundColor = getComputedStyle(btn2).backgroundColor;
    btn2.style.backgroundColor = tempColor;
}

export const handlePrev = (itemIndex, totalMenuItems, setItemIndex, gpSlideShow) => {
    if (itemIndex === 0) {
        setItemIndex(totalMenuItems - 1);
    } else {
        setItemIndex(itemIndex - 1);
    }
    gpSlideShow();
};

export const handleNext = (itemIndex, totalMenuItems, setItemIndex, gpSlideShow) => {
    if (itemIndex === totalMenuItems - 1) {
        setItemIndex(0);
    } else {
        setItemIndex(itemIndex + 1);
    }
    gpSlideShow();
};
