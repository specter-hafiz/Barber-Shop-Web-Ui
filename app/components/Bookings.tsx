import {
  Calendar,
  CircleUser,
  Facebook,
  Instagram,
  PersonStanding,
  Phone,
  PhoneIcon,
  Scissors,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import InputField from "./InputField";

export default function Bookings() {
  return (
    <section className="h-auto my-10 padding" id="bookings">
      <div className="flex flex-col items-center relative">
        <h1 className="font-judson text-4xl/6 sm:text-5xl md:text-[100px] mt-10 text-center">
          Book a procedure
        </h1>
        <div className="w-40 h-40 absolute top-0 left-0 ">
          <Image src="/comb.png" alt="comb" fill />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 w-full justify-between">
          <div className="flex-1 flex-col items-center border-2 border-white p-10 rounded-2xl">
            <div className="flex flex-col gap-5 items-center w-full">
              <h2 className="font-judson text-4xl">Form</h2>

              <InputField
                icon={<User size={28} color="black" className="mr-5" />}
                placeholder="Name"
                type="text"
              />
              <InputField
                icon={<Phone size={28} color="black" className="mr-5" />}
                placeholder="+233"
                type="text"
              />
              <InputField
                icon={<Calendar size={28} color="black" className="mr-5" />}
                placeholder="Date"
                type="text"
              />
              <InputField
                icon={<CircleUser size={28} color="black" className="mr-5" />}
                placeholder="Barber"
                type="text"
              />
              <InputField
                icon={<Scissors size={28} color="black" className="mr-5" />}
                placeholder="Procedure"
                type="text"
              />
              <button className="signup-button w-full">Signup</button>
            </div>
          </div>
          <div className="flex-1 border-2 border-white p-10 rounded-2xl">
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h2 className="font-judson text-4xl mb-5">Working hours</h2>
              <div className="flex justify-between w-full px-20">
                <p>Mon-Sat</p>
                <p>09:00-20:00</p>
              </div>
              <div className="flex justify-between w-full px-20">
                <p>Mon-Sat</p>
                <p>09:00-20:00</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-judson text-4xl ">Our Address</h2>
              <p className="mb-5">Kiyiv,Lesi Ukrainky,5</p>
            </div>
            <div className="flex flex-col items-center mt-10">
              <h2 className="font-judson text-4xl mb-5">Social media</h2>
              <div className="flex gap-5">
                <Link href="/">
                  <Phone size={24} className="hover:text-golden" />
                </Link>
                <Link href="/">
                  <Facebook size={24} className="hover:text-golden" />
                </Link>
                <Link href="/">
                  <Instagram size={24} className="hover:text-golden" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
