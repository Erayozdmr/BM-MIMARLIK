import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import projectsItems from "../Config/ProjectsItems";
import projects from "../Config/Projects";

const Projects = () => {
  const [hover, setHover] = useState(null);
  const [selectedProject, setSelectedProject] = useState("Tümü");
  const projectSectionRef = useRef(null);
  const location = useLocation();

  // Sayfa Yüklendiğinde Projeler Bölümüne İnme
  useEffect(() => {
    if (location.pathname.includes("/kategori/")) {
      setTimeout(() => {
        if (projectSectionRef.current) {
          projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // Küçük bir gecikme ile yönlendirme sonrası kaydırma
    }
  }, [location]);

  const FilterProject =
    selectedProject === "Tümü"
      ? projects
      : projects.filter((item) => item.name === selectedProject);

  return (
    <motion.section
      id="projelerimiz"
      ref={projectSectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4"
      aria-labelledby="projects-title"
    >
      {/* 🔹 Sayfa Başlığı */}
      <header className="flex justify-center mb-10">
        <h1
          id="projects-title"
          className="relative text-3xl md:text-5xl text-black font-bold p-2 text-center  "
        >
          <span className="absolute bottom-[3px] left-1/2 transform -translate-x-1/2 text-black/20  -z-10">
            PROJELERİMİZ
          </span>
          PROJELERİMİZ
        </h1>
      </header>

      {/* 🔹 Projeler Grid Alanı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4 md:p-6">
        {projectsItems.map((item, index) => (
          <article key={index} className="relative group">
            <div
              className="m-auto cursor-pointer relative"
              onMouseEnter={() =>
                window.innerWidth >= 1024 && setHover(item.id)
              }
              onMouseLeave={() => window.innerWidth >= 1024 && setHover(null)}
            >
              {/* 🔹 Fotoğraf Konteyneri */}
              <div className="relative">
                <img
                  src={item.image}
                  className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-lg shadow-lg object-cover"
                  alt={`${item.name} projesi`}
                />

                {/* 🔹 Küçük Ekranlarda Proje İsmi (Her Zaman Görünsün) */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-1 text-white text-sm md:text-base rounded-md lg:hidden">
                  {item.name}
                </div>

                {/* Hover Efekti (Sadece Büyük Ekranlarda) */}
                {item.id === hover && (
                  <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4 rounded-lg lg:flex hidden"
                  >
                    <h2 className="text-xl md:text-3xl text-white font-bold mb-2">
                      {item.name}
                    </h2>
                    <p className="text-white text-sm md:text-base mb-4">
                      {item.description}
                    </p>
                    <Link
                      to={`/kategori/${item.name
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      aria-label={`${item.name} projesi detayları`}
                    >
                      <button
                        className="px-4 py-2 bg-white text-black md:bg-white/20 border border-white md:text-white font-bold rounded-lg hover:bg-gray-950 cursor-pointer hover:text-[#f0f8ee] transition-all duration-300"
                        onClick={() => setSelectedProject(item.name)}
                      >
                        Detay
                      </button>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Buton - Resmin dışında olacak şekilde */}
              <div className="flex justify-center items-center mt-3 lg:hidden">
                <Link
                  to={`/kategori/${item.name.toLowerCase().replace(/ /g, "-")}`}
                  aria-label={`${item.name} projesi hakkında daha fazla bilgi al`}
                >
                  <button
                    className="px-4 py-2 bg-white text-black border border-black font-bold rounded-lg"
                    onClick={() => setSelectedProject(item.name)}
                  >
                    Detay
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
