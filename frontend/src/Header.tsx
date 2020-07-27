import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <>

            <Navbar bg="info" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ministerio Público
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/fiscalias">Fiscalías</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )

}