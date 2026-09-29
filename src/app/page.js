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

      <div className="relative overflow-hidden bg-[#f6f7fd]">
        <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#d6f74f]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-40 h-[480px] w-[480px] rounded-full bg-[#9db0ff]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[#d6f74f]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[#9db0ff]/30 blur-[120px]" />
        <div className="relative">
          <Growth />
          <CreateManage />
        </div>
      </div>

      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
