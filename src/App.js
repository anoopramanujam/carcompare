import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/home/Main';

function App() {
  return (
  // <BrowserRouter>
  //   <div className="ui container">
    <Main />
  //     <div className="ui basic segment">
  //       <Routes>
  //         <Route path="/" exact element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/works" element={<Works />} />
  //       </Routes>
  //     </div>
  //   </div>
  // </BrowserRouter>
  );
}

export default App;
