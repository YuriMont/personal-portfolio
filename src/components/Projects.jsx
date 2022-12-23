import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Projetos } from "../objects/projetos";

export function Projects() {
  const projects = Projetos.values;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Durante a realização de alguns eventos e cursos, coloquei em
              prática meus conhecimentos realizando alguns projetos tanto
              voltados ao frontend quanto ao backend, utilizando as mais
              variadas tecnologias e metodologias de criação
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Pagina 1</Nav.Link>
                </Nav.Item>
                <Nav.Item className="disable">
                  <Nav.Link eventKey="disabled" disabled>
                    Pagina 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="disable">
                  <Nav.Link eventKey="disabled" disabled>
                    Pagina 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
