"use client";
import { RiImageLine, RiArrowRightSLine, RiCalendarLine, RiUserLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const EventsCard = () => {
  const galleryImages = [
    "/images/gallery11.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container px-6"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiCalendarLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Upcoming Events</h3>
              <p className="text-dark">View our calendar of conferences and meetings</p>
            </div>
            <Link
              href="/events"
              className="flex items-center text-lg font-medium text-primary hover:text-primary-dark transition"
            >
              View Events <RiArrowRightSLine className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiUserLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Member Directory</h3>
              <p className="text-dark">Connect with fellow medical professionals</p>
            </div>
            <Link
              href="/members"
              className="flex items-center text-lg font-medium text-primary hover:text-primary-dark transition"
            >
              View Directory <RiArrowRightSLine className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiImageLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Photo Gallery</h3>
              <p className="text-dark">Browse photos from our events</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <Link
              href="/gallery"
              className="flex items-center text-lg font-medium text-primary hover:text-primary-dark transition mt-4"
            >
              View Gallery <RiArrowRightSLine className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCard;
