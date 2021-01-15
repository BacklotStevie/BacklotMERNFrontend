import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from '../../Images/backlot-logo.png'
// import { useState, useContext } from "react";
// import { userContext } from '../../context/UserCtx'
// import { useHistory } from 'react-router-dom'
import './header.css'

const Header = () => {

    // const { user, setUser } = useContext(userContext);
    // const history = useHistory()

    // const logout = () => {
    //     setUser(null)
    //     history.push("/home");
    // }

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="mr-5 ml-5">
                <Navbar.Brand href="#home">
                    <Link to="/home">
                        <img className="logo" src={Logo} alt='logo' width="50" height="50" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-right">
                        <Link to="/reviews"><Nav.Link href="#reviews">Film Reviews</Nav.Link></Link>
                        <Link to="/podcastpage"><Nav.Link href="#podcasts">Podcast</Nav.Link></Link>
                        <Link to="/videospage"><Nav.Link href="#videos">Videos</Nav.Link></Link>
                        <Link to="/teampage"><Nav.Link href="#team">Team</Nav.Link></Link>
                        <Link to="/aboutus"><Nav.Link href="#aboutus">About Us</Nav.Link></Link>
                        {/* {user ? <Link onClick={Logout}><Nav.Link href="#signup">Log Out</Nav.Link></Link> : <Link to="/signup"><Nav.Link href="#signup">Sign Up</Nav.Link></Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;