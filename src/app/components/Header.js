"use client"
import { useState, useEffect } from "react"
import { RiMenu3Fill, RiCloseLine, RiSearchLine, RiUserLine } from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isActive = (path) => {
    if (!isClient) return ""
    return pathname === path
      ? "bg-primary text-white rounded-lg px-4 py-2 font-semibold transition-all duration-300 ease-in-out"
      : "text-dark"
  }

  if (!isClient) return null

  return (
    <header
      className={`sticky top-0 z-50 w-full  bg-gray-100`}
    >
      <div className="container mx-auto px-1 py-4">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border-2 border-dark">
              <Image src="/images/logo-1.png" alt="SOL Logo" layout="fill" objectFit="cover" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-xl lg:text-2xl font-bold text-dark">SOL Nepal</span>
              <span className="text-sm text-gray-600 hidden sm:inline">Society of Otolaryngologists of Nepal</span>
            </div>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              <RiSearchLine className="h-5 w-5" />
            </button>

            <button className="flex items-center space-x-1 px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 text-sm sm:text-base">
              <RiUserLine className="h-4 w-4" />
              <span>Login</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              {isMenuOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenu3Fill className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden sm:flex flex-wrap lg:justify-center md:justify-evenly gap-2 lg:gap-8  lg:mt-2 md:mt-6">
          <Link href="/" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/")}`}>
            Home
          </Link>
          <Link href="/about" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/about")} whitespace-nowrap`}>
            About Us
          </Link>
          <Link href="/members" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/members")}`}>
            Members
          </Link>
          <Link href="/constitution" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/constitution")}`}>
            Constitution
          </Link>
          <Link href="/events" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/events")}`}>
            Events
          </Link>
          <Link href="/activities" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/activities")}`}>
            Activities
          </Link>
          <Link href="/consent" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/consent")}`}>
            Consent Forms
          </Link>
          <Link href="/journal" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/journal")}`}>
            Journal
          </Link>
          <Link href="/gallery" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/gallery")}`}>
            Gallery
          </Link>
          <Link href="/contact" className={`text-xs lg:text-xl lg:font-medium md:font-semibold ${isActive("/contact")}`}>
            Contact
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 ">
              {["/", "/about", "/members","/constitution", "/events","/activities","/consent", "/journal", "/gallery", "/contact"].map((path) => (
                <Link key={path} href={path} onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    className={`py-2 text-lg font-medium ${isActive(path)}`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 bg-white shadow-lg"
          >
            <div className="container mx-auto py-4 px-4">
              <div className="relative">
                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

