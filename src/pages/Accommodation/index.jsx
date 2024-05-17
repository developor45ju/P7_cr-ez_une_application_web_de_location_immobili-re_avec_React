import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Rating from "../../components/Rating";
import Tag from "../../components/Tags";

function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(
        "http://localhost:3000/datas/accommodations.json"
      );
      const accommodationFromApi = await res.json();
      setAccommodation(accommodationFromApi);
    };
    fetchArticle();
  }, []);
  //  const nbStars = 5;
  //  const nbStarsActif = accommodation.rating;

  const currentAccommodation = accommodation.find(
    (accommodation) => accommodation.id === id
  );

  const fname = currentAccommodation?.host.name.split(" ")[0];
  const lname = currentAccommodation?.host.name.split(" ")[1];

  return (
    <main>
      {currentAccommodation && (
        <>
          <div className="gallery">
            <Gallery galleryImages={currentAccommodation.pictures} />
          </div>
          <article className="accommodation">
          <div className="accommodation__wrap">
            <div className="accommodation__about">
            <h1>{currentAccommodation.title}</h1>
              <p>{currentAccommodation.location}</p>

            </div>
              <Tag tags={currentAccommodation.tags} />
            <div className="accommodation__host">
              <div className="full-name">
                <p>{fname}</p>
                <p>{lname}</p>
              </div>
              <img
                src={currentAccommodation.host.picture}
                alt={currentAccommodation.host.name}
              />
            </div>
            <Rating rate={currentAccommodation.rating} />
          </div>
          </article>
        </>
      )}
    </main>
  );
}

export default Accommodation;
