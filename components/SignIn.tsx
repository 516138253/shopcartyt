"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <SignInButton mode="modal">
      <button className="brand-pill text-sm font-semibold bg-brand-navy text-white hover:bg-brand-blue hoverEffect">
        {t.header.signIn}
      </button>
    </SignInButton>
  );
};

export default SignIn;
