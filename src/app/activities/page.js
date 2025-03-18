"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { RiCalendarLine, RiMapPinLine, RiUserLine, RiArrowRightLine } from "react-icons/ri"
import Link from "next/link"

const fetchActivities = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) throw new Error("Failed to fetch activities")

  const data = await res.json()

  return data.map((item, index) => ({
    ...item,
    date: new Date(Date.now() - index * 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    location: ["Kathmandu", "Pokhara", "Chitwan", "Bhaktapur", "Lalitpur"][index % 5],
    participants: Math.floor(Math.random() * 50) + 10,
    type: ["Workshop", "Outreach", "Training", "Awareness", "Screening"][index % 5],
    image: `/placeholder.svg?height=300&width=500&text=Activity+${index + 1}`,
  }))
}

const Activities = () => {
  const {data: activities, isLoading,error,} = useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
  })

  if (isLoading)
    return (
      <div className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-dark text-center">Our Activities</h2>
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    )

  if (error)
    return (
      <div className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-dark text-center">Our Activities</h2>
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="font-medium">Error loading activities</p>
            <p className="text-sm">{error.message}</p>
          </div>
        </div>
      </div>
    )

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-dark text-center">Our Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.slice(0, 9).map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 m-2 rounded-tl-lg text-sm font-semibold">
                  {activity.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3 line-clamp-2">{activity.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <RiCalendarLine className="mr-2 text-primary" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <RiMapPinLine className="mr-2 text-primary" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <RiUserLine className="mr-2 text-primary" />
                    <span>{activity.participants} participants</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{activity.body}</p>
                <Link
                  href={`/activities/${activity.id}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  View Details <RiArrowRightLine className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
