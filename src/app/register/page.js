import Link from "next/link";
import AuthShell from "@/components/AuthShell";

const fields = [
  { label: "Full Name", type: "text", placeholder: "Jamie Davis" },
  { label: "Email", type: "email", placeholder: "designer@example.com" },
  { label: "Password", type: "password", placeholder: "********" },
];

export const metadata = { title: "Register | ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-sm text-[#1739e8]">Create an Account</p>
      <h1 className="mt-2 text-[36px] font-semibold leading-[1.15] sm:text-[44px]">
        Welcome to <br />
        ByteSpace
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
            Continue
          </button>
        </div>
      </form>

      <p className="mt-auto pt-8 text-center text-xs text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#1739e8] hover:underline">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}
