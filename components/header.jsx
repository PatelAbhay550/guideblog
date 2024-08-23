"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="w-full bg-slate-800 text-white">
      <nav className="flex items-center justify-between px-5 py-4 relative">
        <div className="logo">
          <Link href="/">
            <p className="font-bold text-xl text-green-500">Guideblog 🧑‍💻</p>
          </Link>
        </div>
        <div className="relative">
          <FaBars
            className="text-green-500 block md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={showMenu}
            aria-controls="navbar-menu"
            aria-label="Open menu"
          />
          <div
            id="navbar-menu"
            className={`absolute top-full w-[76vw] right-0 bg-slate-800 md:w-auto md:relative md:flex md:items-center md:space-x-6 transition-transform duration-300 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <button
              className="absolute top-2 right-2 text-green-500 md:hidden text-2xl"
              onClick={toggleMenu}
              aria-label="Close menu"
              style={{ zIndex: 1001 }}
            >
              <FaTimes />
            </button>
            <ul className="flex items-center flex-col md:flex-row md:space-x-6">
              <li className="inline-block mx-2">
                <Link href="/ui-elements">
                  <p className="bg-green-500 text-slate-800 font-bold px-3 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Free UI Elements
                  </p>
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/blog/category/nextjs">
                  <p className="text-green-500 hover:text-green-400">Next.js</p>
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/blog/category/javascript">
                  <p className="text-green-500 hover:text-green-400">
                    JavaScript
                  </p>
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/about">
                  <p className="text-green-500 hover:text-green-400">About</p>
                </Link>
              </li>
              <li className="inline-block mx-2">
                <Link href="/contact">
                  <p className="text-green-500 hover:text-green-400">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
