import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import AuthShell from "@/components/AuthShell";

const fields = [
  { label: "Email", type: "email", placeholder: "designer@example.com" },
  { label: "Password", type: "password", placeholder: "********" },
];

export const metadata = { title: "Login | ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-sm text-[#1739e8]">Sign In</p>
      <h1 className="mt-2 text-[36px] font-semibold leading-[1.15] sm:text-[44px]">
        Welcome Back
      </h1>

      <form className="mt-9 space-y-5">
        {fields.map((f) => (
          <div key={f.label}>
            <label className="mb-2 block text-xs text-gray-700">
              {f.label}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              className="h-[52px] w-full rounded-xl bg-[#f5f5f7] px-4 text-sm text-gray-800 outline-none ring-[#1739e8]/30 placeholder:text-gray-400 focus:ring-2"
            />
          </div>
        ))}
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="h-11 rounded-full bg-[#c8f31d] px-8 text-sm font-semibold transition hover:brightness-95"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="mt-8 flex items-center gap-4 text-xs text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Social buttons */}
      <div className="mt-6 flex justify-center gap-4">
        {[FaFacebook, FaGoogle].map((Icon, i) => (
          <button
            key={i}
            type="button"
            className="flex h-[66px] w-[66px] items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-[#c8f31d] hover:shadow-md"
          >
            <Icon size={24} className="text-[#0b0b2b]" />
          </button>
        ))}
      </div>

      <p className="mt-auto pt-8 text-center text-xs text-gray-600">
        New user?{" "}
        <Link href="/register" className="text-[#1739e8] hover:underline">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
