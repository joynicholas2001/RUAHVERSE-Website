import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assests/RUAH-VERSE-LOGO_PNG.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "services",
        "technologies",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setIsMenuOpen(false);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
          }
        }, 250);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="relative flex items-center h-16 overflow-x-hidden w-full">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center pl-2 md:pl-4">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="RuahVerse Logo" className="logo" />
            <span className="font-black tracking-tighter text-slate-900 text-xl md:text-2xl">
              Ruah Verse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 flex justify-end items-center pr-4">
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={(e) => {
                if (location.pathname === "/") {
                  scrollToSection(e, "home");
                } else {
                  navigate("/");
                }
              }}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${location.pathname === "/" && activeSection === "home" ? "text-primary-500" : ""}`}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
                window.scrollTo(0, 0);
              }}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${location.pathname === "/about" ? "text-primary-500" : ""}`}
            >
              About
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
                window.scrollTo(0, 0);
              }}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${location.pathname === "/services" ? "text-primary-500" : ""}`}
            >
              Services
            </a>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                navigate("/projects");
                window.scrollTo(0, 0);
              }}
              className={`text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 ${location.pathname === "/projects" ? "text-primary-500" : ""}`}
            >
              Projects
            </a>

            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`btn-primary px-6 py-2 text-sm ${activeSection === "contact" ? "bg-primary-600" : ""}`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes size={20} className="text-gray-700" />
            ) : (
              <FaBars size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu (Overflow FIXED) */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full overflow-x-hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${isMenuOpen
            ? "max-h-[500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
            }`}
        >
          <div className="pb-6 pt-2">
            <nav className="flex flex-col space-y-1">
              <a
                href="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    scrollToSection(e, "home");
                  } else {
                    navigate("/");
                    setIsMenuOpen(false);
                  }
                }}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${location.pathname === "/" && activeSection === "home" ? "text-primary-500" : ""}`}
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${location.pathname === "/about" ? "text-primary-500" : ""}`}
              >
                About
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services");
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${location.pathname === "/services" ? "text-primary-500" : ""}`}
              >
                Services
              </a>
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/projects");
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium ${location.pathname === "/projects" ? "text-primary-500" : ""}`}
              >
                Projects
              </a>

              <div className="px-4 pt-3">
                <a
                  href="/#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className={`block w-full btn-primary text-center py-3 text-sm rounded-lg ${activeSection === "contact" ? "bg-primary-600" : ""}`}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;