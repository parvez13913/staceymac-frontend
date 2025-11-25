import { LoginForm } from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Mobile Background - Blurred Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/images/background.png"
          alt="bg"
          className="object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* Left Side - Image (Desktop Only) */}
      <div className="hidden md:flex md:w-1/2 relative flex-col min-h-screen overflow-hidden bg-[#0130be]">
        {/* Top Full Image */}
        <div className="relative w-full h-full">
          <img
            src="/images/photo02.png"
            alt="Background"
            className="object-cover w-full h-fit"
          />
        </div>

        {/* Blue Section */}
        <div className="relative bg-[#021f74] text-white px-10 py-12 flex flex-col gap-4">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="object-contain" />

          {/* Title */}
          <h2 className="text-2xl md:text-5xl font-bold leading-snug">
            Support Your Team With <br />
            Real-Time Wage Clarity
          </h2>

          {/* Description */}
          <p className="text-sm opacity-90 max-w-md leading-relaxed">
            Make wage verification simple, transparent, and stress-free for
            everyone.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-8">
        {/* Decorative Ornament */}
        <img
          src="/images/Ornament.png"
          alt=""
          className="absolute top-4 left-6 md:top-12 md:left-10 w-auto h-8 md:h-auto object-contain"
        />

        {/* Form Container */}
        <div className="w-full max-w-md">
          <LoginForm />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 md:right-16 px-8 text-center">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-right">
            © 2025 Prevailing Wages. All rights reserved.
            <span className="block md:inline md:ml-2">
              <a href="#" className="font-medium text-gray-700 hover:underline">
                Terms & Conditions
              </a>
              <span className="mx-2">·</span>
              <a href="#" className="font-medium text-gray-700 hover:underline">
                Privacy Policy
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
