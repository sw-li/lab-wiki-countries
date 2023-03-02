import Navbar from 'react-bootstrap/Navbar';

import { Container } from 'react-bootstrap';

function Navigation(){
    return(
 
        <Navbar bg="primary" variant="dark">
        <Container>
<Navbar.Brand href="/">LAB - WikiCountries</Navbar.Brand>
</Container>
        </Navbar>  
       
    )
}

export default Navigation