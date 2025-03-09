"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const fetchEvents = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // API returns an array
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json(); 
};

const LatestNews = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["latestNews"],
    queryFn: fetchEvents,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="py-16 bg-light">
      <div className="container px-4 sm:px-6 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-dark text-center sm:text-left">
          Latest News & Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events?.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="/images/placeholder.jpg" 
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {event.title}
                </h3>
                <p className="text-md text-primary mb-3">Event Date</p>
                <p className="text-dark mb-4 line-clamp-3 flex-grow">
                  {event.body}
                </p>
                <Link
                  href="/"
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
  );
};

export default LatestNews;
