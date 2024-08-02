import { useState } from "react";

function Gallery({ galleryImages }) {
    const [current, setCurrent] = useState(0);
    
    const slideWidth = () => {
        const imgWidth = document.getElementsByClassName('gallery__slide')[0];
        if (!imgWidth) {
            return 0;
        }
        return imgWidth.width;
    }
    
    const nextSlide = () => {
      setCurrent(nextCurrent => nextCurrent === galleryImages.length - 1 ? 0 : nextCurrent + 1);
    }
    
    const prevSlide = () => {
      setCurrent(prevCurrent => prevCurrent === 0 ? galleryImages.length - 1 : prevCurrent - 1);
    }

    return (
        <div className="gallery__wrap">
            <div className="gallery__container" style={{"transform": `translateX(-${current * slideWidth()}px)`}}>
                {galleryImages.map((slide, index) => (
                    <img src={slide} alt="logement" key={index} className={`gallery__slide ${index === current ? 'active' : ''}`}  />
                ))}
            </div>
            <img src={process.env.PUBLIC_URL + "/images/arrowLeft.png"} alt="Flèche gauche" onClick={prevSlide} id="arrowLeft" />
            <img src={process.env.PUBLIC_URL + "/images/arrowRight.png"} alt="Flèche droite" onClick={nextSlide} id="arrowRight" />
            <span className="number-image-current">{current + 1}/{galleryImages.length}</span>
        </div>
    )
}

export default Gallery;