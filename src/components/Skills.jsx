import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Habilidades } from "../objects/habilidades";

export function Skills() {
  const skills = Habilidades.values;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>
                Por causa de meu curso Técnico em informática e diversos outros
                conhecimentos obtidos por meio de cursos e video aulas onlines
                adquiri algumas habilidades e experiência com diversas
                tecnologias extremamente relevantes
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill) => (
                  <div className="item">
                    <div className="img">
                      <CircularProgressbar
                        styles={{
                          path: {
                            stroke: "rgb(96,48,173)",
                          },
                          trail: {
                            stroke: "#151515fe",
                          },
                          text: {
                            fill: "#6030adfe",
                            fontWeight: "bold",
                          },
                        }}
                        value={skill.percentage}
                        text={`${skill.percentage}%`}
                      />
                    </div>
                    <h5>{skill.language}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="imagem" />
    </section>
  );
}
