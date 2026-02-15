import React from "react";

const FestivalBanner = () => {
  return (
    <section
      className="w-full h-52 md:h-72 lg:h-80 relative bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('https://placehold.co/1200x320/1E293B/FFFFFF/png?text=Mahashivratri+Offer')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-lg md:text-2xl font-medium">
          This <span className="text-yellow-400 font-semibold">Mahashivratri</span>
        </h2>
        <p className="text-white text-base md:text-lg mt-1">
          let your love grow like Shiv & Parvati
        </p>

        <button className="mt-5 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
          First Chat Free
        </button>
      </div>
    </section>
  );
};

export default FestivalBanner;
