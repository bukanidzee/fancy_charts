import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export const Navigation = () => {

  return (
    <Navbar variant='dark' bg='dark'>
      <Container fluid>
        <Navbar.Brand href='#'>Natleks Test</Navbar.Brand>
        <Nav>
          <Link to="/" >View Mode</Link>
          <Link to="/settings" >Settings</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
