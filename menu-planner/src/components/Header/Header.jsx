import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="ul">
            <li>
              <a href="/" className="links">
                Home
              </a>
            </li>
            <li>
              <a href="/Recipies" className="links">
                Recipies
              </a>
            </li>
            <li>
              <a href="/User" className="links">
                Profil
              </a>
            </li>
            <li>
              <a href="/Contact" className="links">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
