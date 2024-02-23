import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const address = "107 Longwood Ave, Rockledge, FL 32955";
  const encodedAddress = encodeURIComponent(address);

  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <Link
              to="/"
              className="flex items-center justify-center md:justify-start"
            >
              <span className="text-lg font-semibold text-gray-700 hover:text-green-500">
                Speech Avenues Therapy
              </span>
            </Link>
          </div>
          <div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {address}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 md:mt-10">
          &copy; {new Date().getFullYear()} Speech Avenues Therapy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
