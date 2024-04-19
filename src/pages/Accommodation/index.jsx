import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Gallery from '../../components/Gallery';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

function Accommodation() {

    const { id }  = useParams();
    const [accommodation, setAccommodation ] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await fetch('http://localhost:3000/datas/accommodations.json');
            const accommodationFromApi = await res.json();
            setAccommodation(accommodationFromApi);
        }
        fetchArticle();
     }, [])
    //  const nbStars = 5;
    //  const nbStarsActif = accommodation.rating;

    const currentAccommodation = accommodation.find(accommodation => accommodation.id === id);

    return (
        <main>
            {currentAccommodation && (
                <>
                    <div className="gallery">
                        <Gallery galleryImages={currentAccommodation.pictures} />
                    </div>
                    <article className="accommodation">
                        <h1>{currentAccommodation.title}</h1>
                    </article>
                </>
            )}
        </main>
    );




}

export default Accommodation;