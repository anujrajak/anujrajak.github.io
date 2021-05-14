const NavBar = () => {
    return (
        <header className="navbar">
            <section className="navbar-section">
            <a
                href="https://github.com/anujrajak"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="nav-icon"
                src="https://img.icons8.com/color/344/github--v1.png"
                alt="github"
                />
            </a>
            <a
                href="https://www.instagram.com/anuj__rajak/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="nav-icon"
                src="https://img.icons8.com/color/344/instagram-new.png"
                alt="instagram"
                />
            </a>
            <a
                href="mailto:mr.anujrajak@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                className="nav-icon"
                src="https://img.icons8.com/color/344/gmail.png"
                alt="instagram"
                />
            </a>
            </section>
        </header>
    )
}

export { NavBar };