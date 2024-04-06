import { useEffect, useState } from 'react';

function Home() {
    const [datas, setData] = useState(null);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const fetchActicles = async () => {
            const res = await fetch('http://localhost:3000/datas/accommodations.json');
            const data = await res.json();
            setData(data);
            setLoad(true);
        }
        fetchActicles();
     }, [])

     return (
        <main>
            <div className="thumbail">
                <div className="wrap-thumbail">
                    <img src="./images/thumbailH.jpg" alt="Vignette côte mer" />
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
            </div>
            <section className="gallery-cards">
                <div className="wrap-card">
                    {load && datas.map(card => {
                        return (
                        <article className="card" key={card.id}>
                            <img src={card.cover} alt="Logement" />
                            <h3>{card.title}</h3>
                        </article>
                        )
                    }
                    )}
                </div>
            </section>
        </main>
     )
}

export default Home;