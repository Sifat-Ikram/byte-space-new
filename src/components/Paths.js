import {
  FiPenTool,
  FiSmartphone,
  FiMonitor,
  FiBriefcase,
  FiTrendingUp,
  FiCamera,
} from "react-icons/fi";

import explore1 from "@/assets/explore1.png";
import explore2 from "@/assets/explore2.png";
import explore3 from "@/assets/explore3.png";
import explore4 from "@/assets/explore4.png";
import explore5 from "@/assets/explore5.png";
import explore6 from "@/assets/explore6.png";
import Image from "next/image";

const paths = [
  { name: "Design", Icon: FiPenTool },
  { name: "Development", Icon: FiSmartphone },
  { name: "IT & Software", Icon: FiMonitor },
  { name: "Business", Icon: FiBriefcase },
  { name: "Marketing", Icon: FiTrendingUp },
  { name: "Photography", Icon: FiCamera },
];

const images = [explore1, explore2, explore3, explore4, explore5, explore6];

export default function Paths() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-24 text-center sm:px-8">
      <h2 className="text-2xl font-semibold sm:text-3xl md:text-[34px]">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {paths.map(({ name, Icon }, i) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2 h-[167px] w-[167px] flex-col rounded-3xl border border-[#CED0D3] bg-white px-3 py-6 text-sm text-[#242528] shadow-md transition"
          >
            <span className="flex h-15 w-15 items-center justify-center rounded-full bg-[#c8f31d] text-[#0b0b2b]">
              <Image
                src={images[i]}
                width={40}
                height={40}
                alt={name}
                className="h-10 w-10 object-contain"
              />
            </span>

            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
