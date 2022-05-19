import "./styles.css";

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="portfolio-nav-content">
                    
                    <div className="logo-nav-content">
                        <h1>RAUL /</h1>
                    </div>

                    <div className="ancora-nav-content">                        
                        <a>
                            <h1>ABOUT ME</h1>
                        </a>
                        <a>
                            <h1>EXPERIENCES</h1>
                        </a>       
                        <a>
                            <h1>CONTACT ME</h1>
                        </a>
                    </div>

                    <div className="cv-nav-btn">
                        <a>
                            <h1>DOWNLOAD CV</h1>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

