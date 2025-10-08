import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Bookings from "./components/Bookings";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Reviews />
      <Bookings />
      <FAQs />
      <Footer />
    </>
  );
}
