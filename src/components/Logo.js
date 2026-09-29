export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c8f31d] text-sm font-bold text-[#1739e8]">
        B
      </div>
      <span
        className={`text-lg font-semibold ${dark ? "text-[#0b0b2b]" : "text-white"}`}
      >
        ByteSpace
      </span>
    </div>
  );
}
