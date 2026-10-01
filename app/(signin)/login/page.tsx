import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

import AuthLayout from "../_components/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Pick up where curiosity left off."
      description="Return to your courses, saved ideas, and the creators you follow."
    >
      <div>
        <p className="font-satoshi text-sm font-medium text-[#003BE2]">
          Sign in to ByteSpace
        </p>

        <h2 className="mt-3 font-poppins text-4xl font-semibold tracking-[-0.03em] text-[#242528]">
          Welcome back
        </h2>

        <p className="mt-3 font-satoshi leading-7 text-[#66676D]">
          Enter your details to continue learning.
        </p>
      </div>

      <form className="mt-8 space-y-5" action="#">
        {/* Email */}
        <label className="block">
          <span className="mb-2 block font-satoshi text-sm font-medium text-[#242528]">
            Email address
          </span>

          <span className="flex h-13 items-center gap-3 rounded-xl border border-[#DADCE0] bg-white px-4 transition-colors focus-within:border-[#003BE2] focus-within:ring-4 focus-within:ring-[#003BE2]/10">
            <Mail size={18} className="text-[#82868E]" />

            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="designer@example.com"
              className="h-full min-w-0 flex-1 bg-transparent font-satoshi text-[#242528] outline-none placeholder:text-[#969AA2]"
              required
            />
          </span>
        </label>

        {/* Password */}
        <label className="block">
          <span className="mb-2 flex items-center justify-between font-satoshi text-sm font-medium text-[#242528]">
            Password

            <Link
              href="#"
              className="font-normal text-[#003BE2] hover:underline"
            >
              Forgot password?
            </Link>
          </span>

          <span className="flex h-13 items-center gap-3 rounded-xl border border-[#DADCE0] bg-white px-4 transition-colors focus-within:border-[#003BE2] focus-within:ring-4 focus-within:ring-[#003BE2]/10">
            <LockKeyhole size={18} className="text-[#82868E]" />

            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="h-full min-w-0 flex-1 bg-transparent font-satoshi text-[#242528] outline-none placeholder:text-[#969AA2]"
              required
            />
          </span>
        </label>

        {/* Remember Me */}
        <label className="flex cursor-pointer items-center gap-2 font-satoshi text-sm text-[#4B4C53]">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-[#BFC2C8] accent-[#003BE2]"
          />

          Remember me for 30 days
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#003BE2] px-6 font-satoshi font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#002DAA] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
        >
          Sign in
          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-8 text-center font-satoshi text-sm text-[#66676D]">
        New to ByteSpace?{" "}
        <Link
          href="/register"
          className="font-medium text-[#003BE2] hover:underline"
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}