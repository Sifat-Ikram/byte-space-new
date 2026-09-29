import Image from "next/image";
import logo from "@/assets/mainLogo.png";

export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image src={logo} alt="logo" width={28.88} height={31.5} />
      <span
        className={`text-lg font-semibold ${dark ? "text-[#0b0b2b]" : "text-white"}`}
      >
        ByteSpace
      </span>
    </div>
  );
}
