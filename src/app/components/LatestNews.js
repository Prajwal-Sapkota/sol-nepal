import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const LatestNews = () => {
  const events = [
    {
      title: "9th National Conference",
      date: "December 2, 2024",
      description: "9th National Conference of Society of Otolaryngologists of Nepal 13th -14th Sept 2024, Park Village Resort, Kathmandu",
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
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container px-6"> 
        <h2 className="text-3xl font-bold mb-8 text-dark">Latest News & Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark">{event.title}</h3>
                <p className="text-md text-primary mb-2">{event.date}</p>
                <p className="text-dark mb-4 line-clamp-3">{event.description}</p>
                <Link href={event.link} className="flex items-center text-primary hover:text-primary-dark text-lg">
                  Read More
                  <RiArrowRightLine className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
