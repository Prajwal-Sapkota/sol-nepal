"use client"
import { useMemo, useState, useEffect } from "react"
import {RiImageLine, RiArrowRightSLine, RiCalendarLine, RiUserLine, RiCloseLine, RiArrowLeftLine, RiArrowRightLine} from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"

const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const galleryData = [
  {
    id: "9th-national-conference",
    title: "9th National Conference",
    coverImage: "/images/9thnational-conference/cover.jpg",
    images: [
      { src: "/images/9thnational-conference/image1.jpg", alt: "9thnational1" },
      { src: "/images/9thnational-conference/image2.jpg", alt: "9thnational2" },
      { src: "/images/9thnational-conference/image3.jpg", alt: "9thnational3" },
      { src: "/images/9thnational-conference/image4.jpg", alt: "9thnational4" },
      { src: "/images/9thnational-conference/image5.jpg", alt: "9thnational5" },
    ],
  },
  {
    id: "world-hearing-day-2023",
    title: "World Hearing Day 2023",
    coverImage: "/images/world-hearing-day-2023/cover.jpg",
    images: [
      { src: "/images/world-hearing-day-2023/image1.jpg", alt: "worldhearing1" },
      { src: "/images/world-hearing-day-2023/image2.jpg", alt: "worldhearing2" },
      { src: "/images/world-hearing-day-2023/image3.jpg", alt: "worldhearing3" },
    ],
  },
  {
    id: "cme-programme",
    title: "CME PROGRAMME",
    coverImage: "/images/cme-program/cover.jpg",
    images: [
      { src: "/images/cme-program/image1.jpg", alt: "cme1" },
      { src: "/images/cme-program/image2.jpg", alt: "cme2" },
      { src: "/images/cme-program/image3.jpg", alt: "cme3" },
      { src: "/images/cme-program/image4.jpg", alt: "cme4" },
      { src: "/images/cme-program/image5.jpg", alt: "cme5" },
    ],
  },
]

const EventsCard = () => {
  const randomGalleryImages = useMemo(() => {
    const allImages = galleryData.flatMap((album) => album.images)
    return getRandomItems(allImages, 4)
  }, [])

  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleImageClick = (index) => {
    setSelectedImage(randomGalleryImages[index])
    setSelectedIndex(index)
  }

  const handlePrevImage = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
      setSelectedImage(randomGalleryImages[selectedIndex - 1])
    }
  }

  const handleNextImage = () => {
    if (selectedIndex < randomGalleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1)
      setSelectedImage(randomGalleryImages[selectedIndex + 1])
    }
  }

  const handleClose = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrevImage()
    if (e.key === "ArrowRight") handleNextImage()
    if (e.key === "Escape") handleClose()
  }

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, selectedIndex])

  return (
    <section className="py-12 bg-muted">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: RiCalendarLine,
              title: "Upcoming Events",
              description: "View our calendar of conferences and meetings",
              link: "/events",
              linkText: "View Events",
            },
            {
              icon: RiUserLine,
              title: "Member Directory",
              description: "Connect with fellow medical professionals",
              link: "/members",
              linkText: "View Directory",
            },
            {
              icon: RiImageLine,
              title: "Photo Gallery",
              description: "Browse photos from our events",
              link: "/gallery",
              linkText: "View All Images",
              images: randomGalleryImages,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col mb-4">
                <card.icon className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-semibold text-dark">{card.title}</h3>
                <p className="text-dark mt-2">{card.description}</p>
              </div>

              {card.images && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {card.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative group aspect-square cursor-pointer"
                      onClick={() => handleImageClick(idx)}
                    >
                      <Image
                        src={image.src }
                        alt={image.alt || `Gallery Image ${idx + 1}`}
                        fill
                        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}

              <Link
                href={card.link}
                className="flex items-center text-lg font-medium text-primary hover:text-primary-dark transition mt-auto"
              >
                {card.linkText} <RiArrowRightSLine className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={handleClose}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={handleClose}
            aria-label="Close lightbox"
          >
            <RiCloseLine className="w-8 h-8" />
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-4 text-white hover:text-gray-300 z-50 p-2"
              onClick={(e) => {
                e.stopPropagation()
                handlePrevImage()
              }}
              aria-label="Previous image"
            >
              <RiArrowLeftLine className="w-8 h-8" />
            </button>
          )}

          {selectedIndex < randomGalleryImages.length - 1 && (
            <button
              className="absolute right-4 text-white hover:text-gray-300 z-50 p-2"
              onClick={(e) => {
                e.stopPropagation()
                handleNextImage()
              }}
              aria-label="Next image"
            >
              <RiArrowRightLine className="w-8 h-8" />
            </button>
          )}

          <div className="relative w-full max-w-5xl aspect-[4/3] mx-4">
            <Image
              src={selectedImage.src }
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default EventsCard
