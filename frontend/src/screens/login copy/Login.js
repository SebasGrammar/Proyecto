
import './login.css';
import deadpool from '../../img/deadpool-icon.png';
import { Container, Form, FormGroup, Button, FloatingLabel, Row, Col } from 'react-bootstrap';

export default function Login() {
    return (
        <Container>
            <img className="l-img" src={deadpool} alt="Deadpool Team Icon" />
            <h1>Iniciar sesión</h1>
            <p>Ingresa a tu cuenta de X - Force Team</p>
            <Form>
                <Row className="m-2">
                    <Col sm>
                        <FloatingLabel controlId="floatingInput" label="Usuario">
                            <Form.Control size="sm" placeholder="Usuario" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col md>
                    <Form.Control size="sm" type="password" placeholder="Password" />
                    </Col>
                </Row>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <Button size="sm" variant="primary" type="submit"> Iniciar sesión </Button>
                </FormGroup>
                <p>¿Olvidaste tu contraseña?</p>
                <FormGroup id="resgistrarse">
                    <p className="paragraph-p">¿No tienes una cuenta? </p>
                    <Button className="botonSecundario" type="button">Regístrate </Button>
                </FormGroup>
            </Form>
        </Container>
    )
}

