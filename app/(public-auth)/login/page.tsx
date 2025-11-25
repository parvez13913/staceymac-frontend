"use client";

import { LoginForm } from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT PANEL — visible only on desktop */}
      <div className="hidden md:block">
        {/* Top Image */}
        <img
          src="/images/photo02.png"
          alt="Background"
          className="w-full h-[625px] object-cover"
        />

        {/* Blue Section */}
        <div className="bg-[#305CDE] p-10 space-y-6">
          <img
            src="/images/white-log.png"
            alt="Logo"
            className="h-[98px] w-[209px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold leading-[120%] text-white">
              Support Your Team With <br /> Real-Time Wage Clarity
            </h2>

            <p className="text-lg leading-[150%] text-white mt-4">
              Make wage verification simple, transparent, and stress-free for
              everyone.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — always visible */}
      <div className="relative flex flex-col items-center justify-center p-6 md:p-10">
        {/* FORM BOX */}
        <div className="w-full max-w-md">
          <LoginForm />
        </div>

        {/* FOOTER */}
        <footer className="mt-12 text-center md:text-right w-full">
          <p className="text-xs md:text-sm text-gray-500">
            © 2025 Prevailing Wages. All rights reserved.
            <span className="block md:inline md:ml-2">
              <a href="#" className="font-medium hover:underline">
                Terms & Conditions
              </a>
              <span className="mx-2">·</span>
              <a href="#" className="font-medium hover:underline">
                Privacy Policy
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
