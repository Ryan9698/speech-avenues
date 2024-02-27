import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added state for mobile menu
  const closeTimeoutId = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutId.current) {
      clearTimeout(closeTimeoutId.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutId.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500); // Sets a 500ms delay in closing dropdown menu to enhance user experience.
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutId.current) {
        clearTimeout(closeTimeoutId.current);
      }
    };
  }, []);

  // Mobile Menu Functions

  const toggleMobileMenu = () => {
    // Function to toggle the mobile menu
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown menu once a link is clicked:

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Styling variables to simplify some of the code

  const navBarStyle =
    "bg-gradient-to-r from-black to-gray-800 text-white shadow-md";
  const linkStyle = "font-semibold text-blue-400 px-4 py-3";
  const inactiveStyle =
    "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-3 text-base font-medium transition duration-300";

  // Rendered content

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {/* Icon for mobile menu toggle */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">{/* Mobile menu content */}</div>
      )}

      {/* Desktop Navigation */}
      <div className={`${navBarStyle} fixed w-full z-30 top-0 left-0`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/bannerlogo.png"
                alt="Logo"
                className="h-40 w-40 relative top-6 ml-4 lg:right-40"
              />
            </Link>
          </div>
          <NavLink
            to="/school"
            className={({ isActive }) =>
              `${
                isActive ? linkStyle : inactiveStyle
              } schoolFont text-xl inline-flex items-center`
            }
          >
            School
            <img src="/images/pencil1.png" alt="Logo" className="h-10 w-10" />
          </NavLink>
          {/* Other Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? linkStyle : inactiveStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? linkStyle : inactiveStyle
              }
            >
              About
            </NavLink>
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${inactiveStyle} inline-flex items-center`}
              >
                Services
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Services Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5"
                >
                  <div
                    className="py-1 divide-y divide-gray-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <NavLink
                      to="/therapy/speechtherapy"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white hover:bg-gray-700 ${
                          isActive ? "bg-gray-700" : ""
                        }`
                      }
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      Speech Therapy
                    </NavLink>
                    <NavLink
                      to="/therapy/occupationaltherapy"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white hover:bg-gray-700 ${
                          isActive ? "bg-gray-700" : ""
                        }`
                      }
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      Occupational Therapy
                    </NavLink>
                    <NavLink
                      to="/therapy/physicaltherapy"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white hover:bg-gray-700 ${
                          isActive ? "bg-gray-700" : ""
                        }`
                      }
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      Physical Therapy
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/forms"
              className={({ isActive }) =>
                isActive ? linkStyle : inactiveStyle
              }
            >
              Forms
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? linkStyle : inactiveStyle
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="h-24 md:h-24"></div>
    </nav>
  );
};

export default Navbar;
