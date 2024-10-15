import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Myskills from "@/components/Myskills";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <About/>
    <Myskills/>
    <Portfolio/>
    <Contact/>
    <Footer />
    </>
  );
}
