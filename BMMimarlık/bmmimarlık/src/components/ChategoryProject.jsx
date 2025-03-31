import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectsItems from "../Config/Projects";
import { motion } from "framer-motion";

const formatSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const ProjectSlider = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
    className="bg-white border border-gray-300 shadow-lg rounded-2xl overflow-hidden transform "
  >
    <Swiper
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-t-2xl"
    >
      {project.images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={project.name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

const ChategoryProject = () => {
  const { category } = useParams();
  const filteredProjects = projectsItems.filter(
    (item) => formatSlug(item.name) === category
  );

  const hotelProjects = projectsItems.filter(
    (item) => item.name === "Otel Projeleri"
  );
  const factoryProjects = projectsItems.filter(
    (item) => item.name === "Fabrika Projeleri"
  );

  const pageTitle = `${category.replace("-", " ")} | BM Mimarlık`;
  const pageDescription = `${category.replace(
    "-",
    " "
  )} kategorisindeki mimari projelerimizi inceleyin. Estetik ve fonksiyonelliğin buluştuğu BM Mimarlık projeleri.`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Mimarlık, Projeler, Villa, Konut, Otel, Fabrika, İç Mimarlık"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://www.bmmimarlik.com/banner.jpg"
        />
        <meta
          property="og:url"
          content={`https://www.bmmimarlik.com/projeler/${category}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://www.bmmimarlik.com/banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1 className="text-5xl font-extrabold text-center text-black mb-10 uppercase">
        {category !== "konut-projeleri" ? category.replace("-", " ") : ""}
      </h1>

      {category === "konut-projeleri" && (
        <>
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Otel ve Fabrika Projeleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {hotelProjects.map((project) => (
              <ProjectSlider key={project.id} project={project} />
            ))}
            {factoryProjects.map((project) => (
              <ProjectSlider key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      {filteredProjects.length > 0 && (
        <>
          {category === "konut-projeleri" && (
            <h2 className="text-4xl font-bold text-center text-black mb-8">
              Konut Projeleri
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <ProjectSlider key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ChategoryProject;
