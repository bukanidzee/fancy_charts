import {Nav, Navbar, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
  let activeStyle = {
     textDecoration: "underline",
   };
  return (
    <Navbar variant='dark' bg='dark'>
      <Container fluid>
        <Navbar.Brand>Natleks Test</Navbar.Brand>
        <Nav>
          <NavLink to="/view"
                   style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
            View Mode
          </NavLink>
          <NavLink to="/settings" 
                   style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
            Settings
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
