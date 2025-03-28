"use client"
import Image from "next/image"
import { RiMailLine, RiPhoneLine } from "react-icons/ri"

const membersData = [
  {
    id: 1,
    name: "Dr. Rabindra B. Pradhananga",
    title: "President",
    specialty: "Head & Neck Surgery",
    hospital: "Kathmandu Medical College",
    email: "rabindra@example.com",
    phone: "+977-9841234567",
    image: "/images/committee/president.jpg",
    memberType: "Life Member",
    region: "Kathmandu",
  },
  {
    id: 2,
    name: "Dr. Yogesh Neupane",
    title: "Vice President",
    specialty: "Otology",
    hospital: "Nepal Medical College",
    email: "yogesh@example.com",
    phone: "+977-9841234568",
    image: "/images/committee/vice-president.png",
    memberType: "Life Member",
    region: "Kathmandu",
  },
  {
    id: 3,
    name: "Dr. Dipesh Shakya",
    title: "General Secretary",
    specialty: "Rhinology",
    hospital: "Tribhuvan University Teaching Hospital",
    email: "dipesh@example.com",
    phone: "+977-9841234569",
    image: "/images/committee/general.jpg",
    memberType: "Life Member",
    region: "Kathmandu",
  },
  {
    id: 4,
    name: "Dr. Jeegyasha Thapa",
    title: "Joint Secretary",
    specialty: "Pediatric ENT",
    hospital: "Patan Academy of Health Sciences",
    email: "jeegyasha@example.com",
    phone: "+977-9841234570",
    image: "/images/committee/joint-secretary.jpg",
    memberType: "Life Member",
    region: "Lalitpur",
  },
  {
    id: 5,
    name: "Dr. Ravi Bhushan Suwal",
    title: "Treasurer",
    specialty: "Laryngology",
    hospital: "Bir Hospital",
    email: "ravi@example.com",
    phone: "+977-9841234571",
    image: "/images/committee/treasurer.jpg",
    memberType: "Life Member",
    region: "Kathmandu",
  },
  {
    id: 6,
    name: "Dr. Arun Adhikari",
    title: "Joint Treasurer",
    specialty: "Facial Plastic Surgery",
    hospital: "Nepal Police Hospital",
    email: "arun@example.com",
    phone: "+977-9841234572",
    image: "/images/committee/joint-treasurer.jpg",
    memberType: "Associate Member",
    region: "Bhaktapur",
  },
  {
    id: 7,
    name: "Dr. Kripa Dongol",
    title: "Member",
    specialty: "Otology",
    hospital: "Dhulikhel Hospital",
    email: "kripa@example.com",
    phone: "+977-9841234573",
    image: "/images/committee/member1.jpg",
    memberType: "Life Member",
    region: "Kavre",
  },
  {
    id: 8,
    name: "Dr. Sanjaya Koirala",
    title: "Member",
    specialty: "Head & Neck Surgery",
    hospital: "B.P. Koirala Institute of Health Sciences",
    email: "sanjaya@example.com",
    phone: "+977-9841234574",
    image: "/images/committee/member2.jpg",
    memberType: "Life Member",
    region: "Dharan",
  },
]

const MembersList = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        {membersData.map((member) => (
          <div key={member.id} className="border-b border-gray-200 p-4 last:border-b-0">
            <div className="flex items-center mb-2">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src={member.image || "/placeholder.svg?height=40&width=40"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900">{member.name}</div>
                <div className="text-sm text-primary">{member.title}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div>
                <span className="font-medium">Specialty:</span> {member.specialty}
              </div>
              <div>
                <span className="font-medium">Hospital:</span> {member.hospital}
              </div>
              <div className="flex items-center">
                <RiMailLine className="mr-1 text-primary" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center">
                <RiPhoneLine className="mr-1 text-primary" />
                <span>{member.phone}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800">
                  {member.memberType}
                </span>
                <span className="text-xs">{member.region}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default MembersList
  