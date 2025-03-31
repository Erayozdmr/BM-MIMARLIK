import React from "react";
import { CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black p-10 w-full mt-auto">
      <div className="text-white flex flex-wrap items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* 🔹 Marka İsmi */}
        <h1 className="text-4xl font-bold tracking-wide whitespace-nowrap">
          BM MİMARLIK
        </h1>

        <div className="max-w-md text-center md:text-left flex-1">
          <p>
            BM Mimarlık, modern mimari projeler ve iç mekan tasarımları sunan
            yenilikçi bir mimarlık firmasıdır. Estetik ve işlevselliği bir araya
            getiriyoruz.
          </p>
        </div>

        <div className="max-w-md text-center md:text-left flex-1">
          <p>
            📍 Adres: Merkez/Sinop Meydankapı Mah. Levent Aralığı Sok. No:1/1
          </p>
          <p>📧 E-Mail: beytullahal.mim@gmail.com</p>
          <p>📞 Telefon: +90 506 151 11 75</p>
        </div>

        {/* 🔹 Sosyal Medya */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/bm_mimarlk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <CiInstagram className="w-10 h-10 cursor-pointer hover:text-red-400 duration-300" />
          </a>
          <a
            href="https://twitter.com/bm_mimarlk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <CiTwitter className="w-10 h-10 cursor-pointer hover:text-blue-400 duration-300" />
          </a>
          <a
            href="https://facebook.com/bm_mimarlk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <CiFacebook className="w-10 h-10 cursor-pointer hover:text-blue-600 duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
