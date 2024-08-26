import React from 'react'
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Messages from './pages/messages/Messages';
import Create from "./pages/create/Create";
import Profile from './pages/profile/Profile';
import ScrollToTop from './components/ScrollT0Top';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;