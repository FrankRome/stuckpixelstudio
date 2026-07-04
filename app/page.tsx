import About from "@/components/About";
import Contact from "@/components/Contact";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import WishlistSection from "@/components/WishlistSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WishlistSection />
      <About />
      <Games />
      <Contact />
    </>
  );
}
