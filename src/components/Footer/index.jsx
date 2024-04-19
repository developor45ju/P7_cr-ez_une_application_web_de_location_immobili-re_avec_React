function Footer ({logo, name}) {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div className="footer__wrap">
                <h3><img src={logo} alt="Logo site" /></h3>
                <p>© {year} {name}. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;