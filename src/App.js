import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Works from './components/home/Works';
import About from './components/home/About';
import Menu from './components/home/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Menu />
        <div className="ui segment">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
