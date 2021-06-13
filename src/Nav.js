import React, {useState, useEffect, handleShow} from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return(
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo"
        src="https://yt3.ggpht.com/ytc/AAUvwnjKOqtP-gV25CkNKjDm9WmYM0Jo2vpqht9ugPq0=s176-c-k-c0x00ffffff-no-rj" 
        alt="RudaFilms Logo"
        />

       <img className="nav__avatar"
        src="https://pbs.twimg.com/media/BnOZEzdCEAAqjju?format=jpg" 
        alt="RudaFilms Logo"
        />
    </div>
    );
}

export default Nav;