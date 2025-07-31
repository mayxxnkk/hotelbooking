import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AllRooms from './pages/AllRooms';
import Footer from './components/Footer';
import RoomDetials from './pages/RoomDetials';
import About from './pages/About';
import Signup from './pages/Signup';
import Experience from './pages/Experience';
import MyBooking from './pages/MyBooking';

function App() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div>
      {!isOwnerPath && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetials />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/my-bookings" element={<MyBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
