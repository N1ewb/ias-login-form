"use client";

import { useToast } from "@/components/ui/use-toast";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignoutPage = () => {
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
    toast({
      title: "Log out",
      description: "Logout Successful, Redirected to Logout Page",
    });
  }, []);

  return null;
};

export default SignoutPage;
