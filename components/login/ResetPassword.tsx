"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import ReusableButton from "../reusable/ReuseableBtn";

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

export function ResetPassword({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  const router = useRouter();

  const requirements: PasswordRequirement[] = [
    { label: "8 characters", test: (p) => p.length >= 8 },
    { label: "Uppercase letter (A-Z)", test: (p) => /[A-Z]/.test(p) },
    { label: "Number (0-9)", test: (p) => /[0-9]/.test(p) },
    { label: "Lowercase letter (a-z)", test: (p) => /[a-z]/.test(p) },
  ];

  const passwordChecks = useMemo(() => {
    return requirements.map((req) => ({
      ...req,
      passed: req.test(password),
    }));
  }, [password]);

  const allRequirementsMet = passwordChecks.every((check) => check.passed);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!allRequirementsMet) {
      newErrors.password = "Password does not meet all requirements";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/password-changed");
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
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
            <img
              src="/images/Logo.png"
              alt="Prevailing Wages Logo"
              width={160}
              height={71}
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              Update your password
            </h1>
            <p className="text-gray-500 text-sm text-center mt-2">
              Set your new password with minimum 8 characters with a combination
              of letters and numbers
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="password">
                  New Password<span className="text-red-500">*</span>
                </FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    className={
                      errors.password
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Requirements */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                  {passwordChecks.map((check, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      {check.passed ? (
                        <Check size={14} className="text-green-500" />
                      ) : (
                        <X size={14} className="text-red-500" />
                      )}
                      <span
                        className={cn(
                          "text-xs",
                          check.passed ? "text-green-600" : "text-red-500"
                        )}
                      >
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Field>

              <Field className="mt-4">
                <FieldLabel htmlFor="confirmPassword">
                  Confirmation New Password
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-type your new password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errors.confirmPassword)
                        setErrors((prev) => ({
                          ...prev,
                          confirmPassword: undefined,
                        }));
                    }}
                    className={
                      errors.confirmPassword
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </Field>

              <Field className="mt-6">
                <ReusableButton
                  type="submit"
                  className="w-full bg-primary hover:bg-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Submit"}
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
