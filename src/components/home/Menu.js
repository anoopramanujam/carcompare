import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    // <div className="ui secondary menu">
    //   <Link to="/" className="item">
    //     Home
    //   </Link>
    //   <Link to="/works" className="item">
    //     How it works
    //   </Link>
    //   <Link to="/about" className="item">
    //     About
    //   </Link>
    // </div>
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/works">How it works</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
