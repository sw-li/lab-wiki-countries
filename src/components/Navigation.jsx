import Navbar from 'react-bootstrap/Navbar';

import { Container } from 'react-bootstrap';

function Nav(){
    return(
 
        <Navbar bg="primary" variant="dark">
        <Container>
<Navbar.Brand href="/">LAB - WikiCountries</Navbar.Brand>
</Container>
        </Navbar>  
       
    )
}

export default Nav