import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.PureComponent {
  render() {
    return (
      <div className="ui secondary menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/works" className="item">
          How it works
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
      </div>
    );
  }
}

export default Menu;
