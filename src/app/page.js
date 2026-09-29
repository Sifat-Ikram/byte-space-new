import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Discover from "@/components/Discover";
import Paths from "@/components/Paths";
import Growth from "@/components/Growth";
import CreateManage from "@/components/CreateManage";
import CreatorCTA from "@/components/CreatorCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Discover />
      <Paths />
      <div className="relative bg-gradient-to-b from-[#f3f4fc] to-white">
        <Growth />
        <CreateManage />
      </div>
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
