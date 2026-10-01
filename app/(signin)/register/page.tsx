import Link from "next/link";
import {
    ArrowRight,
    LockKeyhole,
    Mail,
    UserRound,
} from "lucide-react";

import AuthLayout from "../_components/AuthLayout";

export default function RegisterPage() {
    return (
        <AuthLayout
            eyebrow="Start learning today"
            title="A better space to grow your skills."
            description="Discover practical courses and a community built for ambitious, curious people."
        >
            <div>
                <p className="font-satoshi text-sm font-medium text-[#003BE2]">
                    Create your account
                </p>

                <h2 className="mt-3 font-poppins text-4xl font-semibold tracking-[-0.03em] text-[#242528]">
                    Join ByteSpace
                </h2>

                <p className="mt-3 font-satoshi leading-7 text-[#66676D]">
                    It only takes a minute to begin your next chapter.
                </p>
            </div>

            <form className="mt-8 space-y-5" action="#">
                {/* Full Name */}
                <label className="block">
                    <span className="mb-2 block font-satoshi text-sm font-medium text-[#242528]">
                        Full name
                    </span>

                    <span className="flex h-13 items-center gap-3 rounded-xl border border-[#DADCE0] bg-white px-4 transition-colors focus-within:border-[#003BE2] focus-within:ring-4 focus-within:ring-[#003BE2]/10">
                        <UserRound size={18} className="text-[#82868E]" />

                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Jamie Davis"
                            className="h-full min-w-0 flex-1 bg-transparent font-satoshi text-[#242528] outline-none placeholder:text-[#969AA2]"
                            required
                        />
                    </span>
                </label>

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
                    <span className="mb-2 block font-satoshi text-sm font-medium text-[#242528]">
                        Create a password
                    </span>

                    <span className="flex h-13 items-center gap-3 rounded-xl border border-[#DADCE0] bg-white px-4 transition-colors focus-within:border-[#003BE2] focus-within:ring-4 focus-within:ring-[#003BE2]/10">
                        <LockKeyhole size={18} className="text-[#82868E]" />

                        <input
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            minLength={8}
                            placeholder="At least 8 characters"
                            className="h-full min-w-0 flex-1 bg-transparent font-satoshi text-[#242528] outline-none placeholder:text-[#969AA2]"
                            required
                        />
                    </span>
                </label>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-2 font-satoshi text-sm leading-5 text-[#4B4C53]">
                    <input
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#BFC2C8] accent-[#003BE2]"
                    />

                    <span>
                        I agree to the{" "}
                        <Link
                            href="#"
                            className="text-[#003BE2] hover:underline"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="#"
                            className="text-[#003BE2] hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </span>
                </label>

                {/* Submit */}
                <button
                    type="submit"
                    className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#D4FB20] px-6 font-satoshi font-medium text-[#242528] transition-transform hover:-translate-y-0.5 hover:bg-[#c4ed13] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
                >
                    Create account
                    <ArrowRight size={18} />
                </button>
            </form>

            <p className="mt-8 text-center font-satoshi text-sm text-[#66676D]">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-[#003BE2] hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </AuthLayout>
    );
}