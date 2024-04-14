import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './pages/About';
import { Header } from './components/Header';
import { Posts } from './pages/Post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/posts/:id' element={<Posts />}/>
      <Route path='/posts' element={<Posts />}/>
    </Routes>
  </BrowserRouter>
);
