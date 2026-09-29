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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-gray-500">
        {logos.map((Icon, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Icon size={18} /> Logoipsum
          </div>
        ))}
      </div>
    </section>
  );
}
