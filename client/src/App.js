import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <span>LOGO GOES HERE</span>
          <Container className="d-flex justify-content-center">
            <Navbar bg="light" expand='lg' className="justify-content-between">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="mr-3">Features</Nav.Link>
                    <Nav.Link href="#pricing" className="mr-3">Pricing</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>

              {/* the following should only be seen when the user is logged in */}
              {/* <Nav>
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
              </Nav> */}
            </Navbar>
          </Container>
        </header>
      </div>
    </>
  );
}

export default App;
