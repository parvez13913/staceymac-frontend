"use client";

import { OTPVerification } from "@/components/login/OTPVerification";
import { Suspense } from "react";

export default function OtpVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPVerification />
    </Suspense>
  );
}
