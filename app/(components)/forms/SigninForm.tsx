"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const SigninForm = () => {
  const { status } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    setMessage("Logging In...");
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid Credentials");
        toast({
          title: "Sign In",
          description: "Signed In Failed, Please try again",
        });
      } else {
        router.refresh();
        toast({
          title: "Sign In",
          description: "Signed In Successful, Please proceed to dashboard",
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/protected/dashboard");
      router.refresh();
    }
  }, [status]);

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome to our website</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between">
          <div className="flex justify-between w-full">
            <Link href="/register">Register an Account</Link>
            <Button onClick={() => handleSignIn()}>Login</Button>
          </div>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default SigninForm;
