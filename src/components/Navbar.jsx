import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Frontend_Assets/stoore-logo2.svg';
import cart_icon from '../assets/Frontend_Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex flex-row w-full h-auto py-4 bg-slate-50 border-b shadow-sm justify-around items-center relative">
      {/* Logo - Oculta em telas pequenas */}
      <div className="hidden lg:block">
        <Link to="/">
          <img src={logo} className="w-32" alt="Stoore Logo" />
        </Link>
      </div>
      
      {/* Navigation Menu */}
      <ul className="flex flex-row gap-4">
        {[
          { name: "shop", path: "/" },
          { name: "gamer", path: "/gamer" },
          { name: "work", path: "/work" },
        ].map(({ name, path }) => (
          <li
            key={name}
            onClick={() => setMenu(name)}
            className={`cursor-pointer ${
              menu === name
                ? "font-bold text-blue-500 underline"
                : "text-gray-700 hover:text-blue-400"
            }`}
          >
            <Link to={path}>{name.charAt(0).toUpperCase() + name.slice(1)}</Link>
          </li>
        ))}
      </ul>
      
      {/* Login and Cart */}
      <div className="flex flex-row gap-4 items-center">
        <Link to="/login">
          <button className="py-2 px-8 bg-blue-300 rounded-full hover:bg-blue-400 transition">
            Login
          </button>
        </Link>
        <div className="flex relative">
          <Link to="/cart">
            <img src={cart_icon} className="w-8 h-8" alt="Shopping Cart" />
          </Link>
          <div className="bg-red-500 rounded-full min-w-4 h-4 p-1 flex items-center justify-center text-sm text-white absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
