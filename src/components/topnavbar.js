import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router';


class TopNavBar extends React.Component{
    render(){
        return(
            <div id="page-wrap" >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Masache Private Schools(MPS)</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto items-spacing">
                    <Link to=""></Link>
                    <Link to=""></Link>
                    </Nav>
                    <nav>
                   
                    <Link to="/contacts">
                        Contact Us
                    </Link>
                   </nav>
                </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default TopNavBar;