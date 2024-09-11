import React from 'react';
import './Header.css';  // ملف CSS اختياري لتنسيق المكون
import logo from './Logo-og.png';  // استخدام import لجلب الصورة

function Header() {
  return (
    <header className="Header">
      <div className="Header-content">
        <p className="Header-text"> Hello, This is my first project .</p> {/* النص المخصص */}
        <img src={logo} alt="Logo" className="Header-image" /> {/* الصورة */}
      </div>
    </header>
  );
}

export default Header;
