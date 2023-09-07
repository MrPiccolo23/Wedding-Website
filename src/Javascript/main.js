const main = () => {
    // home section slideshow
    let slideIndex = Array.from(document.querySelectorAll(".slide")).findIndex(slide => slide.classList.contains("active"));
    const slideLen = document.querySelectorAll(".slide").length;

    function slideShow() {
        document.querySelectorAll(".slide").forEach((slide, idx) => {
            slide.classList.remove("active");
            if (idx === slideIndex) {
                slide.classList.add("active");
            }
        });
        
        if (slideIndex === slideLen - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
    }
    
    slideShow();
};

export default main;
