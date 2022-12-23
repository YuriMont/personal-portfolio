import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/telegram.png";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScrool = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScrool);
    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled && "scrolled"}>
        <Container>
          <Navbar.Brand href="#home">
            <span className="logo">Yuri Monteiro</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Habilidades
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projetos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yuri-monteiro-5b6b48205/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/YuriMont">
                  <img width={60} height={60} src={navIcon2} alt="" />
                </a>
                <a href="https://t.me/yuri_monteiro1043">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <Nav.Link href="#connect">
                <button
                  onClick={() => onUpdateActiveLink("connect")}
                >
                  <span>Entrar em contato</span>
                </button>
              </Nav.Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
