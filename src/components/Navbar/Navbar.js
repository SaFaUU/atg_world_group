import React from 'react';
import atg_world from '../../assets/argworld_logo.png'
import search_icon from '../../assets/search_icon.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar_padding'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <img src={atg_world} alt="" className="navbar-brand logo_size" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='mx-auto'>
                        <form className="d-flex" role="search">
                            <img src={search_icon} alt="" />
                            <input className="search-bar" type="search" placeholder="Search for your favourite groups in ATG" aria-label="Search" />
                        </form>
                    </div>
                    <div className="justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" >a</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;