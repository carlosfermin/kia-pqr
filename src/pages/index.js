import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles.css";

const IndexPage = () => {
  const [tipoPersona, setTipoPersona] = useState("1");
  const [razonSocial, setRazonSocial] = useState(""); // eslint-disable-line
  const [tiposIdentificacion, setTiposIdentificacion] = useState([]);
  const [tipoIdentificacion, setTipoIdentificacion] = useState("1");
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("Sin Dirección");
  const [email, setEmail] = useState("");
  const [empresas, setEmpresas] = useState([]);
  const [empresa, setEmpresa] = useState("");
  const [concesionarios, setConcesionarios] = useState(""); // eslint-disable-line
  const [concesionario, setConcesionario] = useState(""); // eslint-disable-line
  const [vitrinas, setVitrinas] = useState([]);
  const [vitrina, setVitrina] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [chasis, setChasis] = useState("0");
  const [placa, setPlaca] = useState("0");
  const [modelos, setModelos] = useState([]);
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [fechaVenta, setFechaVenta] = useState("");
  const [kilometraje, setKilometraje] = useState("");
  const [propietario, setPropietario] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [asunto, setAsunto] = useState("");
  const [detalleCaso, setDetalleCaso] = useState("");
  const [anexo, setAnexo] = useState("");
  const [documento, setDocumento] = useState([]);

  /* console.log("tipo_persona: " + tipoPersona);
  console.log("tipoIdentificacion: " + tipoIdentificacion);
  console.log("razon_social: " + razonSocial);
  console.log("identificacion: " + identificacion);
  console.log("nombres: " + nombres);
  console.log("apellidos: " + apellidos);
  console.log("telefono: " + telefono);
  console.log("celular: " + celular);
  console.log("ciudades: " + ciudades);
  console.log("ciudad: " + ciudad);
  console.log("direccion: " + direccion);
  console.log("email: " + email);
  console.log("Empresas: " + empresas);
  console.log("Empresa: " + empresa);
  console.log("concesionarios: " + concesionarios);
  console.log("concesionario: " + concesionario);
  console.log("Vitrinas: " + vitrinas);
  console.log("Vitrina: " + vitrina);
  console.log("vehiculo: " + vehiculo);
  console.log("chasis: " + chasis);
  console.log("placa: " + placa);
  console.log("modelos: " + modelos);
  console.log("modelo: " + modelo);
  console.log("anio: " + anio);
  console.log("fecha de venta: " + fechaVenta);
  console.log("kilometraje: " + kilometraje);
  console.log("propietario: " + propietario);
  console.log("tipos de uso: " + categorias);
  console.log("tipo de uso: " + categoria);
  console.log("asunto: " + asunto);
  console.log("detalle del caso: " + detalleCaso);
  console.log("documento: " + documento);
  console.log("anexo: " + anexo); */

  //Leer tipo identificación
  const leerPersona = (e) => {
    setTipoIdentificacion(e.target.value);
  };

  //Leer Ciudad
  const leerCiudad = async (e) => {
    setCiudad(e.target.value);
    /* const ciudadVal = e.target.value;
    if (ciudadVal === "") {
      setConcesionario([]);
      setConcesionarios([]);
      return;
    } else {
      setConcesionario([]);
      setConcesionarios([]);
    } */
  };

  //Leer Empresa
  const leerEmpresa = async (e) => {
    setEmpresa(e.target.value);
    const empresaVal = e.target.value;
    const url = `https://pqrapidesarrollo.siprok.com.co/api/almacen/get_almacenes/${empresaVal}`;
    const resultado = await axios.get(url);
    setVitrinas(resultado.data);
  };

  //Leer Vitrina
  const leerVitrina = (e) => {
    setVitrina(e.target.value);
  };

  //Leer Vehículo
  const leerVehiculo = async (e) => {
    setVehiculo(e.target.value);
    const url = `https://pqrapidesarrollo.siprok.com.co/api/modelo/get_modelos/311`;
    const resultado = await axios.get(url);
    setModelos(resultado.data);
    const urlCat = `https://pqrapidesarrollo.siprok.com.co/api/categoria_vehiculo/categorias_marca/311`;
    const resultadoCat = await axios.get(urlCat);
    setCategorias(resultadoCat.data);
  };

  //Leer Modelo
  const leerModelo = async (e) => {
    setModelo(e.target.value);
  };

  //Leer Categorías
  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChange = (file) => {
    setDocumento(file[0]);
  };

  useEffect(() => {
    const getAuth = async () => {
      //Get token to API
      const login = await axios.post(
        "https://pqrapidesarrollo.siprok.com.co/api/auth/login",
        {
          username: "erika",
          password: "erika123",
        }
      );

      const auth = login.data;
      if (auth.token.length > 0) {
        //Está autenticado
        const options = {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        };

        const response = await axios.get(
          "https://pqrapidesarrollo.siprok.com.co/api/tipoidentificacion/get_tipos_identificacion/311",
          options
        );
        setTiposIdentificacion(response.data);
        if (tipoPersona === "2") {
          setTipoIdentificacion("2");
        } else {
          setTipoIdentificacion("1");
        }

        const responseCities = await axios.get(
          "https://pqrapidesarrollo.siprok.com.co/api/ciudad/get_ciudad_pqr/1"
        );
        setCiudades(responseCities.data);

        const responseEmpresas = await axios.get(
          "https://pqrapidesarrollo.siprok.com.co/api/empresa/get_empresa_almacen/311"
        );
        setEmpresas(responseEmpresas.data);
      }
    };
    getAuth();
  }, [tipoPersona]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Get token to API
    const login = await axios.post(
      "https://pqrapidesarrollo.siprok.com.co/api/auth/login",
      {
        username: "erika",
        password: "erika123",
      }
    );

    const auth = login.data;
    if (auth.token.length > 0) {
      //Está autenticado
      const options = {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      };

      const respuesta = await axios.post(
        "https://pqrapidesarrollo.siprok.com.co/api/pqr/insert_pqr",
        {
          cliente: {
            cli_tipo_identificacion: parseInt(tipoIdentificacion, 10),
            cli_ruc_cedula: identificacion,
            cli_nombre: nombres,
            cli_apellido: apellidos,
            cli_ciudad: parseInt(ciudad, 10),
            cli_direccion: direccion,
            cli_telefono1: telefono,
            cli_telefono2: celular,
            cli_mail: email,
            cli_tipopersona: parseInt(tipoPersona, 10),
          },
          vehiculo: {
            veh_vin: chasis,
            veh_placa: placa,
            veh_motor: "G4NAKH016024",
            veh_anio: anio,
            veh_kilometraje: parseInt(kilometraje, 10),
            veh_modelo: parseInt(modelo, 10),
            veh_fecha_venta: fechaVenta,
            /* veh_fecha_venta: "2022-06-13T00:00:00", */
            veh_categoria: parseInt(categoria, 10),
            veh_marca: 311,
          },
          pqr_asunto: asunto,
          pqr_detalle_caso: detalleCaso,
          pqr_solucion_esperada: "Solución en la sección 2",
          pqr_almacen: parseInt(vitrina, 10),
          pqr_canal: 1,
          pqr_empresa: parseInt(empresa, 10),
          pqr_prioridad: 2,
          pqr_tipo_caso: 7,
          pqr_marca: 311,
          pqr_contieneVehiculo: parseInt(vehiculo, 10),
          pqr_cli_poseevehiculo: parseInt(propietario, 10),
          pqr_plataforma: 1,
          archivos: documento,
        },
        options
      );

      if (respuesta.status === 200) {
        if (respuesta.statusText === "OK") {
          /* setVersion("0");
          setNombre("");
          setApellido("");
          setCiudad("");
          setCedula("");
          setTelefono("");
          setEmail("");
          setCiudad("");
          e.target.reset(); */

          Swal.fire({
            title: "Gracias por escribirnos",
            text: "Nos comunicaremos con usted lo antes posible",
            timer: 2000,
            showConfirmButton: false,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error al enviar la información",
            text: "Intente en unos minutos...",
            timer: 3000,
            showConfirmButton: false,
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Error al enviar información",
          text: "Intente en unos minutos...",
          timer: 3000,
          showConfirmButton: false,
          icon: "error",
        });
      }
    }
  };

  return (
    <main>
      <Container className="form-content">
        <Row>
          <Col md={12} className="py-5">
            <Form
              onSubmit={handleSubmit}
              id="formCotizador"
              className="pqr-form mx-auto"
            >
              <Row className="bg-title">
                <Col md={12}>
                  <h1 className="form-title">Información del solicitante</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Tipo de persona
                  </Form.Label>
                  <Form.Select
                    required
                    /* onChange={selectTipo} */
                    onChange={(e) => setTipoPersona(e.target.value)}
                  >
                    <option value="1">Natural</option>
                    <option value="2">Jurídica</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Col md={12} className="bg-title mt-4">
                  <h1 className="form-title">Persona natural</h1>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="bg-title mt-4 d-none">
                  <h1 className="form-title">Persona jurídica</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Tipo de Identificación
                  </Form.Label>
                  {tipoPersona === "1" ? (
                    <Form.Select required onChange={leerPersona}>
                      {tiposIdentificacion.map((identificacion) => (
                        <option
                          key={identificacion.ti_codigo}
                          value={identificacion.ti_codigo}
                        >
                          {identificacion.ti_descripcion}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Select>
                      <option value="2">NIT</option>
                    </Form.Select>
                  )}
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Identificación
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => setIdentificacion(e.target.value)}
                  />
                </Form.Group>

                {tipoPersona === "1" ? (
                  <>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Nombres
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setNombres(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Apellidos
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setApellidos(e.target.value)}
                      />
                    </Form.Group>
                  </>
                ) : (
                  <Form.Group className="mb-2" as={Col} md={6}>
                    <Form.Label className="form-label-required">
                      Razón social
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      onChange={(e) => setRazonSocial(e.target.value)}
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Ciudad
                  </Form.Label>
                  <Form.Select required onChange={leerCiudad}>
                    <option value={""} key={0}>
                      - Seleccione -
                    </option>
                    {ciudades.map((ciudad) => (
                      <option key={ciudad.div_codigo} value={ciudad.div_codigo}>
                        {ciudad.div_descripcion}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Correo electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Concesionario
                  </Form.Label>
                  <Form.Select required onChange={leerEmpresa}>
                    <option value={""} key={0}>
                      - Seleccione -
                    </option>
                    {empresas.map((empresa) => (
                      <option
                        key={empresa.emp_codigo}
                        value={empresa.emp_codigo}
                      >
                        {empresa.emp_razon_social}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Punto de venta
                  </Form.Label>
                  <Form.Select required onChange={leerVitrina}>
                    <option value={""} key={0}>
                      - Seleccione -
                    </option>
                    {vitrinas.map((vitrina) => (
                      <option
                        key={vitrina.alm_codigo}
                        value={vitrina.alm_codigo}
                      >
                        {vitrina.alm_nombre}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label>
                    ¿La PQR a registrar está asociada a un vehículo?
                  </Form.Label>
                  <Form.Select required onChange={leerVehiculo}>
                    <option value={""}>Seleccione</option>
                    <option value="1">Si</option>
                    <option value="0">No</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              {vehiculo === "1" && (
                <>
                  <Row className="bg-title mt-4">
                    <Col md={12}>
                      <h1 className="form-title">Información del vehículo</h1>
                    </Col>
                  </Row>
                  <Row className="form-card">
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Chasis
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setChasis(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Placa
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setPlaca(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label>Modelo</Form.Label>
                      <Form.Select required onChange={leerModelo}>
                        <option value={""} key={0}>
                          - Seleccione -
                        </option>
                        {modelos.map((modelo) => (
                          <option
                            key={modelo.mod_codigo}
                            value={modelo.mod_codigo}
                          >
                            {modelo.mod_nombre}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Año
                      </Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setAnio(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label>Fecha de venta</Form.Label>
                      <Form.Control
                        type="date"
                        required
                        onChange={(e) => setFechaVenta(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label>Kilometraje</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        onChange={(e) => setKilometraje(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label>
                        ¿El solicitante es el propietario del vehículo?
                      </Form.Label>
                      <Form.Select
                        required
                        onChange={(e) => setPropietario(e.target.value)}
                      >
                        <option value={""}>Seleccione</option>
                        <option value="1">Si</option>
                        <option value="0">No</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" as={Col} md={6}>
                      <Form.Label className="form-label-required">
                        Tipo de uso
                      </Form.Label>
                      <Form.Select required onChange={leerCategoria}>
                        <option value={""} key={0}>
                          - Seleccione -
                        </option>
                        {categorias.map((categoria) => (
                          <option
                            key={categoria.cat_codigo}
                            value={categoria.cat_codigo}
                          >
                            {categoria.cat_descripcion}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Row>
                </>
              )}

              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Detalle del caso</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Asunto
                  </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setAsunto(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2" as={Col} md={12}>
                  <Form.Label className="form-label-required">
                    Detalle del caso
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    onChange={(e) => setDetalleCaso(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="bg-title mt-4">
                <Col md={12}>
                  <h1 className="form-title">Anexo</h1>
                </Col>
              </Row>
              <Row className="form-card">
                <Form.Group className="mb-2" as={Col} md={6}>
                  <Form.Label className="form-label-required">
                    Desea anexar documento?
                  </Form.Label>
                  <Form.Select
                    required
                    onChange={(e) => setAnexo(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Form.Group>

                {anexo === "1" && (
                  <Form.Group className="mb-2" as={Col} md={12}>
                    <Form.Label>Adjuntar anexo</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      onChange={(e) => handleChange(e.target.files)}
                    />
                  </Form.Group>
                )}
              </Row>

              <Row>
                <Col md={12} className="d-flex justify-content-center mt-3">
                  <div className="text-center">
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="Acepto términos y condiciones y la política de tratamiento de datos."
                        required
                      />
                    </Form.Group>
                    <p>Para más información consulta Términos y condiciones.</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12} className="text-center">
                  <Button
                    variant="dark"
                    type="submit"
                    className="rounded-0"
                    id="btn-enviar"
                  >
                    Radicar PQR
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
