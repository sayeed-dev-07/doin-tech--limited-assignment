import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { AuthLayoutProps } from "@/types";

export default function AuthLayout({
  eyebrow,
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#FAFAFA] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(480px,0.9fr)]">
      {/* Left Section */}
      <section
        className="relative hidden overflow-hidden bg-[#003BE2] px-8 py-8 text-white lg:flex lg:min-h-screen lg:flex-col xl:px-14"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 block w-fit"
          aria-label="Back to ByteSpace home"
        >
          <Image
            src="/images/hero/logo.png"
            alt="ByteSpace"
            width={171}
            height={37}
            priority
          />
        </Link>

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[540px] flex-1 flex-col justify-center pt-12">
          <p className="font-satoshi text-sm font-medium uppercase tracking-[0.16em] text-[#D4FB20]">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-md font-poppins text-4xl font-semibold leading-[1.12] tracking-[-0.03em] xl:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-md font-satoshi text-lg leading-8 text-white/80">
            {description}
          </p>

          {/* Illustration */}
          <div className="relative mx-auto mt-6 h-[330px] w-full max-w-[460px] xl:mt-8 xl:h-[390px]">
            <Image
              src="/images/register.png"
              alt="ByteSpace course community"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1280px) 460px, 520px"
            />
          </div>

          {/* Bottom Message */}
          <div className="mt-2 flex items-center gap-2 font-satoshi text-sm text-white/80">
            <CheckCircle2
              size={18}
              className="text-[#D4FB20]"
            />

            Free to join. Learn at your own pace.
          </div>
        </div>
      </section>

      {/* Right Section */}
      <section className="flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-14 lg:py-8 xl:px-20">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between lg:justify-end">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="lg:hidden"
            aria-label="Back to ByteSpace home"
          >
            <Image
              src="/images/footerLogo.svg"
              alt="ByteSpace"
              width={151}
              height={33}
              priority
            />
          </Link>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-satoshi text-sm font-medium text-[#4B4C53] transition-colors hover:bg-[#F0F1F2] hover:text-[#003BE2]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </header>

        {/* Auth Content */}
        <div className="mx-auto flex w-full max-w-[410px] flex-1 flex-col justify-center py-12 lg:py-8">
          {children}
        </div>
      </section>
    </main>
  );
}
