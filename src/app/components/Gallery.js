"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"

const Gallery = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleImageClick = (index) => {
    setSelectedIndex(index)
  }

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    )
  }

  const handleClose = () => setSelectedIndex(null)

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") handlePrevImage()
    if (e.key === "ArrowRight") handleNextImage()
    if (e.key === "Escape") handleClose()
  }

  useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleKey)
      return () => document.removeEventListener("keydown", handleKey)
    }
  }, [selectedIndex])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-dark">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:opacity-90 transition-opacity"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
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

          {selectedIndex < images.length - 1 && (
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

          <div
            className="relative w-full max-w-5xl aspect-[4/3] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src || "/placeholder.svg"}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-sm">
              Image {selectedIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
