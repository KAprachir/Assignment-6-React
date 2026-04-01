import React from "react";
import logoImg from "../../../assets/digitools.png";
import { ShoppingCart, Menu } from "lucide-react";

const Navbar = ({ selectProduct = [] }) => {
  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-11/12 max-w-7xl mx-auto navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
              <Menu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-base-100 rounded-2xl w-64 gap-2"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a className="font-medium">{link.name}</a>
                </li>
              ))}
              <hr className="my-2 opacity-10" />
              <li>
                <button className="btn btn-ghost justify-start">Login</button>
              </li>
              <li>
                <button className="btn btn-primary bg-linear-to-r from-[#4f39f6] to-[#9514fa] border-none text-white">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo" className="h-8 md:h-10 w-auto" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className="hover:text-[#4f39f6] font-medium transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2 md:gap-4">
          <div className="indicator mr-2 cursor-pointer hover:opacity-80 transition-opacity">
            <ShoppingCart size={22} className="text-gray-700" />
            {selectProduct.length > 0 && (
              <span className="badge badge-sm indicator-item bg-fuchsia-600 border-none text-white animate-bounce">
                {selectProduct.length}
              </span>
            )}
          </div>

          <div className="hidden sm:flex gap-3">
            <button className="btn btn-ghost font-semibold hidden lg:inline-flex">
              Login
            </button>
            <button className="btn px-6 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:opacity-90 text-white font-bold border-none transition-all shadow-md hover:shadow-lg active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
