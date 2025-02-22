import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-light">
          <div className="md:pr-6">
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We are a professional medical society dedicated to advancing healthcare through education, research, and collaboration.
            </p>
          </div>

          <div className="md:pr-6">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
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
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="text-gray-300 not-italic leading-relaxed">
              <p>Kathmandu, Nepal</p>
              <p>Phone: 1234567890</p>
              <p>Email: info@solnepal.org</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
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
