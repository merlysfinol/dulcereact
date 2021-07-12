import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../fontawesome';
import Button from 'react-bootstrap/Button';
import logo from '../../img/logo.png';
import CartWidget from './CartWidget';
import Categorias from '../../utils/funciones/Categorias'

function NavBar() {    
    return(
     <>    
    <Navbar bg="light" expand="lg">
        <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt=""/></a> 
        <Navbar.Brand href="https://www.instagram.com/dulcefusion.chile/?hl=es-la" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']}  size="lg"/></Navbar.Brand>
        <Navbar.Brand href="https://www.facebook.com/profile.php?id=100063530833892" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']}  size="lg"/></Navbar.Brand>
        <Navbar.Brand href="https://github.com/merlysfinol" target="_blank"><FontAwesomeIcon icon={['fab', 'github-alt']}  size="lg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto texto">
            <Nav.Link href="/">Inicio</Nav.Link>     
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

            <Nav className="justify-content-end"> 
           
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <Button variant="outline-success">Buscar</Button>
            </Form>
          
            
             </Nav>
        </Navbar.Collapse>
    </Navbar>
     </>      
    )
}

export default NavBar