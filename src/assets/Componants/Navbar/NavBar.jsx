import React from "react";
import logoImg from "../../../assets/digitools.png";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ selectProduct }) => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="w-full md:w-10/12 mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {selectProduct.length}
                    </span>
                  </div>
                </li>
                <li>
                  <a className="btn btn-ghost">Login</a>
                </li>
                <li>
                  <a className="btn rounded-full bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white font-bold ">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
            <img src={logoImg} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <div className="indicator hidden lg:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">
                {selectProduct.length}
              </span>
            </div>
            <a className="btn btn-ghost hidden lg:flex">Login</a>
            <a className="btn rounded-full bg-[linear-gradient(to_bottom,rgba(79,57,246,1)_0%,rgba(149,20,250,1)_100%)] text-white font-bold hidden lg:flex">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
