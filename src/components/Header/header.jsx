import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from '../../Images/backlot-logo.png'
import { useContext } from "react";
import { useState } from "react";
import { userContext } from '../../context/UserCtx'
import { useHistory } from 'react-router-dom'
import './header.css'

const Header = () => {
    const { user, setUser } = useContext(userContext);

    const history = useHistory()

    const logout = () => {
        setUser(null)
        history.push("/home");
    }

    const signin = () => {
    }

    return (
        <>
            <Navbar id="backlot-nav" collapseOnSelect expand="md" bg="dark" variant="dark" className={(window.innerWidth >= 770 ? "mx-5 " : " ") + "mb-5"}>
                <Navbar.Brand href="#home">
                    <Link to="/home">
                        <img className="header-logo" src={Logo} alt='logo' width="50" height="50" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <Link to="/reviews"><Nav.Link to="/reviews" className="nav-buttons mx-2" href="#reviews">Film Reviews</Nav.Link></Link>
                        <Link to="/podcasts"><Nav.Link className="nav-buttons mx-2" href="#podcasts">Podcast</Nav.Link></Link>
                        <Link to="/videos"><Nav.Link className="nav-buttons mx-2" href="#videos">Videos</Nav.Link></Link>
                        <Link to="/team"><Nav.Link className="nav-buttons mx-2" href="#team">Team</Nav.Link></Link>
                        <Link to="/aboutus"><Nav.Link className="nav-buttons mx-2" href="#aboutus">About Us</Nav.Link></Link>
                        {user ? <Link onClick={logout}><Nav.Link href="#signup">Log Out</Nav.Link></Link> : <Link onClick={signin} to="/signup"><Nav.Link href="#signup">Sign Up</Nav.Link></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;