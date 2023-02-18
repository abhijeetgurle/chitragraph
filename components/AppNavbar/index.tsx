import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import styles from "./AppNavbar.module.scss";
import { useRouter } from "next/router";

export default function AppNavbar() {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                href="/gallery"
                className={`${styles.link} ${
                  router.pathname === "/gallery" ? styles.active : ""
                }`}
              >
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                href="/about"
                className={`${styles.link} ${
                  router.pathname === "/about" ? styles.active : ""
                }`}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                href="/contact-me"
                className={`${styles.link} ${
                  router.pathname === "/contact-me" ? styles.active : ""
                }`}
              >
                Contact Me
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Social</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
