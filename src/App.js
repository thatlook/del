import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './pages/MainPage';
import ItemList from './pages/ItemListPage';
import Bookmark from './pages/BookmarkPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [items] = useState('');

  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main items={items}/>}></Route>
        <Route path="/products/list" element={<ItemList />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
      </Routes>
      <footer className="footer">
        <p>개인정보 처리방침 | 이용 약관</p>
        <p>All rights reserved © Codestates</p>
      </footer>
    </Router>
  );
}

export default App;
