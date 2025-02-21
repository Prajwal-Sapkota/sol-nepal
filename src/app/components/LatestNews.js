import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const LatestNews = () => {
  const events = [
    {
      title: "9th National Conference",
      date: "December 2, 2024",
      description:"9th National Conference of Society of Otolaryngologists of Nepal 13th -14th Sept 2024, Park Village Resort, Kathmandu",
      image: "/images/9conference.jpg",
      link: "/",
    },
    {
      title: "World Hearing Day 2024",
      date: "March 6, 2024",
      description: "World Hearing Day 3rd March 2024",
      image: "/images/WorldHearing.jpg",
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
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-dark">Latest News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark">{event.title}</h3>
                <p className="text-md text-primary mb-4">{event.date}</p>
                <p className="text-dark mb-4 line-clamp-2">{event.description}</p>
                <Link
                  href={event.link}
                  className="flex items-center text-primary hover:text-primary-dark text-lg font-small"
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
  );
};

export default LatestNews;
