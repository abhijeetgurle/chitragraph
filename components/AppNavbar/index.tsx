import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import styles from "./AppNavbar.module.scss";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export default function AppNavbar() {
  const router = useRouter();

  const onLinkClicked = (e: any, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navbar}>
          <Nav>
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
            <Nav.Link>
              <Link
                href="/"
                className={`${styles.link} ${
                  router.pathname === "/" ? styles.active : ""
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Profile Picture"
                  width={140}
                  height={70}
                />
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                href="https://instagram.com/chitr_agraph?igshid=YmMyMTA2M2Y="
                className={`${styles.link}`}
                target="_blank"
                onClick={(e) =>
                  onLinkClicked(
                    e,
                    "https://instagram.com/chitr_agraph?igshid=YmMyMTA2M2Y="
                  )
                }
              >
                <InstagramIcon />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                href="https://www.facebook.com/akash.gurle.5"
                className={`${styles.link}`}
                target="_blank"
                onClick={(e) =>
                  onLinkClicked(e, "https://www.facebook.com/akash.gurle.5")
                }
              >
                <FacebookIcon />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
