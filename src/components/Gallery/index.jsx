import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Gallery({ galleryImages }) {
    const [current, setCurrent] = useState(0);
    const lengthGallery = galleryImages.length;
    const nextSlide = () =>  setCurrent(current === lengthGallery -1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? lengthGallery - 1 : current - 1);

    return (
        <>
            {lengthGallery > 1 && (
                <FontAwesomeIcon icon={faAngleLeft} onClick={prevSlide} id="arrowLeft" />
            )}
            {lengthGallery > 1 && (
                <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} id="arrowRight" />
            )}    
            {galleryImages.map((slide, index) => (
                <div key={index} className={current === index ? 'gallery__slide--active' : 'gallery__slide'}>
                    {index === current && <img src={slide} alt="logement" />}
                </div>
            ))}
        </>
    )
}

export default Gallery;