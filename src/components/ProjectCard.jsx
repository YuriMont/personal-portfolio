import { Col, Container, Modal, Row } from "react-bootstrap";
import github from "../assets/img/github.svg";
import { useEffect, useState } from "react";
import { Description1 } from "../objects/description1";

export function ProjectCard({ title, description, imgUrl, linkGithub, project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col sm={6} md={4}>
        <div className="project-card" onClick={handleShow}>
          <img src={imgUrl} alt="" id="img-card" />
          <h4>{title}</h4>
        </div>
      </Col>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        centered 
        size="lg"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="modal-body-project">
              <div className="modal-image">
                <img src={imgUrl} alt="" />
                <div className="modal-buttons">
                  <a href={linkGithub}>
                    <img src={github} alt="" />
                  </a>
                  <a href={project} id="proj" onClick={handleClose}>
                    <span>Visualizar projeto</span>
                  </a>
                </div>
              </div>
            <div className="modal-description">
              <span id="desc">
                  {description}
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer"></Modal.Footer>
      </Modal>
    </>
  );
}
