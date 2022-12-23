import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/telegram.png";
import { useEffect, useState } from "react";

export function Footer() {

  const [ano, setAno] = useState();

  useEffect(() => {
    let data = new Date();
    setAno(data.getFullYear());
  }, []);

  return (
    <footer className="footer">
      <Container className="align-items-center">
        <Row>
          <Col>
          <a href="#home"><span className="logo">Yuri Monteiro</span></a>
            
            <p> {`Yuri Monteiro© ${ano}. Todos os direitos reservados`}</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yuri-monteiro-5b6b48205/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/YuriMont">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://t.me/yuri_monteiro1043">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
