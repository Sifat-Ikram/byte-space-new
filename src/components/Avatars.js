import Placeholder from "./Placeholder";

export default function Avatars({ count = 4, more = "50+" }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <Placeholder
          key={i}
          label=""
          className="-ml-1.5 h-5 w-5 rounded-full border-2 border-white first:ml-0"
        />
      ))}
      <span className="-ml-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#c8f31d] text-[7px] font-semibold">
        {more}
      </span>
    </div>
  );
}
