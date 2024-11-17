import React from "react";
import { ShoppingCart } from "lucide-react"; 
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-10 py-6 flex justify-between items-center">
        <div className="text-lg font-bold text-black">
          <Link to="/">caffenix</Link> 
        </div>
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-black font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-black font-medium hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-black font-medium hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black font-medium hover:underline"
          >
            Contact
          </Link>
        </nav>

        {/* Cart Section */}
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6 text-black" /> 
          <span className="text-black font-medium">(0)</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
