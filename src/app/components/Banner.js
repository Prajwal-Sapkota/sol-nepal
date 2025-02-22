"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={images[currentImageIndex]}
          alt="Banner"
          fill
          className="object-cover brightness-50 transition-opacity duration-1000 ease-in-out"
          priority
        />
      </div>

      <div className="container relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          WELCOME <br /> to Society of Otolaryngologists of Nepal
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/join">
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
    </section>
  );
};

export default Banner;
