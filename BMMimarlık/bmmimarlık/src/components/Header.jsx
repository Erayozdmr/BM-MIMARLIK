import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import menuItems from "../Config/NavItems";
import Logo from "../imagess/BMmimarlıklogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavigation = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);

    if (location.pathname === "/" && element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Küçük bir gecikme ekledik, daha yumuşak çalışır.
    } else {
      navigate(`/?scrollTo=${id}`, { replace: true });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white py-4 px-4 sm:px-8 z-50">
      <nav className="flex justify-between items-center" aria-label="Ana Menü">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" aria-label="BM Mimarlık Ana Sayfa">
            <img src={Logo} className="max-w-12" alt="BM Mimarlık Logo" />
          </a>
          <h1 className="text-xl sm:text-2xl font-bold">BM MİMARLIK</h1>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="lg:hidden text-2xl sm:text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menü */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-black/90 py-4 space-y-4 text-center"
              : "hidden"
          } lg:flex lg:flex-row lg:static lg:bg-transparent lg:space-x-6 lg:text-lg`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.id)}
                className="hover:text-gray-400 cursor-pointer duration-300 transition px-4 py-2 bg-transparent border-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ Schema Markup (Yapısal Veri) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BM Mimarlık",
          url: "https://www.bmmimarlikvemühensilik.com",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.bmmimarlikvemühensilik.com?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </header>
  );
};

export default Header;
