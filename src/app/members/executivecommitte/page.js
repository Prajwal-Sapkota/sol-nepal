"use client";
import Image from "next/image";

const committeeMembers = [
  {
    id: 1,
    name: "Dr. Rabindra B. Pradhananga",
    position: "President",
    image: "/images/committee/president.jpg",
  },
  {
    id: 2,
    name: "Dr. Yogesh Neupane",
    position: "Vice President",
    image: "/images/committee/vice-president.png",
  },
  {
    id: 3,
    name: "Dr. Dipesh Shakya",
    position: "General Secretary",
    image: "/images/committee/general.jpg",
  },
  {
    id: 4,
    name: "Dr. Jeegyasha Thapa",
    position: "Joint Secretary",
    image: "/images/committee/joint-secretary.jpg",
  },
  {
    id: 5,
    name: "Dr. Ravi Bhushan Suwal",
    position: "Treasurer",
    image: "/images/committee/treasurer.jpg",
  },
  {
    id: 6,
    name: "Dr. Arun Adhikari",
    position: "Joint Treasurer",
    image: "/images/committee/joint-treasurer.jpg",
  },
  {
    id: 7,
    name: "Dr. Kripa Dongol",
    position: "Member",
    image: "/images/committee/member1.jpg",
  },
  {
    id: 8,
    name: "Dr. Sanjaya Koirala",
    position: "Member",
    image: "/images/committee/member2.jpg",
  },
  {
    id: 9,
    name: "Dr. Bipin Koirala",
    position: "Member",
    image: "/images/committee/member3.jpg",
  },
  {
    id: 10,
    name: "Dr. Sangya Paudel",
    position: "Member",
    image: "/images/committee/member4.jpg",
  },
  {
    id: 11,
    name: "Dr. Rajeev Kumar Mahaseth",
    position: "Member",
    image: "/images/committee/member5.jpeg",
  },
  {
    id: 12,
    name: "Mr. Prakash Sapkota",
    position: "Office Secretary",
    image: "/images/committee/secretary.jpg",
  },
];

export default function ExecutiveCommittee() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-primary mb-4">
          Executive Committee
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
          Meet our dedicated team of professionals leading the Society of Otolaryngologists of Nepal
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-24 h-30 mx-auto overflow-hidden bg-gray-200 mt-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
