"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }, []);

  return null;
};

export default SignoutPage;
