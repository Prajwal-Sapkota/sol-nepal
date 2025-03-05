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
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    if (!isClient) return ""
    return pathname === path
      ? "text-dark border-b-2 border-primary font-medium"
      : "text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary/50 transition-all duration-300"
  }

  if (!isClient) return null

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top section with logo and buttons */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/80 sm:h-12 sm:w-12">
              <Image src="/images/logo-1.png" alt="SOL Logo" layout="fill" objectFit="cover" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 sm:text-xl lg:text-2xl">SOL Nepal</span>
              <span className="hidden text-xs text-gray-500 sm:inline">Society of Otolaryngologists of Nepal</span>
            </div>
          </Link>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-full bg-gray-50 p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-primary"
              aria-label="Toggle search"
            >
              <RiSearchLine className="h-5 w-5" />
            </button>

            <button className="flex items-center space-x-1 rounded-full bg-primary px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-md sm:px-4 sm:py-2 sm:text-base">
              <RiUserLine className="h-4 w-4" />
              <span>Login</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-gray-50 p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-primary sm:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenu3Fill className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="mt-4 hidden justify-center sm:flex">
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-3 lg:gap-6">
            <Link href="/" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/")}`}>
              Home
            </Link>
            <Link
              href="/about"
              className={`px-2 py-1 text-sm md:text-base lg:text-lg whitespace-nowrap ${isActive("/about")}`}
            >
              About Us
            </Link>
            <Link href="/members" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/members")}`}>
              Members
            </Link>
            <Link
              href="/constitution"
              className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/constitution")}`}
            >
              Constitution
            </Link>
            <Link href="/events" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/events")}`}>
              Events
            </Link>
            <Link href="/activities" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/activities")}`}>
              Activities
            </Link>
            <Link href="/consent" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/consent")}`}>
              Consent Forms
            </Link>
            <Link href="/journal" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/journal")}`}>
              Journal
            </Link>
            <Link href="/gallery" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/gallery")}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`px-2 py-1 text-sm md:text-base lg:text-lg ${isActive("/contact")}`}>
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white shadow-lg sm:hidden"
          >
            <nav className="container mx-auto px-4 py-2">
              <div className="flex flex-col divide-y divide-gray-100">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/members", label: "Members" },
                  { path: "/constitution", label: "Constitution" },
                  { path: "/events", label: "Events" },
                  { path: "/activities", label: "Activities" },
                  { path: "/consent", label: "Consent Forms" },
                  { path: "/journal", label: "Journal" },
                  { path: "/gallery", label: "Gallery" },
                  { path: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setIsMenuOpen(false)}>
                    <motion.div
                      className={`py-3 text-base ${pathname === item.path ? "text-dark font-medium" : "text-gray-600"}`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="relative flex items-center">
                <RiSearchLine className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full bg-gray-50 py-3 pl-12 pr-4 text-base transition-all duration-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                  <RiCloseLine className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

