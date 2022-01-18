import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          <img
            src="https://res.cloudinary.com/djjuu1pzp/image/upload/v1641963716/Math_Magicians_blb9nf.png"
            height="20"
            alt="Math Magicians"
            loading="lazy"
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse  d-flex justify-content-end navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bdr">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item bdr">
              <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quote">Quote</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
