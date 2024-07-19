import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Rating from "../../components/Rating";
import Tag from "../../components/Tags";
import Collapse from "../../components/Collapse";

function Accommodation() {
  const params = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState([]);
  const [currentAccommodation, setCurrentAccommodation] = useState(null);

  let firstname = "";
  let lastname = "";

  const fetchArticle = async () => {
    const res = await fetch(
      `${process.env.PUBLIC_URL}/datas/accommodations.json`
    );
    const accommodationFromApi = await res.json();
    setAccommodation(accommodationFromApi);
  };
  
  useEffect(() => {
    fetchArticle();    
  }, []);
  
  useEffect(() => {
    if (accommodation.length > 0) {
      const foundAccommodation = accommodation.find(
        (accommodation) => accommodation.id === params.id
      );
      if (!foundAccommodation) {
        navigate("/404");
      } else {
        setCurrentAccommodation(foundAccommodation);
      }
    }
  }, [accommodation, params.id, navigate])

  firstname = currentAccommodation?.host.name.split(" ")[0];
  lastname = currentAccommodation?.host.name.split(" ")[1];

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
                  <p>{firstname}</p>
                  <p>{lastname}</p>
                </div>
                <img
                  src={currentAccommodation.host.picture}
                  alt={currentAccommodation.host.name}
                />
              </div>
              <Rating rate={currentAccommodation.rating} />
            </div>

            <div className="collapse">
              <div className="collapse__wrap">
                <Collapse title="Description">
                  <p>{currentAccommodation.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                  <ul>
                    {currentAccommodation.equipments.map((items, index) => (
                      <li key={index}>{items}</li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            </div>
          </article>
        </>
      )}
    </main>
  );
}

export default Accommodation;
