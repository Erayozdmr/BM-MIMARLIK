import React from "react";
import workslist from "../Config/WorkList";

const Works = () => {
  return (
    <section
      id="hizmetlerimiz"
      aria-labelledby="services-title"
      className="py-10"
    >
      {/* 🔹 Başlık Alanı */}
      <header className="flex justify-center mb-10">
        <h2
          id="services-title"
          className="relative text-3xl md:text-5xl text-black font-bold p-2 text-center"
        >
          <span className="absolute bottom-[3px] left-1/2 transform -translate-x-1/2 text-black/20 -z-10">
            HİZMETLERİMİZ
          </span>
          HİZMETLERİMİZ
        </h2>
      </header>

      {/* 🔹 Hizmet Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {workslist.map((item, index) => (
          <article
            key={index}
            className="bg-white shadow-2xl p-6 rounded-3xl hover:bg-gray-600 hover:text-white duration-300 hover:scale-105 flex flex-col items-center text-center"
            aria-labelledby={`service-${index}`}
          >
            <div
              className="text-5xl mb-4 text-gray-800 hover:text-white"
              aria-hidden="true"
            >
              {item.image}
            </div>
            <h3 id={`service-${index}`} className="text-xl font-bold mb-2">
              {item.name}
            </h3>
            <p className="text-lg font-medium mb-2">{item.desch1}</p>
            <p className="text-sm">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;
