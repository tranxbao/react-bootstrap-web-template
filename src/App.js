import './App.css';
import {Navbar, Nav, NavDropdown, Container, Row, Col, Image,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image 
          src='https://picsum.photos/900/400' 
          fluid 
          rounded
          />
          
        </Col>
        <Col 
        sm={5}>
          <h1 class='font-weigh-light'>Tagline</h1>
          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Button variant='outline-primary'>Call to Action</Button>
        </Col>
      </Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
        <Card.Body>This is some text within a card body.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias 
          est harum ea consequuntur qui? Quisquam, voluptatum modi? Rerum, 
          voluptates iure accusamus sint quam numquam, inventore eos asperiores
           commodi possimus id!
        </Card.Body>
      </Card>
      <Row>
      <Col >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>      
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    

      </Row>
    </Container>
      </main>
      <footer class="py-3 my-5 bg-dark">
      <Container>
        <p class="text-center text-white">Copyright &copy; Your Website 2022</p>
      </Container>
      </footer>
    </div>
  );
}

export default App;
