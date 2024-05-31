import Collapse from "../../components/Collapse";

function About() {
    return ( 
        <>
            <div className="thumbail">
                <div className="wrap-thumbail">
                    <img src="./images/thumbailA.jpg" alt="Vignette montagne" />
                </div>
            </div>
            <section className="about">
                <div className="wrap-about">
                    {[...Array(4)].map((items ,i) => {
                        console.log(i);
                        switch (i) {
                            case 0:
                                return (
                                    <Collapse title="Fiabilité" key={i}>
                                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                                    </Collapse>
                                );
                            case 1:
                                return (
                                    <Collapse title="Respect" key={i}>
                                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                                    </Collapse>
                                );
                            case 2:
                                return (
                                    <Collapse title="Service" key={i}>
                                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                                    </Collapse>
                                );
                            case 3:
                                return (
                                    <Collapse title="Sécurité" key={i}>
                                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                                    </Collapse>
                                );
                            default:
                                return null;
                        }                    
                    })}
                </div>
            </section>
        </>
    )
}

export default About;