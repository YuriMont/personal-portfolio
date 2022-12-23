import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import banner from "../assets/img/developer-banner.png";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "ReactJs",
    "NodeJs",
    "Java",
    "PHP",
    "Javascript",
    "Typescript",
    "Springboot",
    "python",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="banner-conteiner">
            <span className="tagline">Bem-vindo ao meu Portifolio</span>
            <h1>
              Oi! me chamo Yuri, sou desenvolvedor em <br />
              <span className="wrap"><span className="invisible">.</span> {text}</span>
            </h1>
            <p className="mt-4">
              Coloco-me a disposição para trabalhar na área de desenvolvimento.
              Acredito que posso contribuir com a geração de resultados para
              amplos projetos, já que realizei o curso técnico de informática no
              Instituto Federal da Paraíba, onde desenvolvi inúmeros
              conhecimentos no campo da computação
            </p>
            <button onClick={() => (window.location.href = "#connect")}>
              Entre em contato <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={banner} alt="banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
