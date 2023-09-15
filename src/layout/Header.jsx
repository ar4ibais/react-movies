import React from "react";

function Header() {
    return (
        <header className="header">
            <nav className="green darken-1 header__nav">
                <div className="nav-wrapper">
                    <a href="!#" className="brand-logo">React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;