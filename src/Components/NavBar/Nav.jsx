import React from 'react';

const Nav = () => {
    return (
      <div>
        <div className="navbar bg-[#f8f3e8]  ">
          <div className="navbar-start">
            <div className="dropdown text-black">
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>About</a>
                </li>

                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="font-bold  text-black btn-ghost text-xl">Ticket</a>
          </div>
          <div className="navbar-center text-[#484848] hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-purple-600">+ New Ticket</a>
          </div>
        </div>
      </div>
    );
};

export default Nav;