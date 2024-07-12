import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main id="page-not-found">
            <div className="error-wrapper">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to={'/'}>Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default NotFoundPage;