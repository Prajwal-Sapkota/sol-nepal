import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-12 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-light lg:justify-items-center">
          <div className="md:pr-6">
            <h3 className="font-bold text-lg mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-primary transition">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-primary transition">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pr-6">
            <h3 className="font-bold text-lg mb-4 text-gray-300 text-justify">Contact</h3>
            <address className="text-gray-300 not-italic leading-relaxed">
              <p className="text-gray-300">Society of Otolaryngologists of Nepal</p>
              <p className="text-gray-300">GPO Box 14351, Kathmandu Medical College</p>
              <p className="text-gray-300">Nepal Medical Association Building, Exhibition Road, Kathmandu</p>
              <p className="text-gray-300 flex items-center"><FaPhoneAlt className="mr-2"/>+977-01-5919214</p>
              <p className="text-gray-300 flex items-center"><FaEnvelope className="mr-2"/>secretariat@solnepal.org.np</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <FaFacebookF className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <FaLinkedinIn className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition">
                <FaEnvelope className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SOL Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
