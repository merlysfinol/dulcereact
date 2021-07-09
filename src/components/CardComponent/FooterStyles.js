import styled from 'styled-components';

export const Box = styled.div`
padding: 0px;
background: #f8eef1;
position: absolute;
bottom: 0;
width: 100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
    padding: 15px 0px 0px 0px;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	margin: 0 auto;
	background: #f69cd3; 
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 5px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18px;
color: #000;
margin-bottom: 15px;
font-weight: bold;
`;
