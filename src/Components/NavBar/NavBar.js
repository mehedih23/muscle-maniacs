import './NavBar.css'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CustomLink from '../CustomLink/CustomLink'

const NavBar = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" >
            <Container>
                <CustomLink style={{ textDecoration: 'none' }} to="/">
                    <h1 className='logo-title'> Muscle <span style={{ color: '#E8BD0D' }}>Maniacs</span></h1>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink className='link' to="/services">Services</CustomLink>
                        <CustomLink className='link' to="/aboutus">About us</CustomLink>
                        <CustomLink className='link' to="/blog">Blog</CustomLink>
                        <CustomLink className='link' to="/contactus">Contact Us</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink className='link' to="/signup">Sign Up</CustomLink>
                        <CustomLink className='link' to="/login">Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar