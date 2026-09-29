export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#c8f31d] text-xs font-bold text-[#1739e8]">
        B
      </div>
      <span
        className={`text-sm font-semibold ${dark ? "text-[#0b0b2b]" : "text-white"}`}
      >
        ByteSpace
      </span>
    </div>
  );
}
