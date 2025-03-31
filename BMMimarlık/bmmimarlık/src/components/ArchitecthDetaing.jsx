import React from "react";

const ArchitecthDetaing = () => {
  return (
    <div>
      {/* Üst Sol Çerçeve */}
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 border-t-4 border-l-4 border-white opacity-70 rotate-6"></div>

      {/* Üst Sağ Çerçeve */}
      <div className="absolute top-14 sm:top-20 left-[50%] w-24 sm:w-36 h-24 sm:h-36 border-b-4 border-r-4 border-white opacity-70 rotate-12"></div>

      {/* Alt Sol Çerçeve */}
      <div className="absolute bottom-14 sm:bottom-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-l-2 border-white opacity-70 rotate-[-12deg]"></div>

      {/* Alt Sağ Çerçeve */}
      <div className="absolute bottom-28 sm:bottom-40 right-20 sm:right-40 w-16 sm:w-28 h-16 sm:h-28 border-b-2 border-r-2 border-white opacity-70 rotate-[15deg]"></div>

      {/* Noktalar ve Çizgiler */}
      <div className="absolute top-24 sm:top-32 left-1/3 w-12 sm:w-16 h-12 sm:h-16 border-dashed border-2 border-white opacity-40"></div>
      <div className="absolute bottom-8 sm:bottom-10 right-1/4 w-14 sm:w-20 h-14 sm:h-20 border-dashed border-2 border-white opacity-30"></div>
    </div>
  );
};

export default ArchitecthDetaing;
