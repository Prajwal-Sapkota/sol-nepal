"use client";
import { RiImageLine, RiArrowRightSLine , RiCalendarLine, RiUserLine } from 'react-icons/ri';
import Link from 'next/link';

const EventsCard = () => {
  const galleryImages = [
    '/images/gallery11.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1  gap-6">
          
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiCalendarLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Upcoming Events</h3>
              <p className="text-dark">View our calendar of conferences and meetings</p>
            </div>
            <div className="flex items-center text-primary">
              <Link href="/events" className="flex items-center text-lg font-medium hover:text-primary">
                View Events
                <RiArrowRightSLine className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiUserLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Member Directory</h3>
              <p className="text-dark">Connect with fellow medical professionals</p>
            </div>
            <div className="flex items-center text-primary">
              <Link href="/members" className="flex items-center text-lg font-medium hover:text-primary">
                View Directory
                <RiArrowRightSLine className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div className="flex flex-col mb-4">
              <RiImageLine className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-xl font-semibold text-dark">Photo Gallery</h3>
              <p className="text-dark">Browse photos from our events</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>

            <div className="flex items-center text-primary mt-4">
              <Link href="/gallery" className="flex items-center text-lg font-medium hover:text-primary">
                View Gallery
                <RiArrowRightSLine className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsCard;
