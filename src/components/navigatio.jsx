import { BrowserRouter, Link, NavLink } from "react-router-dom";
import logo from "../Image/Fatoura-Logo-Dark.png";
import { Button } from "./button";
export default function Navigation() {
  return (
    <div className=" drop-shadow-xl backgr z-10 bg-white  w-[100%] top-0 fixed">
      <nav className="flex justify-around">
        <img src={logo} alt="logo" className="w-18 h-16   " />
        <div className="flex sm:justify-center p-8 space-x-10  font-extrabold">
          {[
            ["Home", "#Home"],
            ["Pricing", "#Pricing"],
            ["Contact-us", "#ContactUs"],
          ].map(([title, url]) => (
            <a href={url} className="font-face-gb" activeClassName="current">
              {title}
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center space-x-4">
          <button className="px-6 py-2 rounded-lg border font-face-gb text-sm me-4">
            SignIn
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#0c4d71] hover:bg-[#0b4463] text-white font-face-gb text-sm">
            SignUp
          </button>
          <div
            _ngcontent-mke-c32=""
            id="menu-button"
            data-bs-toggle="dropdown dropdown-toggle"
            aria-expanded="true"
            aria-haspopup="true"
            class="inline-flex border cursor-pointer items-center justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          >
            <svg
              _ngcontent-mke-c32=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                _ngcontent-mke-c32=""
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
            <span _ngcontent-mke-c32="" class="uppercase ms-1">
              en
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
