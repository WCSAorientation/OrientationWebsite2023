import React from 'react';

export function NavBar({ isDark }) {
  return (
    <nav className={` border-gray-200 ${isDark? 'text-white bg-[#182E2E]' : 'text-[#182E2E] bg-white'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
            <img src='./pawprint.svg' className="h-8 mr-3" alt="WW logo" />
            <h1 className="self-center text-2xl font-medium whitespace-nowrap">WOODSWORTH</h1>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  ${isDark? 'focus:ring-[#132525] text-white hover:bg-[#132525]' : 'focus:ring-gray-200 hover:bg-gray-100 text-gray-500'}`} aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto rounded " id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isDark? 'bg-[#152727] md:bg-[#182E2E]' : 'bg-[#e5e7eb] md:bg-[#ffffff]'}`}>
            <li><a href="/" className={`block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0 ${isDark? 'md:hover:text-[#eae0cb]' : 'md:hover:text-[#2e5a5a]'}`} aria-current="page">Home</a></li>
            <li><a href="https://www.woodsworth-orientation.com/event-details/woodsworth-orientation-2023" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">Tickets</a></li>
            <li><a href="/schedule" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">Schedule</a></li>
            <li><a href="/team" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">Team</a></li>
            <li><a href="/sponsors" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">Sponsors</a></li>
            <li><a href="/faq" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">FAQ</a></li>
            <li><a href="/contact" className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
