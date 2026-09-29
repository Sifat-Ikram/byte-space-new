import Logo from "./Logo";

const cols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-3 max-w-[220px] text-[9px] text-gray-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-3 flex max-w-[260px] items-center gap-2">
              <input
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-200 px-3 py-2 text-[10px] outline-none focus:border-[#1739e8]"
              />
              <button className="rounded-full bg-[#c8f31d] px-4 py-2 text-[10px] font-medium">
                Search
              </button>
            </div>
            <p className="mt-2 max-w-[240px] text-[8px] text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {cols.map((col, i) => (
              <ul key={i} className="space-y-3 text-[10px] text-gray-600">
                {col.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-[#1739e8]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 text-[8px] text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
