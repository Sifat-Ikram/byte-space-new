import Placeholder from "./Placeholder";

export default function Avatars({ count = 4, more = "50+" }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <Placeholder
          key={i}
          label=""
          className="-ml-2 h-7 w-7 rounded-full border-2 border-white first:ml-0"
        />
      ))}
      <span className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#c8f31d] text-[9px] font-semibold text-[#0b0b2b]">
        {more}
      </span>
    </div>
  );
}
