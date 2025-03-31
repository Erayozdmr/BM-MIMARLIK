import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../imagess/banerr.jpg";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import ArchitecthDetaing from "./ArchitecthDetaing";
import { motion } from "framer-motion";

const Bannerr = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="anasayfa"
      className="h-screen"
    >
      {/* SEO Etiketleri */}
      <Helmet>
        <title>
          BM Mimarlık Sinop/Gerze | Estetik ve Fonksiyonelliğin Buluştuğu Nokta
        </title>
        <meta
          name="description"
          content="BM Mimarlık olarak, modern ve fonksiyonel mimari projeler üretiyoruz. Estetik ve dayanıklılığı bir araya getiren yenilikçi tasarımlar sunuyoruz."
        />
        <meta
          name="keywords"
          content="mimarlık, BM Mimarlık, modern tasarım, iç mimarlık, yapı tasarımı, estetik mimari"
        />
        <link rel="canonical" href="https://www.bmmimarlik.com/" />
      </Helmet>

      <div className="">
        <img
          src={Banner}
          className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
          alt="BM Mimarlık Banner"
        />
        <ArchitecthDetaing />
        <div className="absolute top-1/3 left-10 md:left-40">
          <h1 className="relative md:text-5xl text-3xl text-white max-w-65 md:max-w-max font-bold p-2">
            <span className="absolute bottom-[3px] left-[14px] text-black/50 -z-10">
              Estetik ve Fonksiyonelliğin Buluştuğu Nokta
            </span>
            Estetik ve Fonksiyonelliğin Buluştuğu Nokta
          </h1>

          <h2 className="relative md:text-5xl text-2xl text-white mt-5 md:max-w-90 max-w-60 font-bold p-2">
            <span className="absolute bottom-[3px] left-[13px] text-black/50 -z-10">
              BM-MİMARLIK
            </span>
            BM-MİMARLIK
          </h2>

          <div className="md:text-5xl text-3xl ml-2 flex space-x-3">
            <a href="https://www.instagram.com/bm_mimarlk/" target="_blank">
              <FaInstagram className="text-white mt-5 transition-transform duration-300 hover:scale-125 hover:rotate-12 bg-black/50 rounded-2xl hover:drop-shadow-lg" />
            </a>
            <a href="#">
              <CiFacebook className="text-white mt-5 transition-transform duration-300 hover:scale-125 hover:rotate-12 bg-black/50 rounded-2xl hover:drop-shadow-lg" />
            </a>
            <a href="#">
              <IoLocationOutline className="text-white mt-5 transition-transform duration-300 hover:scale-125 hover:rotate-12 bg-black/50 rounded-2xl hover:drop-shadow-lg" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bannerr;
