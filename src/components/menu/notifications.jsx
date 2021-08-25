import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const notifications = [
  {
    icon: '📣',
    title: 'Connector has been created !',
    text: 'The connector you ordered has been successfuly created !  You can go in the connectors page to check it',
    date: '22/08/1991'
  },
  {
    icon: '🚀',
    title: 'Welcome !',
    text: 'We are very happy to let you discover our new interface !',
    date: '21/08/1991'
  }
]

function Notifications() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-gray-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
          <path className="fill-current text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg>
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
      </button>
      <div
        className={`origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1  ${!dropdownOpen && 'hidden' }`}
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
      >
        <div className="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">Notifications</div>
        <ul>
          {
            notifications.map(({ icon, title, text, date }) => <li className="border-b border-gray-200 last:border-0">
                <Link
                  className="block py-2 px-4 hover:bg-gray-50"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="block text-sm mb-2">{icon} <span className="font-medium text-gray-800">{title}</span>{text}</span>
                  <span className="block text-xs font-medium text-gray-400">{date}</span>
                </Link>
              </li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default Notifications