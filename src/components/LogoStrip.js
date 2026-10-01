import Image from "next/image";
import logoipsum from "@/assets/logoipsum.png";
import sun from "@/assets/sun.png";
import flash from "@/assets/flash.png";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logo2.png";

export default function LogoStrip() {
  return (
    <section className="bg-[#f1f1f1]">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-8 gap-y-5 px-5 py-10 text-gray-500 sm:px-8">
        <div className="flex items-center gap-2.5 text-lg font-semibold">
          <Image src={logoipsum} alt="logoipsum1" priority width={168} height={41} />{" "}
        </div>
        <div className="flex items-center gap-2.5 text-lg font-semibold">
          <Image src={sun} alt="sun" priority width={168} height={41} />
        </div>
        <div className="flex items-center gap-2.5 text-lg font-semibold">
          <Image src={flash} alt="flash" priority width={168} height={41} />
        </div>
        <div className="flex items-center gap-2.5 text-lg font-semibold">
          <Image src={logo} alt="logo" priority width={168} height={41} />
        </div>
        <div className="flex items-center gap-2.5 text-lg font-semibold">
          <Image src={logo2} alt="logo2" priority width={168} height={41} />
        </div>
      </div>
    </section>
  );
}
