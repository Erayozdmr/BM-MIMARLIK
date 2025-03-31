import React from "react";
import { Helmet } from "react-helmet-async"; // SEO için eklendi
import Banner from "../imagess/Aboutımage.jpg";
import { FaBuilding, FaDraftingCompass, FaRulerCombined } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <meta
          name="description"
          content="BM Mimarlık olarak modern, sürdürülebilir ve özgün tasarımlar sunuyoruz. İnsan odaklı projelerimizle estetik ve fonksiyonelliği bir araya getiriyoruz."
        />
        <meta
          name="keywords"
          content="mimarlık, tasarım, sürdürülebilir mimari, modern yapı, BM Mimarlık"
        />
        <meta name="author" content="BM Mimarlık" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Hakkımızda | BM Mimarlık" />
        <meta
          property="og:description"
          content="BM Mimarlık olarak estetik ve fonksiyonelliği bir araya getiriyoruz. Sürdürülebilir mimari çözümlerimizle fark yaratıyoruz."
        />
        <meta property="og:image" content={Banner} />
        <meta property="og:url" content="https://bmmimarlik.com/hakkimizda" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (X Paylaşımı İçin) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | BM Mimarlık" />
        <meta
          name="twitter:description"
          content="BM Mimarlık olarak modern ve özgün tasarımlar sunuyoruz. Mimari mükemmeliyet ile geleceğin yapıları burada!"
        />
        <meta name="twitter:image" content={Banner} />
      </Helmet>

      {/* Hakkımızda İçeriği */}
      <motion.div
        id="hakkimizda"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center px-6 py-10 bg-[#ffffff]"
      >
        <div className="w-full md:w-1/2 p-4">
          <img
            src={Banner}
            alt="Architect Design"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-6 space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold text-black leading-snug">
            Biz Kimiz?
          </h2>
          <p className="text-black md:text-lg">
            BM Mimarlık olarak, estetik ve fonksiyonelliği bir araya getiren
            yenilikçi tasarımlar üretiyoruz. Modern mimarlık anlayışımızla, her
            projede sürdürülebilir, yaratıcı ve özgün çözümler sunuyoruz.
            <br />
            🔹 Modern ve sürdürülebilir projeler
            <br />
            🔹 Özgün tasarım anlayışı
            <br />
            🔹 İnsan odaklı mimari çözümler
            <br />
            🔹 Kalite ve estetikten ödün vermeyen yaklaşım
            <br />
            Siz de BM Mimarlık ile hayallerinizi gerçeğe dönüştürmek için
            bizimle iletişime geçin!
          </p>

          <div className="flex space-x-6 text-gray-600 text-4xl">
            <FaBuilding className="hover:text-blue-600 transition duration-300" />
            <FaDraftingCompass className="hover:text-green-600 transition duration-300" />
            <FaRulerCombined className="hover:text-orange-600 transition duration-300" />
          </div>

          <Link to="iletişim" smooth={true} duration={800} offset={-50}>
            <button className="mt-6 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer">
              İletişime Geç
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default About;
