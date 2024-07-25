import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from "./components/Appbar";
import Consultation from "./components/consultation";
import Liste from './components/listedispo';
import Login from './components/login';
import Subscribe from './components/subscribe';

function App() {
  return (
    <Router>
      <div className='App'>
        <Appbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/list" element={<Liste />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
