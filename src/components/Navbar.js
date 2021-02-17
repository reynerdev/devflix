import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/video-player.svg';
const Navbar = ({ setInputSearch, fetchData }) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io" />
          <img src={Logo} width="50" alt="" />

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/">
                <button className="button is-primary" onClick={fetchData}>
                  Home
                </button>
              </Link>
            </div>

            <div className="navbar-item is-expanded ">
              <input
                className="input is-primary  is-rounded"
                type="text"
                placeholder="Search..."
                onChange={(e) => setInputSearch(e.target.value)}
              />
            </div>

            <div className="navbar-item">
              <button className="button is-primary" onClick={fetchData}>
                Search
              </button>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
