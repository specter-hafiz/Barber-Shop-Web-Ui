"use client";
import {
  Calendar,
  CircleUser,
  Facebook,
  Instagram,
  Phone,
  Scissors,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import InputField from "./InputField";
import { FormEvent } from "react";

export default function Bookings() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your booking logic here
    console.log("Form submitted");
  };

  return (
    <section className="h-auto my-10 padding" id="bookings">
      <div className="flex flex-col items-center relative">
        <h1 className="font-judson mb-10 text-4xl sm:text-5xl md:text-[100px] mt-10 text-center">
          Book a procedure
        </h1>
        <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 absolute top-0 left-0">
          <Image
            src="/comb.png"
            alt="Decorative comb icon"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full justify-between">
          {/* Booking Form */}
          <div className="flex-1 flex-col items-center border-2 border-white p-6 sm:p-10 rounded-2xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 items-center w-full"
            >
              <h2 className="font-judson text-3xl sm:text-4xl mb-2">
                Booking Form
              </h2>

              <InputField
                icon={<User size={28} color="black" className="mr-5" />}
                placeholder="Full Name"
                type="text"
                name="name"
                required
              />
              <InputField
                icon={<Phone size={28} color="black" className="mr-5" />}
                placeholder="+233 XX XXX XXXX"
                type="tel"
                name="phone"
                required
              />
              <InputField
                icon={<Calendar size={28} color="black" className="mr-5" />}
                placeholder="Select Date"
                type="date"
                name="date"
                required
              />
              <InputField
                icon={<CircleUser size={28} color="black" className="mr-5" />}
                placeholder="Choose Barber"
                type="text"
                name="barber"
              />
              <InputField
                icon={<Scissors size={28} color="black" className="mr-5" />}
                placeholder="Select Procedure"
                type="text"
                name="procedure"
                required
              />
              <button
                type="submit"
                className="bg-golden text-white px-8 py-3 rounded-full hover:bg-golden/90 transition-colors font-semibold w-full text-lg"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="flex-1 border-2 border-white p-6 sm:p-10 rounded-2xl">
            {/* Working Hours */}
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h2 className="font-judson text-3xl sm:text-4xl mb-3">
                Working Hours
              </h2>
              <div className="flex justify-between w-full max-w-sm">
                <p className="text-gray-300">Monday - Saturday</p>
                <p className="font-semibold">09:00 - 20:00</p>
              </div>
              <div className="flex justify-between w-full max-w-sm">
                <p className="text-gray-300">Sunday</p>
                <p className="font-semibold">10:00 - 18:00</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center mb-10">
              <h2 className="font-judson text-3xl sm:text-4xl mb-3">
                Our Address
              </h2>
              <p className="text-gray-300 text-center">
                Kyiv, Lesi Ukrainky, 5
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-golden hover:underline mt-2 text-sm"
              >
                View on Map
              </a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h2 className="font-judson text-3xl sm:text-4xl mb-5">
                Social Media
              </h2>
              <div className="flex gap-5">
                <Link
                  href="tel:+1234567890"
                  aria-label="Call us"
                  className="hover:scale-110 transition-transform"
                >
                  <Phone
                    size={28}
                    className="hover:text-golden transition-colors"
                  />
                </Link>
                <Link
                  href="https://facebook.com"
                  aria-label="Visit our Facebook page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Facebook
                    size={28}
                    className="hover:text-golden transition-colors"
                  />
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Visit our Instagram page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Instagram
                    size={28}
                    className="hover:text-golden transition-colors"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
