import { Link } from "react-router-dom";
import logo from '../logo.svg';

const items = [
  { name: 'Groups', url: 'groups'},
  { name: 'Connectors', url: 'connectors'},
  { name: 'Inter-Region GW', url: 'irgw'},
  { name: 'Regional Capacities', url: 'regional-capacities'},
  { name: 'Network Devices', url: 'network-devices'},
  { name: 'Network Diagram', url: 'loooool'},
  { name: 'Users', url: 'users'},
  { name: 'Logs', url: 'logs'},
  { name: 'Sub-organizations', url: 'logs'},
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  return <div className="lg:w-64">
  <div
    id="sidebar"
    className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
  >

    {/* Sidebar backdrop (mobile only) */}
    <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

    {/* Sidebar header */}
    <div className="flex justify-between mb-10 pr-3 sm:px-2">
      {/* Close button */}
      <button
        className="lg:hidden text-gray-500 hover:text-gray-400"
        aria-controls="sidebar"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-expanded={sidebarOpen}
      >
        <span className="sr-only">Close sidebar</span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>
      {/* Logo */}
      <Link exact to="/" className="block">
        <img src={logo} alt="logo" className="w-full" />
      </Link>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">Menu</h3>
      <ul className="mt-3">
        {/* Groups */}
        {
          items.map(({ name, url }) => <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0`}>
            <Link exact to={url} className={`block text-gray-200 hover:text-white transition duration-150`}>
              <div className="flex flex-grow">
                <span className="text-sm font-medium">{ name }</span>
              </div>
            </Link>
          </li>)
        }
      </ul>
    </div>

  </div>
  </div>
}

export default Sidebar
