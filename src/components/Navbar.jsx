import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/image/logo.jpg"
import { useNavigate } from "react-router";

const Navbar = ({setShowDonate}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-yellow-500 font-bold" : "text-white"
      }
    >
      {children}
    </NavLink>
  );
  return (
    <div className="flex justify-between  min-h-20 items-center sm:px-4 bg-[#0a0b0e]">
      <div className="logo"><img src={logo} alt="Logo" className="h-12 w-10 object-cover" /></div>
      <div className=" hidden sm:flex gap-4 text-white text-xl">

        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        


      </div>
      <button className=" hidden sm:flex mt-6 px-6 py-3 text-white bg-green-500 rounded-lg text-lg font-medium shadow-md 
                        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 
                        active:scale-95"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDonate(true)}>
        Donate🤍
      </button>
      <button className="sm:hidden text-white" onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>


      {isOpen && (
        <div className="absolute top-20 right-4 bg-gray-900 text-white w-48 rounded-lg shadow-lg p-4 flex flex-col gap-3 md:hidden">
          <NavItem to="/" onClick={() => setIsOpen(false)}>Home</NavItem>
          <NavItem to="/about" onClick={() => setIsOpen(false)}>About</NavItem>
          <NavItem to="/projects" onClick={() => setIsOpen(false)}>Projects</NavItem>
          <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
            onClick={() => {setShowDonate(true);
            setIsOpen(false)}}>
            Donate🤍
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;