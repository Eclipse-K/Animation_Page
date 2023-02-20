import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarDrop() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Animation</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="연도별"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">1970</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">1980</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">1990</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">2000</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDrop;
