import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine } from "react-icons/ri"

const LatestNews = () => {
  const events = [
    {
      title: "9th National Conference",
      date: "December 2, 2024",
      description:
        "9th National Conference of Society of Otolaryngologists of Nepal 13th -14th Sept 2024, Park Village Resort, Kathmandu",
      image: "/images/9conference.jpg",
      link: "/",
    },
    {
      title: "World Hearing Day 2024",
      date: "March 6, 2024",
      description: "World Hearing Day 3rd March 2024",
      image: "/images/Worldhearing.jpg",
      link: "/",
    },
    {
      title: "Aesthetic Rhinoplasty 2024",
      date: "February 11, 2024",
      description: "Live workshop on Aesthetic Rhinoplasty 2024",
      image: "/images/aesthetic.jpg",
      link: "/",
    },
  ]

  return (
    <section className="py-16 bg-light">
      <div className="container px-4 sm:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-dark text-center sm:text-left">Latest News & Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-dark mb-2">{event.title}</h3>
                <p className="text-md text-primary mb-3">{event.date}</p>
                <p className="text-dark mb-4 line-clamp-3 flex-grow">{event.description}</p>
                <Link
                  href={event.link}
                  className="flex items-center text-primary hover:text-primary-dark text-lg transition-colors duration-300"
                >
                  Read More
                  <RiArrowRightLine className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews

