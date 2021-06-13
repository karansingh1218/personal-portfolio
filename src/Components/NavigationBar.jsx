import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export const NavigationBar = () => {

    return (
        <div>
             
            <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand href="#home">Karan Singh</Navbar.Brand>
  </LinkContainer>   
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"> 
    <Nav className="mr-auto">
    <LinkContainer to="/about">
      <Nav.Link href="About">About</Nav.Link>
    </LinkContainer>
      <Nav.Link href="#link">Experience</Nav.Link>
      <Nav.Link href="#link">Education</Nav.Link>
      <Nav.Link href="#link">Projects</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>
            </div>
    )
}

export default NavigationBar;
