import React from 'react';
import Nav from './components/Nav'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <body></body>
      <Routes>
        <Route></Route>
      </Routes>
      <footer>
        개인정보 처리방침 | 이용 약관 <br></br> All rights reserved © Codestates
      </footer>
    </Router>
  );
}

export default App;
