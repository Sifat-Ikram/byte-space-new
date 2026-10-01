export default function Placeholder({ className = "", label = "Image" }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-200/70 text-[10px] text-gray-400 ${className}`}
    >
      {label}
    </div>
  );
}
