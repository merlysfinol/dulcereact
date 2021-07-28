import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../fontawesome';
import logo from '../../img/logo.png';
import CartWidget from './CartWidget';
import Categorias from '../../utils/funciones/Categorias'
import { Link } from 'react-router-dom'

function NavBar() {    
    return(    
    <Navbar bg="light" expand="lg">
        <Link to={"/"} className="navbar-brand"><img src={logo} className="App-logo" alt=""/></Link>
        <Navbar.Brand href="https://www.instagram.com/dulcefusion.chile/?hl=es-la" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']}  size="lg"/></Navbar.Brand>
        <Navbar.Brand href="https://www.facebook.com/profile.php?id=100063530833892" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']}  size="lg"/></Navbar.Brand>
        <Navbar.Brand href="https://github.com/merlysfinol" target="_blank"><FontAwesomeIcon icon={['fab', 'github-alt']}  size="lg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto texto">
            <Nav.Link  href="/">Inicio</Nav.Link>     
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                <NavDropdown.Item href="/somos">Sobre Nosotros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/envios">Repartos y Envíos</NavDropdown.Item>
            </NavDropdown>       
           
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {Categorias().map(cat =>{
                    return(
                    <NavDropdown.Item key={cat.id} href={cat.url}>{cat.name}</NavDropdown.Item>
                    )})
                }
            </NavDropdown>     
            <Nav.Link href="/contacto">Contactos</Nav.Link>
            </Nav> 

            < CartWidget/>
            
        </Navbar.Collapse>
    </Navbar>   
    )
}

export default NavBar