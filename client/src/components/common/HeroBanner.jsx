import React from "react";
import heroSectionVideo from "../../assets/heroSection.mp4"

const HeroBanner = () => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={heroSectionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Premium Coffee Experience
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the finest coffee powders from Caffenix, your go-to premium coffee brand in India.
        </p>
        <button className="bg-[#8B5E34] text-white px-6 py-3 rounded-lg text-lg hover:bg-brown-600 transition">
          Shop
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
