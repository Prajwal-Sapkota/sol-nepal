"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const fetchEvents = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
};

const Events = () => {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) return <p className="text-center text-dark">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching events</p>;

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-dark text-center">Latest Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, 9).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Image
                src={``} 
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-dark mb-2">{event.title}</h3>
              <p className="text-dark mb-4 line-clamp-3">{event.body}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
