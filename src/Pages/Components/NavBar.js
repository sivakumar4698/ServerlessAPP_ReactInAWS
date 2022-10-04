import React from 'react'
import { Navbar, Container} from 'react-bootstrap'
import Headerlogo from '../assets/headerlogo.png'

const NavBar = () => {
  return (
    <div>
        <Navbar  fixed="top" >
    <Container>
      <Navbar.Brand href="#home">
        <img
        style={{ float:"left"}}
          src={Headerlogo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar;
