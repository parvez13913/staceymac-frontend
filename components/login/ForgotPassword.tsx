"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import ReusableButton from "../reusable/ReuseableBtn";

export function ForgotPassword({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      toast.error("Invalid email format");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to send OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("OTP sent to your email!");
      // Navigate to OTP verification page with email
      router.push("/otp");
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-4",
        className
      )}
      style={{
        backgroundImage: "url(/images/Background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardContent className="pt-8 pb-6 px-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src="/images/logo.png" alt="Prevailing Wages Logo" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Reset your password
            </h1>
            <p className="text-gray-500 text-sm text-center mt-2">
              Enter your email address and we will send you password reset
              instructions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="text-xs">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  Registered Email<span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Input your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={
                    error ? "border-red-500 focus-visible:ring-red-500" : ""
                  }
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </Field>

              <Field className="mt-4 space-y-3">
                <ReusableButton
                  type="submit"
                  className="w-full bg-primary hover:bg-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get A Code"}
                </ReusableButton>
                <ReusableButton
                  type="button"
                  variant="outline"
                  className="w-full bg-white border border-gray-400"
                  onClick={() => router.push("/login")}
                  disabled={isLoading}
                >
                  Back To Login
                </ReusableButton>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400">
          © 2025 Prevailing Wages All rights reserved.{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Terms & Conditions
          </a>{" "}
          ·{" "}
          <a href="#" className="text-gray-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
