/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import ReusableButton from "../reusable/ReuseableBtn";

export function OTPVerification({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);

    // Focus last filled input or the next empty one
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleResend = async () => {
    if (!canResend) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("New OTP sent to your email!");
      setResendTimer(60);
      setCanResend(false);
      setOtp(Array(6).fill(""));
      inputRefs.current[0]?.focus();
    } catch (error) {
      toast.error("Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Simulate OTP verification (in real app, verify with backend)
      if (otpValue === "123456") {
        toast.success("OTP verified successfully!");
        router.push("/reset-password");
      } else {
        toast.error("Invalid OTP. Please try again.");
        setOtp(Array(6).fill(""));
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      toast.error("Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    if (!local || !domain) return email;

    const firstTwo = local.slice(0, 2);
    return `${firstTwo}***@${domain}`;
  };

  const maskedEmail = email ? maskEmail(email) : "";

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-4",
        className
      )}
      style={{
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardContent className="pt-8 pb-6 px-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/images/logo.png"
              alt="Prevailing Wages Logo"
              width={160}
              height={71}
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              OTP Verification
            </h1>
            <p className="text-gray-500 text-sm text-center mt-2">
              We have sent a 6-digit verification code to email address{" "}
              <span className="font-medium text-gray-700">{maskedEmail}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-16 h-16 text-center text-black text-sm font-semibold"
                      disabled={isLoading}
                    />
                  ))}
                </div>
              </Field>

              <Field className="mt-6 space-y-3">
                <ReusableButton
                  type="submit"
                  className="w-full bg-primary hover:bg-primary"
                  disabled={isLoading || otp.join("").length !== 6}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </ReusableButton>
                <ReusableButton
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/forgot-password")}
                  disabled={isLoading}
                >
                  Back
                </ReusableButton>
              </Field>

              {/* Resend OTP */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  Didnot receive the code?{" "}
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-indigo-600 hover:underline font-medium"
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <span className="text-gray-400">
                      Resend in {resendTimer}s
                    </span>
                  )}
                </p>
              </div>
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
