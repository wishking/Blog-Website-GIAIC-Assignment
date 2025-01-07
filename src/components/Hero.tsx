import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center px-4 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url('/post-5.webp')`, // Replace with your image URL
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to AI Evolution Blog
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-light mb-8">
          Discover stories, insights, and inspiration from our experts and contributors.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center items-center mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-700 px-6 py-2 text-white rounded-r-md hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium shadow-lg hover:bg-gray-200">
            Explore Blog
          </button>
          <button className="bg-blue-700 px-6 py-3 rounded-md font-medium text-white hover:bg-blue-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
