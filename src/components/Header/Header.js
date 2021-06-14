import React from 'react';
import logo from '../../images/logo/PNG 250 KB website logo.png';
import './Header.css'

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-clr">
        <a className="navbar-brand" href="#"> <img src={logo} width="130vw" height="70px" alt="Thrilleasy logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon btn btn-outline-light"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link text-white" href="#">ACTIVITIES<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">COUNTRIES</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">TOURS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">BLOGS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">CONTACT</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="River Rafting" aria-label="Search" />
            <button className="btn btn-outline-dark text-white my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    );
};

export default Header;