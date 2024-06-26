import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [holidaysOpen, setHolidaysOpen] = useState(false);

  const linkClass = "text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="border-b border-indigo-500 bg-[#1c2331]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">Airshine Tours and Travels</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                
                <div className="relative">
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className={`${linkClass} focus:outline-none`}
                  >
                    Company
                  </button>
                  {companyOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <NavLink to="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">About Us</NavLink>
                        <NavLink to="/contactus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Contact Us</NavLink>
                        <NavLink to="/ourservices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Our Services</NavLink>
                        <NavLink to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Testimonials</NavLink>
                        <NavLink to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">FAQ</NavLink>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`${linkClass} focus:outline-none`}
                  >
                    Services
                  </button>
                  {servicesOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <NavLink to="/flights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Flights</NavLink>
                        <NavLink to="/hotels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Hotels</NavLink>
                        <NavLink to="/visa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Visa</NavLink>
                        <NavLink to="/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Insurance</NavLink>

                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setHolidaysOpen(!holidaysOpen)}
                    className={`${linkClass} focus:outline-none`}
                  >
                    Holiday
                  </button>
                  {holidaysOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <NavLink to="/international" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">International</NavLink>
                        <NavLink to="/domestic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">Domestic</NavLink>
                      </div>
                    </div>
                  )}
                </div>

                <NavLink to="/contactus" className={linkClass}>Contact</NavLink>
                <NavLink to="/phonecall" className={linkClass}>Phone Call</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;