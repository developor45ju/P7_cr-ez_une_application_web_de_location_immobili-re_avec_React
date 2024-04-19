import { NavLink } from "react-router-dom";

function Header({nav, logo}) {
    return (
        <header>
            <div className="header__wrap">
                <h1><img src={logo} alt="Logo du site" /></h1>

                <nav>
                    <ul>
                        {nav.map((item, index) => (
                            <li key={index}><NavLink to={item.path}className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          }>{item.name}</NavLink></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;