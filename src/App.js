import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './pages/MainPage';
import Product from './pages/ProductPage';
import Bookmark from './pages/BookmarkPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initialBookmarkState } from './assets/state';

function App() {
  const [bookmarks] = useState(initialBookmarkState.bookmarks);

  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main bookmarks={bookmarks} />}></Route>
        <Route path="/products/list" element={<Product />}></Route>
        <Route path="/bookmark" element={<Bookmark bookmarks={bookmarks} />}></Route>
      </Routes>
      <footer className="footer">
        <p>개인정보 처리방침 | 이용 약관</p>
        <p>All rights reserved © Codestates</p>
      </footer>
    </Router>
  );
}

export default App;
