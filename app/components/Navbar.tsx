"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
        setMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop ? "bg-transparent" : "bg-gray-900/95 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 md:px-12 lg:px-20 transition-all duration-300 ${
          isAtTop ? "py-6" : "py-3"
        }`}
      >
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" onClick={handleLinkClick}>
          <div
            className={`relative transition-all duration-300 ${
              isAtTop ? "w-16 h-16" : "w-12 h-12"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Barbershop Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="#about"
            className="text-white hover:text-golden transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-golden transition-colors font-medium"
          >
            Our Services
          </Link>
          <Link
            href="#faqs"
            className="text-white hover:text-golden transition-colors font-medium"
          >
            FAQs
          </Link>
          <Link
            href="#team"
            className="text-white hover:text-golden transition-colors font-medium"
          >
            Our Team
          </Link>
          <a
            href="tel:+380500000000"
            className="flex items-center gap-2 text-white hover:text-golden transition-colors font-medium"
            aria-label="Call us at +380 50 000 0000"
          >
            <Phone size={18} />
            <span>+380 50 000 0000</span>
          </a>
          <a
            href="#bookings"
            className="px-6 py-2 bg-golden text-white rounded-full hover:bg-golden/90 transition-all hover:scale-105 font-semibold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-golden transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-sm px-4 py-6 space-y-4 border-t border-gray-800">
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="block text-white hover:text-golden transition-colors font-medium py-2"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={handleLinkClick}
            className="block text-white hover:text-golden transition-colors font-medium py-2"
          >
            Our Services
          </Link>
          <Link
            href="#faqs"
            onClick={handleLinkClick}
            className="block text-white hover:text-golden transition-colors font-medium py-2"
          >
            FAQs
          </Link>
          <Link
            href="#team"
            onClick={handleLinkClick}
            className="block text-white hover:text-golden transition-colors font-medium py-2"
          >
            Our Team
          </Link>
          <a
            href="tel:+380500000000"
            onClick={handleLinkClick}
            className="flex items-center gap-2 text-white hover:text-golden transition-colors font-medium py-2"
            aria-label="Call us"
          >
            <Phone size={18} />
            <span>+380 50 000 0000</span>
          </a>
          <a
            href="#bookings"
            onClick={handleLinkClick}
            className="block text-center px-6 py-3 bg-golden text-white rounded-full hover:bg-golden/90 transition-all font-semibold mt-4"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
