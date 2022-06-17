import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <Container className="form-content">
        <Row>
          <Col md={12} className="py-5">
            <Form id="formCotizador" className="pqr-form mx-auto">
              <Row className="bg-title">
                <Col md={12}>
                  <h1 className="form-title">Información del solicitante</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Tipo de persona</Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                    <option>Natural</option>
                    <option>Jurídica</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Persona natural</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Tipo de Identificación</Form.Label>
                  <Form.Select>
                    <option> Seleccione </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Identificación</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Celular</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Concesionario</Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Punto de venta</Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>
                    ¿La PQR a registrar está asociada a un vehículo?
                  </Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Información del vehículo</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Chasis</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Placa</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Año</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Fecha de venta</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Kilometraje</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>
                    ¿El solicitante es el propietario del vehículo?
                  </Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Tipo de uso</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Detalle del caso</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Tipificaciones</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={12}>
                  <Form.Label>Detalle del caso</Form.Label>
                  <Form.Control as="textarea" rows={2} />
                </Form.Group>
              </Row>
              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Anexo</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Desea anexar documento?</Form.Label>
                  <Form.Select>
                    <option>Seleccione</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={12}>
                  <Form.Label>Adjuntar anexo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
