import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-4  w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-blue-300 transition duration-300">
          Mr. N. Ganapathiram
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {[
              { path: "/", label: "About" },
              { path: "/education", label: "Education" },
              { path: "/experience", label: "Experience" },
              { path: "/awards", label: "Awards" },
              { path: "/publications", label: "Publications" },
              {
                path: "/conferencePresentations",
                label: "Conference Presentations",
              },
              { path: "/areaOfInterest", label: "Area of Interest" },
              { path: "/personalProfile", label: "Personal Profile" },
              {
                path: "/rolesAndResponsibilities",
                label: "Roles and Responsibilities",
              },
              {
                path: "/corevalues",
                label: "Motta Vision",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-blue-300 transition duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {[
              { path: "/", label: "About" },
              { path: "/education", label: "Education" },
              { path: "/experience", label: "Experience" },
              { path: "/awards", label: "Awards" },
              { path: "/publications", label: "Publications" },
              {
                path: "/conferencePresentations",
                label: "Conference Presentations",
              },
              { path: "/areaOfInterest", label: "Area of Interest" },
              { path: "/personalProfile", label: "Personal Profile" },
              {
                path: "/rolesAndResponsibilities",
                label: "Roles and Responsibilities",
              },
              {
                path: "/corevalues",
                label: "Motta Vision",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block hover:text-blue-300 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
