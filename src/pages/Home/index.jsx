import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [accommodations, setAccommodations] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch('http://localhost:3000/datas/accommodations.json');
            const accommodationsFromApi = await res.json();
            setAccommodations(accommodationsFromApi);
        }
        fetchArticles();
     }, [])

     return (
        <main>
            <div className="thumbnail">
                <div className="wrap-thumbnail">
                    <img src="./images/thumbnailH.jpg" alt="Vignette côte mer" />
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
            </div>
            <section className="gallery-cards">
                <div className="wrap-card">
                    {accommodations && accommodations.map(card => {
                        return (
                        <Link to={`/accommodation/${card.id}`} key={card.id}>
                            <article className="card">
                                <img src={card.cover} alt="Logement" />
                                <h3>{card.title}</h3>
                            </article>
                         </Link>
                    )})}
                </div>
            </section>
        </main>
     )
}

export default Home;