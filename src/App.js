import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/MainPage';
import Product from './pages/ProductPage';
import Bookmark from './pages/BookmarkPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initialBookmarkState } from './assets/state';
import useFetch from './hooks/useFetch';

function App() {
  const [items] = useFetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
  const [bookmarks] = useState(initialBookmarkState.bookmarks);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main items={items} bookmarks={bookmarks} />}></Route>
        <Route path="/products/list" element={<Product />}></Route>
        <Route path="/bookmark" element={<Bookmark bookmarks={bookmarks} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
