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

   
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fbfcf2] via-[#f6f7fd] to-[#f3f4fc]">
        {/* lime — উপরে বামে/মাঝে */}
        <div className="pointer-events-none absolute left-[220px] -top-[30px] h-[320px] w-[300px] rounded-full bg-[#d4fb20]/45 blur-[110px]" />
        {/* lavender — উপরে ডানে */}
        <div className="pointer-events-none absolute -right-[140px] -top-[20px] h-[440px] w-[620px] rounded-full bg-[#c3ccff]/60 blur-[110px]" />
        {/* blue — Growth এর নিচে বামে */}
        <div className="pointer-events-none absolute -left-[200px] top-[480px] h-[420px] w-[440px] rounded-full bg-[#9fb3ff]/40 blur-[110px]" />
        {/* blue — ডানে মাঝে */}
        <div className="pointer-events-none absolute -right-[160px] top-[960px] h-[440px] w-[560px] rounded-full bg-[#b3c0ff]/50 blur-[110px]" />
        {/* lime — নিচে বামে */}
        <div className="pointer-events-none absolute bottom-[70px] -left-[10px] h-[200px] w-[200px] rounded-full bg-[#d4fb20]/45 blur-[30px]" />

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
