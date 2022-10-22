import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/static/images/DISNEY-LOGO-WHITE-520x160.png"
              width="200"
              height="64"
            ></Image>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> */}
          <Nav.Link className="nav-link-white" href="#">
            TV
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Store
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Games
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Video
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Win
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Holidays
          </Nav.Link>
          <Nav.Link className="nav-link-white" href="#">
            Disneylife
          </Nav.Link>
          {/* </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;