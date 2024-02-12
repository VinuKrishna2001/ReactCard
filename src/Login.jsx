import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container className=''>
          <Navbar.Brand><Link to='/Reg'>LOGIN</Link></Navbar.Brand>
        </Container>
      </Navbar> 
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to='/Regi1'>REGISTER</Link></Navbar.Brand>
        </Container>
      </Navbar>
      <div >
      <Outlet/>
      </div>
    </div>
  )
}

export default LoginPage