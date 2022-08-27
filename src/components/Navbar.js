import React from 'react'
import '../App.css';
import { BrightnessLow } from 'react-bootstrap-icons';
// import { BrightnessLowFill } from 'react-bootstrap-icons';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`text-${props.mode !== 'light' ? 'light' : 'dark'} navbar-brand`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className={`text-${props.mode !== 'light' ? 'light' : 'dark'} nav-link active" aria-current="page`} href="#">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <Link id="home" className={`text-${props.mode !== 'light' ? 'light' : 'dark'} nav-link active " aria-current="page"`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="about" className={`text-${props.mode!=='light'?'light':'dark'} nav-link`} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="submit" className={`me-0 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`}>Search</button> */}
                        <div className="my-0 ps-1.5em form-check bg-light">

                            <BrightnessLow onClick={props.toggleMode} className="me-4 mt-1 ms-0 px-0" color="black" size={33} />

                            <BrightnessLow onClick={props.gtoggleMode} className="me-4 mt-1 ms-0 px-0" color="green" size={33} />

                            <BrightnessLow onClick={props.rtoggleMode} className="me-4 mt-1 ms-0 px-0" color="red" size={33} />

                            <BrightnessLow onClick={props.btoggleMode} className="me-4 mt-1 ms-0 px-0" color="blue" size={33} />
                            {/* <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"></label> */}
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
}
