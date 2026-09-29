import {
  FiPenTool,
  FiSmartphone,
  FiMonitor,
  FiBriefcase,
  FiTrendingUp,
  FiCamera,
} from "react-icons/fi";

const paths = [
  { name: "Design", Icon: FiPenTool },
  { name: "Development", Icon: FiSmartphone },
  { name: "IT & Software", Icon: FiMonitor },
  { name: "Business", Icon: FiBriefcase },
  { name: "Marketing", Icon: FiTrendingUp },
  { name: "Photography", Icon: FiCamera },
];

export default function Paths() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
      <h2 className="text-2xl font-semibold">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[10px] leading-relaxed text-gray-400">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-6">
        {paths.map(({ name, Icon }) => (
          <a
            key={name}
            href="#"
            className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-2 py-4 text-[10px] transition hover:border-[#c8f31d] hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c8f31d]">
              <Icon size={14} />
            </span>
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
