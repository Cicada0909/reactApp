import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router";
import Navbar from 'react-bootstrap/Navbar';

const MainNavbar = () => {
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Тестовый сайт</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Главная</Nav.Link>
            <Nav.Link as={Link} to='/products'>Продукты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MainNavbar