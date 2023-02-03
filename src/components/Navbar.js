import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link " activeClassName="active-link" exact>BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-link " activeClassName="active-link" exact>CATEGORIES</Link>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">
        <BsFillPersonFill />
      </span>

    </button>
  </nav>
);

export default Navbar;
