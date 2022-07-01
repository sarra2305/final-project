import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RGS from './RGS.jpeg'
function navBar() {
  let userIsConnected = JSON.parse(localStorage.getItem('current_user'))
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div >

        <Navbar fixed="top" bg="black" variant="dark" expand="lg">
    <Container className="navbar">
    
    <Navbar.Brand className ="navbarLogo">
    <img className ="logo"src={RGS} alt="logo" />   </Navbar.Brand>
    <Nav className="nav">
      <Nav.Link as ={Link} to="/" >Home</Nav.Link>
      <Nav.Link as ={Link} to="/AboutUs">AboutUs</Nav.Link>
      <Nav.Link as ={Link} to ="/Destination">Destination</Nav.Link>
      <Nav.Link as ={Link} to ="/Hotels">Hotels</Nav.Link>

      {userIsConnected? <Nav.Link onClick={() => logout()}>Logout</Nav.Link> : <Nav.Link as ={Link} to ="/Login">Login</Nav.Link>}
    
    </Nav>

    </Container>
    
  </Navbar>
    </div>
  )
}

export default navBar