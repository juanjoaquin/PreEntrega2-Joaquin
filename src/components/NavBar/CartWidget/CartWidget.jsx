import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const CartWidget = () => {
    return(
        <Navbar expand="lg" variant="light" bg="light" >
        <Container>
          <Navbar.Brand>0</Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default CartWidget;