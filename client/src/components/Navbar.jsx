import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
      isScrolled || !isHomePage ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"
    }`}>
      <Link to={'/'}>
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
      </Link>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled || !isHomePage ? "text-gray-700" : "text-white"}`}>
            {link.name}
            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
          </Link>
        ))}

        {/* <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled || !isHomePage ? 'text-black' : 'text-white'} transition-all`}>
          Dashboard
        </button> */}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <img src={assets.searchIcon} alt="" className={`${isScrolled || !isHomePage ? 'invert' : ''} h-7`} />
        {!isLoggedIn ? (
          <button onClick={() => navigate('/login')} className="px-8 py-2.5 rounded-full ml-4 bg-black text-white transition-all">
            Login
          </button>
        ) : (
          <button onClick={handleLogout} className="px-8 py-2.5 rounded-full cursor-pointer ml-4 bg-red-500 text-white transition-all">
            Logout
          </button>
        )}
      </div>

      <div className="flex md:hidden items-center gap-3">
        <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isScrolled || !isHomePage ? 'invert' : ''} h-4`} />
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <img src={assets.closeIcon} alt="" className='h-6.5' />
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {/* <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          Dashboard
        </button> */}

        {!isLoggedIn ? (
          <button onClick={() => { navigate('/login'); setIsMenuOpen(false); }} className="bg-black text-white px-8 py-2.5 rounded-full">
            Login
          </button>
        ) : (
          <button onClick={() =>  { handleLogout();  setIsMenuOpen(false); }} className="bg-red-500 cursor-pointer text-white px-8 py-2.5 rounded-full">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
