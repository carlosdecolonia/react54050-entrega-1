import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    // <>
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>


        <Link to="/">
          <img src="img/logo_react.jpg" alt="Logo mi Tienda" />
        </Link>

        <nav  >
          <NavLink to="/categoria/Hardware" >Hardware</NavLink>
          <NavLink to="/categoria/Software">Software</NavLink>
          <NavLink to="/categoria/Accesorios">Accesorios</NavLink>
          <NavLink to="/categoria/Outlet">Outlet</NavLink>
        </nav>




        <Nav className="ml-auto">
          <Nav.Link href="#shopping-cart"> <CartWidget /> </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // </>
  );
}

export default NavBar;