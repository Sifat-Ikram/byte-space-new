import Logo from "./Logo";

const cols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-gray-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-4 flex max-w-[340px] items-center gap-2">
              <input
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#1739e8]"
              />
              <button className="rounded-full bg-[#c8f31d] px-5 py-2.5 text-sm font-semibold text-[#0b0b2b]">
                Search
              </button>
            </div>
            <p className="mt-3 max-w-[320px] text-xs leading-relaxed text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((col, i) => (
              <ul key={i} className="space-y-4 text-sm text-gray-600">
                {col.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-[#1739e8]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
