"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { RiHome2Line, RiArrowLeftLine } from "react-icons/ri"
import Gallery from "../components/Gallery"

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

const GalleryPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-dark">Photo Gallery</h1>

        {selectedAlbum ? (
          <>
            <button
              onClick={() => setSelectedAlbum(null)}
              className="mb-4 text-dark hover:underline flex items-center"
            >
              <RiArrowLeftLine className="mr-1" />
              Back to Albums
            </button>
            <Gallery
              images={galleryData.find((album) => album.id === selectedAlbum)?.images || []}
              title={galleryData.find((album) => album.id === selectedAlbum)?.title || ""}
            />
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.map((album) => (
              <div
                key={album.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => setSelectedAlbum(album.id)}
              >
                <div className="relative h-48">
                  <Image src={album.coverImage || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-dark">{album.title}</h2>
                  <p className="text-dark mt-2">{album.images.length} photos</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default GalleryPage
