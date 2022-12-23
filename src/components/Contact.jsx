import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/developer-contact.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contact() {

  const config = {
    service_email: import.meta.env.VITE_REACT_SERVICE_EMAIL,
    template_email: import.meta.env.VITE_REACT_TEMPLATE_EMAIL,
    id_email: import.meta.env.VITE_REACT_ID_EMAIL,
  };

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");

  function onFormUpdate(category, value) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Enviando...");
    const templateParams = {
      from_name: e.target[0].value,
      message: e.target[4].value,
      name: e.target[0].value + e.target[1].value,
      phone: e.target[3].value,
      email: e.target[2].value,
    };
    emailjs
      .send(
        config.service_email,
        config.template_email,
        templateParams,
        config.id_email
      )
      .then((response) => {
        toast.success('Mensagem enviada com sucesso!');
        setButtonText("Enviar");
        setFormDetails(formInitialDetails);
      })
      .catch((error) => {
        toast.error('Erro ao enviar a mensagem, tente novamente');
        setButtonText("Enviar");
        setFormDetails(formInitialDetails);
      });
  }



  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={5000}/>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact" />
            </Col>
            <Col md={6}>
              <h2>Entrar em contato</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="Primeiro nome"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      required={true}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Sobrenome"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required={true}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required={true}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Telefone"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      required={true}
                    />
                  </Col>
                  <Col className="pad">
                    <textarea
                      rows={6}
                      value={formDetails.message}
                      placeholder="Mensagem"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required={true}
                    />
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
