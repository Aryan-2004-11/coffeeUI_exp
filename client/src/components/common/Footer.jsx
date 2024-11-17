import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Import icons from Lucide React

const Footer = () => {
  return (
    <footer className="bg-[#4A2D13] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quality Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quality</h3>
          <p className="text-sm mb-6">
            Discover premium coffee powders crafted for connoisseurs.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
            {/* <Tiktok className="w-6 h-6 hover:text-gray-300 cursor-pointer" /> */}
            <Twitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Taste</h3>
          <p className="text-sm mb-2">+91-98765-43210</p>
          <p className="text-sm">caffenixsupport@example.com</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Brew</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email for updates"
              className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5E34]"
            />
            <button
              type="submit"
              className="bg-[#8B5E34] text-white px-4 py-3 rounded hover:bg-[#6E4825] transition"
            >
              Subscribe for coffee updates
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
