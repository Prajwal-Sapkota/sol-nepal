"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Banner = () => {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            className={`object-cover brightness-50 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <RiArrowLeftLine className="w-6 h-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-200"
        aria-label="Next slide"
      >
        <RiArrowRightLine className="w-6 h-6" />
      </button>

      <div className="container relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          WELCOME <br /> to Society of Otolaryngologists of Nepal
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/members/membershipform">
            <button className="px-6 py-3 text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition">
              Become a Member
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 text-lg sm:text-xl border-2 border-white text-white rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
