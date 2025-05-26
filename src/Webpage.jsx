function Webpage(){
    return(
        <>
        <div className="body">
        <header className="header">
        <div className="logo">Logo</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <section className="hero-sec">
                <h1>Welcome to the site!!!</h1>
                <p>Build fast,respomsive webpage.This a responsive webpage using grid and flex boxes.</p>
                <button className="web-button"><a href="#"> Get Started</a></button>
            </section>
       
        </header>
        <footer classNam="footer">
            <p>Follow us on:</p>
                <div classNAme="links">
                    <a href="#">Twitter</a> &nbsp;
                    <a href="#">instagram</a>&nbsp;
                    <a href="#">Linkedin</a>&nbsp;
                </div>
                <p>&copy:2025.All rights reserved</p>
            </footer>
            </div>
        </>
    );
}
export default Webpage;