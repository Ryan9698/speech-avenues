import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, toggleMenu }) {
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => setServicesOpen(!isServicesOpen);

  return (
    <div
      className={`absolute top-0 left-0 w-full z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-5">
        <div className="flex justify-end mb-5">
          <button
            id="mobileMenuButton"
            className="block hamburger md:hidden focus:outline-none"
            type="button"
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <NavLink to="/" className="block py-2" onClick={toggleMenu}>
          Home
        </NavLink>
        <div className="py-2">
          <button
            onClick={toggleServices}
            className="flex items-center justify-between w-full"
          >
            Services
            <svg
              className={`fill-current ml-2 w-4 h-4 transition-transform ${
                isServicesOpen ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isServicesOpen && (
            <div className="mt-2">
              <NavLink
                to="/therapy/speechtherapy"
                className="block py-2"
                onClick={toggleMenu}
              >
                Speech Therapy
              </NavLink>
              <NavLink
                to="/therapy/occupationaltherapy"
                className="block py-2"
                onClick={toggleMenu}
              >
                Occupational Therapy
              </NavLink>
              <NavLink
                to="/therapy/physicaltherapy"
                className="block py-2"
                onClick={toggleMenu}
              >
                Physical Therapy
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/about" className="block py-2" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/contact" className="block py-2" onClick={toggleMenu}>
          Contact
        </NavLink>
        <NavLink to="/gallery" className="block py-2" onClick={toggleMenu}>
          Gallery
        </NavLink>
        <NavLink to="/school" className="block py-2" onClick={toggleMenu}>
          School
        </NavLink>
      </div>
    </div>
  );
}
