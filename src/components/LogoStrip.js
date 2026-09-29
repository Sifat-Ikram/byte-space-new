import {
  FiHexagon,
  FiSun,
  FiZap,
  FiPlusCircle,
  FiCircle,
} from "react-icons/fi";

const logos = [FiCircle, FiSun, FiZap, FiPlusCircle, FiHexagon];

export default function LogoStrip() {
  return (
    <section className="bg-[#f1f1f1]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-5 px-5 py-10 text-gray-500 sm:px-8">
        {logos.map((Icon, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-lg font-semibold"
          >
            <Icon size={24} /> Logoipsum
          </div>
        ))}
      </div>
    </section>
  );
}
