import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {useEffect} from 'react'

function Header() {
  const [user, setUser] = useState("")
  useEffect(() => {
    fetch('/users/').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then((key,value) => setUser(key,value))
  },[])
  return (
    <div>
    <Navbar expand="lg" className="fixed-top">
      <div className="container">
        <Navbar.Brand href="#home">
          Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <h2><span className="badge badge-dark">{user.user}</span></h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    <header>
      <div className="container">
        <div className="sub-heading">Welcome!!!</div>
        <div className="heading text-uppercase">It's Nice To Meet You</div>
      </div>
    </header>
    </div>
  )
}
export default Header;
