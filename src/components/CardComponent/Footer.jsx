import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";  

function Footer() {
    return (
        <div>
            <div style={{ bottom: "0", width: "100%" }}>
        <Box>     
            <Container>
              <Row>
                <Column>  
                </Column>
                <Column>
                  <Heading>Nosotros</Heading>
                  <FooterLink href="/somos">Sobre Nosotros</FooterLink>
                  <FooterLink href="/envios">Repartos y Envíos</FooterLink>       
                </Column>
                <Column>
                  <Heading>Servicios</Heading>
                  <FooterLink href="#">Arreglos</FooterLink>
                  <FooterLink href="#">Chocoramos</FooterLink>
                  <FooterLink href="#">Desayunos</FooterLink>
                  <FooterLink href="#">Cajas Sorpresas</FooterLink>        
                </Column>         
                <Column>
                  <Heading>Redes Sociales</Heading>
                  <FooterLink href="https://www.facebook.com/profile.php?id=100063530833892" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'facebook']}  size="lg"/>
                      <span style={{ marginLeft: "10px" }}>
                        Facebook
                      </span>             
                  </FooterLink>
                  <FooterLink href="https://www.instagram.com/dulcefusion.chile/?hl=es-la" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'instagram']}  size="lg"/>
                      <span style={{ marginLeft: "10px" }}>
                        Instagram
                      </span>             
                  </FooterLink>
                  <FooterLink href="https://github.com/merlysfinol" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github-alt']}  size="lg"/>
                      <span style={{ marginLeft: "10px" }}>
                        GitHub
                      </span>             
                  </FooterLink>             
                </Column>
                <Column>
                  <Heading>Contáctanos</Heading>
                  <FooterLink href="https://api.whatsapp.com/send/?phone=56987734280&text&app_absent=0" target="_blank">Tlf.: +56 9 8773 4280</FooterLink>
                  <FooterLink href="mailto:dulcefusion.chile@gmail.com" target="_blank">dulcefusion.chile@gmail.com</FooterLink>      
                </Column>
              </Row>
            </Container>
        </Box>
            </div>
        </div>
    )
}

export default Footer
