import React from 'react'
import { Nav, Container, Navbar } from "react-bootstrap"
import {BsBook} from "react-icons/bs"
import NavCSS from "../css/Navbar.module.css"

const NavbarPage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
    <Navbar.Brand href="/login">Instabook</Navbar.Brand>
    <BsBook size={"18px"} className={NavCSS.svg} />
    <Nav className="me-auto">
      <Nav.Link href="/login">Home</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default NavbarPage
