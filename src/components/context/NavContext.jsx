import React, { createContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import DesignNavbar from "../navigation/DesignNavbar";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();
export const NavbarTypeContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);
  const [isDefaultNavbar, setIsDefaultNavbar] = useState(false);

  const navGreenRef = useRef(null);
  const location = useLocation().pathname;

 
  useEffect(() => {
    if (location === "/project" || location === "/agence" || location === "/blogs") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [location]);

  // handle which navbar type
  useEffect(() => {
    if (location === "/" || location === "/project" || location === "/contact"|| location === "/bloga" ) {
      // homepage + project => Navbar
      setIsDefaultNavbar(true);
    } else {
      // agence + all other routes => DesignNavbar
      setIsDefaultNavbar(false);
    }
  }, [location]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        <NavbarTypeContext.Provider value={isDefaultNavbar}>
          {isDefaultNavbar ? <Navbar /> : <DesignNavbar />}
          {children}
        </NavbarTypeContext.Provider>
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
