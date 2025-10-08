import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[200px] bg-gray-900 padding">
      <div className="flex h-full w-full gap-20 items-center">
        <div className="flex-1 flex gap-10 items-start">
          <div>
            <div className="pb-10">
              <Image src="/logo.png" width={100} height={100} alt="logo" />
            </div>
            <p>© All rights reserved 2025</p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#about" className="hover:text-black">
              About us
            </Link>
            <Link href="#services" className="hover:text-black">
              Our Services
            </Link>{" "}
            <Link href="#faqs" className="hover:text-black">
              F.A.Q
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-between items-start">
          <div className="mr-10">
            <h1 className="text-4xl">Contacts</h1>
            <div className="flex my-4">
              <Link href="">
                <Phone size={22} className="mr-2 hover:text-golden" />
              </Link>
              <Link href="">
                <Facebook size={22} className="mr-2 hover:text-golden" />
              </Link>
              <Link href="">
                <Instagram size={22} className="mr-2 hover:text-golden" />
              </Link>
            </div>
            <p>+123 456 7890</p>
            <p>Kiyiv, Lesi Ukrainky, 5</p>
          </div>
          <div className="w-[250px] h-[150px] relative rounded-[20px] overflow-hidden flex flex-2">
            <Image src="/map.jpg" fill alt="map" />
          </div>
        </div>
      </div>
    </footer>
  );
}
