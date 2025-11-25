import ReusableButton from "@/components/reusable/ReuseableBtn";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PasswordChangedSuccessPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image */}
      <img
        src="/images/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Centered Card */}
      <Card className="bg-white w-full max-w-md shadow-lg z-20">
        <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center justify-center">
          {/* Illustration */}
          <img
            src="/images/Illustration.png"
            alt="Success illustration"
            className="mb-6"
          />

          {/* Success Message */}
          <h1 className="text-2xl font-semibold text-black text-center leading-tight">
            Your successfully changed
            <br />
            your password
          </h1>

          <p className="text-gray-500 text-sm text-center mt-3 max-w-xs">
            Always remember the password for your account at Humanline!
          </p>

          {/* Back to Login Button */}
          <Link href="/login" className="w-full mt-8">
            <ReusableButton className="w-full bg-primary hover:bg-primary">
              Back to Login
            </ReusableButton>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordChangedSuccessPage;
