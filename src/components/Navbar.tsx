import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <button
          style={{
            backgroundColor: "#fff",
            width: "3rem",
            height: "3rem",
            border: "none",
            borderRadius: "30px",
          }}
        >
          <img
            src="carrito.svg"
            alt="3rem"
            style={{
              width: "4rem",
              height: "4rem",
              marginTop: "-9px",
              marginLeft: "-13px",
            }}
          />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center
          aling-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
              top: "-25px",
              left: "20px",
              transform: "traslate(25%, 25%)",
            }}
          >
            3
          </div>
        </button>
      </Container>
    </NavbarBs>
  );
}
