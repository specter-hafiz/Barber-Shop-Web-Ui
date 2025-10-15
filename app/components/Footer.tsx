import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-auto bg-gray-900 text-gray-100 padding">
      <div className="flex flex-col sm:flex-row h-full w-full gap-10 sm:gap-20 items-start justify-between py-10">
        <div className="flex gap-10 lg:gap-20 items-start justify-between w-full sm:w-auto">
          <div>
            <div className="pb-10">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="Company logo"
              />
            </div>
            <p className="text-gray-400 text-sm">© All rights reserved 2025</p>
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="#about" className="hover:text-golden transition-colors">
              About us
            </Link>
            <Link
              href="#services"
              className="hover:text-golden transition-colors"
            >
              Our Services
            </Link>
            <Link href="#faqs" className="hover:text-golden transition-colors">
              F.A.Q
            </Link>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 w-full sm:w-auto">
          <div className="flex-shrink-0">
            <h2 className="text-xl font-semibold mb-4">Contacts</h2>
            <div className="flex my-4 gap-2">
              <Link href="tel:+1234567890" aria-label="Call us">
                <Phone
                  size={22}
                  className="hover:text-golden transition-colors"
                />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={22}
                  className="hover:text-golden transition-colors"
                />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={22}
                  className="hover:text-golden transition-colors"
                />
              </Link>
            </div>
            <p className="text-gray-300">+123 456 7890</p>
            <p className="text-gray-300">Kyiv, Lesi Ukrainky, 5</p>
          </div>
          <div className="relative w-full sm:w-[250px] h-[140px] sm:h-[150px] rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/map.jpg"
              alt="Location map showing Lesi Ukrainky 5, Kyiv"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
