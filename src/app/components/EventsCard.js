"use client"
import { RiImageLine, RiArrowRightSLine, RiCalendarLine, RiUserLine } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"

const EventsCard = () => {
  const galleryImages = [
    "/images/gallery11.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ]

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
              linkText: "View Gallery",
              images: galleryImages,
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
                    <div key={idx} className="relative group aspect-square">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery Image ${idx + 1}`}
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
    </section>
  )
}

export default EventsCard

