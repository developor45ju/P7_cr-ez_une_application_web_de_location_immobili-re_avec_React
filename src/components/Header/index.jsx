import { NavLink } from "react-router-dom";

function Header({nav, logo}) {
    const handleActiveState = ({ isActive }) => isActive ? "active" : "";
    return (
        <header>
            <div className="header__wrap">
                <h1><img src={logo} alt="Logo du site" /></h1>

                <nav>
                    <ul>
                        {nav.map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                to={item.path}
                                className={handleActiveState}>{item.name}</NavLink>
                          </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;