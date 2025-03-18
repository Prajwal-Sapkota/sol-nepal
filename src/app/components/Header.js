"use client";

import { useState, useEffect, useRef } from "react";
import { RiMenu3Fill, RiCloseLine, RiSearchLine, RiUserLine, RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [membersDropdownOpen, setMembersDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const membersDropdownRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path) => {
    if (!isClient) return "";
    return pathname === path
      ? "text-dark border-b-2 border-primary font-medium"
      : "text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary/50 transition-all duration-300";
  };

  const isActiveDropdown = () => {
    if (!isClient) return "";
    return pathname.startsWith("/members")
      ? "text-dark border-b-2 border-primary font-medium"
      : "text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary/50 transition-all duration-300";
  };

  const membersLinks = [
    { href: "/sol-members", label: "SOL Members" },
    { href: "/membershipform", label: "Membership Form" },
    { href: "/executivecommitte", label: "Executive Committee" },
  ];

  const handleMouseEnter = () => {
    if (!isMobile) {
      setMembersDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setMembersDropdownOpen(false);
    }
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setMembersDropdownOpen(!membersDropdownOpen);
    }
  };

  if (!isClient) return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/80 sm:h-12 sm:w-12">
              <Image src="/images/logo-1.jpg" alt="SOL Logo" layout="fill" objectFit="cover" priority />
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

            {/* Members Dropdown */}
            <div
              className="relative"
              ref={membersDropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleMobileToggle}
                className={`flex items-center px-2 py-1 text-sm md:text-base lg:text-lg ${isActiveDropdown()}`}
              >
                Members
                <RiArrowDownSLine
                  className={`ml-1 transition-transform duration-200 ${membersDropdownOpen ? "transform rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {membersDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 z-50 mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                  >
                    {membersLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    className={`py-3 text-base ${pathname === "/" ? "text-dark font-medium" : "text-gray-600"}`}
                    whileTap={{ scale: 0.98 }}
                  >
                    Home
                  </motion.div>
                </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    className={`py-3 text-base ${pathname === "/about" ? "text-dark font-medium" : "text-gray-600"}`}
                    whileTap={{ scale: 0.98 }}
                  >
                    About Us
                  </motion.div>
                </Link>

                {/* Mobile Members Dropdown */}
                <div className="py-1">
                  <motion.button
                    onClick={() => setMembersDropdownOpen(!membersDropdownOpen)}
                    className={`flex w-full items-center py-3 text-base ${
                      pathname.startsWith("/members") ? "text-dark font-medium" : "text-gray-600"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    Members
                    <RiArrowDownSLine
                      className={`ml-2 transition-transform duration-200 ${membersDropdownOpen ? "transform rotate-180" : ""}`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {membersDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1"
                      >
                        {membersLinks.map((link) => (
                          <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            <motion.div
                              className={`py-2 text-sm ${
                                pathname === link.href ? "text-dark font-medium" : "text-gray-600"
                              }`}
                              whileTap={{ scale: 0.98 }}
                            >
                              {link.label}
                            </motion.div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {[{ path: "/constitution", label: "Constitution" },
                  { path: "/events", label: "Events" },
                  { path: "/activities", label: "Activities" },
                  { path: "/consent", label: "Consent Forms" },
                  { path: "/journal", label: "Journal" },
                  { path: "/gallery", label: "Gallery" },
                  { path: "/contact", label: "Contact" }].map((item) => (
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
  );
}
