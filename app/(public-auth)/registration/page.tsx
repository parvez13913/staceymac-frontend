import { RegistrationForm } from "@/components/login/registration-form";

export default function RegistrationPage() {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/images/background.png"
          alt="bg"
          className="object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* LEFT SIDE — Registration Form (swapped) */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-8 bg-white">
        {/* Decorative Ornament */}
        {/* <Image
          width={100}
          height={61}
          src="/images/Ornament.png"
          alt=""
          className="absolute top-4 left-6 md:top-12 md:left-10 w-auto h-8 md:h-auto object-contain"
        /> */}

        {/* Form Container */}
        <div className="w-full max-w-md">
          <RegistrationForm />
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 px-8 flex justify-center ">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
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

      {/* RIGHT SIDE — Hero Section (swapped + updated UI) */}
      <div className="hidden md:block w-1/2 relative bg-[#1E5BFF] text-white px-16 py-6">
        <div className="flex-col justify-end">
          <div className="relative z-10 left-41">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Support Your Team With <br /> Real-Time Wage Clarity
            </h2>

            <p className="text-base text-white/90 mb-10">
              We help to complete all your conveyancing needs easily
            </p>
          </div>
          {/* Image section */}
          <div className="relative left-41 w-full h-[500px]">
            <img
              src="/images/Bg.png"
              alt="Dashboard Preview"
              width={700}
              height={1080}
              className="object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
