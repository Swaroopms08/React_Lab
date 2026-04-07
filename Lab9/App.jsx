import React from 'react';
import { Routes, Route, NavLink } from
'react-router-dom' ; import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
function App() {
  const LinkStyle = ({ isActive }) => ({
    margin: '0 10px',
    textDecoration: 'none',
    color: isActive ? 'bold' : 'normal'
  });
  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <NavLink to="/" style={LinkStyle} end >Home</NavLink>
        <NavLink to="/about" style={LinkStyle}>About</NavLink>
        <NavLink to='/contact' style={LinkStyle}>Contact</NavLink>
      </nav>
      <hr /> <Routes><Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}
export default App;
