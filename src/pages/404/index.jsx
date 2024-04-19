import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main id="page-not-found">
            <div id="page-not-found__wrap">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to={'/'}>Retourner sur la page d’accueil</Link>
            </div>
        </main>
    )
}

export default NotFoundPage;