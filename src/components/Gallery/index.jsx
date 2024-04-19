import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faAngleLeft} onClick={prevSlide} id="arrowLeft" />
            <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} id="arrowRight" />
        </div>
    )
}

export default Gallery;