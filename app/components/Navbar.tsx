"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
      // detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // scrolling down hide the navbar
        setShow(false);
      } else {
        // scrolling up show the navbar
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={` ${
        show ? "" : "-translate-y-full"
      } transition-transform duration-300 ${
        isAtTop ? "px-4 md:px-20 lg:px-24 nav-colored" : " nav-transparent"
      } z-50 fixed top-0 left-0 right-0`}
    >
      <div
        className={`flex justify-between items-center  ${
          isAtTop ? "mt-5" : "bg-golden py-3 px-4 md:px-20 lg:px-24"
        }`}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <div className="md:flex hidden">
          <Link href="#about" className="nav-item">
            About us
          </Link>
          <Link href="#services" className="nav-item">
            Our Services
          </Link>
          <Link href="#faqs" className="nav-item">
            FAQs
          </Link>
          <Link href="#contact" className="nav-item">
            Contacts
          </Link>
          <Link href="#number" className="nav-item">
            +380500000000
          </Link>
        </div>
      </div>
    </nav>
  );
}
