"use client"
import Image from "next/image"
import Link from "next/link"

const albums = [
  {
    id: "9th-national-conference",
    title: "9th National Conference",
    coverImage: "/images/9th-national-conference/cover.jpg",
    imageCount: 14,
  },
  {
    id: "world-hearing-day-2023",
    title: "World Hearing Day 2023",
    coverImage: "/images/world-hearing-day/cover.jpg",
    imageCount: 8,
  },
  {
    id: "12th-saarc-congress",
    title: "12th SAARC ENT Congress",
    coverImage: "/images/12th-SAARC/image1.jpg",
    imageCount: 12,
  },
  {
    id: "world-hearing-day-2022",
    title: "World Hearing Day 2022",
    coverImage: "/images/world-hearing-day-2022/cover.jpg",
    imageCount: 10,
  },
  {
    id: "award-ceremony",
    title: "Award Ceremony 2023",
    coverImage: "/images/award-ceremony/cover.jpg",
    imageCount: 6,
  },
  {
    id: "7th-saarc-congress",
    title: "7th SAARC ENT Congress",
    coverImage: "/images/7th-saarc/cover.jpg",
    imageCount: 15,
  },
]

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light text-dark">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={`/gallery/${album.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-95"
            >
              <Image
                src={album.coverImage || "/placeholder.svg"}
                alt={album.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{album.title}</h3>
                  <p className="text-sm">{album.imageCount} Images</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default GalleryPage
