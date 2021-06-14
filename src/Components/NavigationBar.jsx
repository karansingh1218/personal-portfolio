import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-scroll';
import "../CSS/Nav.css"


export const NavigationBar = () => {

    return (
        <div >
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Link className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}>
                <Navbar.Brand href="#home">Karan Singh</Navbar.Brand>
           </Link>   
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"> 
    <Nav className="mr-auto">
    <Link className="link"
      activeClass="active"
      to="About"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}>
      <Nav.Link href="About">About</Nav.Link>
    </Link>
    <Link className="link"
      activeClass="active"
      to="Experience"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}>
      <Nav.Link href="#Experience">Experience</Nav.Link>
      </Link>
      <Link className="link"
      activeClass="active"
      to="Education"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}>
      <Nav.Link href="#Education">Education</Nav.Link>
      </Link>
      <Link className="link"
      activeClass="active"
      to="Projects"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      </Link>
      {/* <Link className="link"
      activeClass="active"
      to="Contact"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}>
      <Nav.Link href="#Contact">Contact</Nav.Link>
      </Link> */}
    </Nav>

  </Navbar.Collapse>

</Navbar>

            </div>
    )
}

export default NavigationBar;
