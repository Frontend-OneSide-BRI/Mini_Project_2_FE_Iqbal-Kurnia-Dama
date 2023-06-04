import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Gallery from './pages/gallery'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
