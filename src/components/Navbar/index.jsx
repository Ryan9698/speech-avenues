import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //useRef ensures timeout ID persists across renders without triggering addition renders itself
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

  // Styles
  // Ensuring consistent layout with padding, and focusing on color and text weight for active styling
  const navBarStyle =
    "relative bg-gradient-to-r from-black to-gray-800 text-white shadow-md";
  const activeStyle = "font-semibold text-blue-400 px-4 py-3"; // Active style emphasizes color change
  const inactiveStyle =
    "text-gray-300 hover:bg-gray-700 hover:text-white rounded px-4 py-3 text-base font-medium transition duration-300"; // Inactive style maintains layout consistency
  const dropdownStyle =
    "absolute w-48 bg-gradient-to-r from-black to-gray-800 rounded divide-y divide-gray-500 shadow-lg py-1 z-50";

  const dropdownItemStyle =
    "px-4 py-3 text-base font-medium block w-full text-left";

  const activeDropdownItemStyle = `${dropdownItemStyle} text-blue-400 font-semibold`;
  const inactiveDropdownItemStyle = `${dropdownItemStyle} text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300`;

  return (
    <nav className={navBarStyle}>
      {/* Sets a 500ms delay in closing dropdown menu to enhance user experience. Function declared above */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo and Home Link */}
            <div className="menuLogo">
              <Link
                to="/"
                className="absolute top-10 left-16 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <img
                  src="/images/logo.jpg"
                  alt="Logo"
                  className="h-20 w-20 rounded-full border-4 border-black-500"
                />
              </Link>
            </div>
            <div className="flex-grow">
              <div className="flex justify-center space-x-8">
                {/* Navigation Links */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                >
                  About
                </NavLink>
                {/* Dropdown Trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
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
                  {/* Dropdown Menu */}
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isDropdownOpen && (
                      <div
                        className={dropdownStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <NavLink
                          to="/therapy/speechtherapy"
                          className={({ isActive }) =>
                            isActive
                              ? activeDropdownItemStyle
                              : inactiveDropdownItemStyle
                          }
                        >
                          Speech Therapy
                        </NavLink>
                        <NavLink
                          to="/therapy/occupationaltherapy"
                          className={({ isActive }) =>
                            isActive
                              ? activeDropdownItemStyle
                              : inactiveDropdownItemStyle
                          }
                        >
                          Occupational Therapy
                        </NavLink>
                        <NavLink
                          to="/therapy/physicaltherapy"
                          className={({ isActive }) =>
                            isActive
                              ? activeDropdownItemStyle
                              : inactiveDropdownItemStyle
                          }
                        >
                          Physical Therapy
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
