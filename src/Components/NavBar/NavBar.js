import './NavBar.css'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CustomLink from '../CustomLink/CustomLink'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'

const NavBar = () => {
    const [user] = useAuthState(auth);
    return (<>
        <Navbar className='navbar' collapseOnSelect expand="lg" >
            <Container>
                <CustomLink style={{ textDecoration: 'none' }} to="/">
                    <h1 className='logo-title'> Muscle <span style={{ color: '#E8BD0D' }}>Maniacs</span></h1>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink className='link' to="/shop">Shop</CustomLink>
                        <CustomLink className='link' to="/aboutus">About us</CustomLink>
                        <CustomLink className='link' to="/blog">Blog</CustomLink>
                        <CustomLink className='link' to="/contactus">Contact Us</CustomLink>
                    </Nav>
                    <Nav>
                        {
                            user ? <CustomLink onClick={() => signOut(auth)} className='link' to="/">Logout</CustomLink> :
                                <CustomLink className='link' to="/login">Login</CustomLink>

                        }
                        <CustomLink className='link' to="/signup">Sign Up</CustomLink>
                        {/* <CustomLink className='link' to="/login">Login</CustomLink><CustomLink className='link' to="/signup">Sign Up</CustomLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default NavBar