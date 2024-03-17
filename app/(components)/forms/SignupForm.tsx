"use client";
import { signUp } from "@/app/server-actions/users/Signup";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import Link from "next/link";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [capchta, setCaptcha] = useState<string | null>();
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSignupStudent = async () => {
    try {
      if (capchta) {
        setMessage("Signing Up...");
        const message = await signUp(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          "STUDENT"
        );
        setMessage(message);
        toast({
          title: "Sign Up",
          description: "Signed Up Successful, Please proceed to Login!",
        });
      } else {
        toast({
          title: "Sign Up",
          description: "Signed Up Failed, Please try again",
        });
      }
    } catch (error) {
      toast({
        title: "Sign Up",
        description: `${error}, Please try again`,
      });
    } finally {
      resetForm();
    }
  };

  const handleSignupTeacher = async () => {
    try {
      if (capchta) {
        setMessage("Signing Up...");
        const message = await signUp(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          "TEACHER"
        );
        setMessage(message);
        toast({
          title: "Sign Up",
          description: "Signed Up Successful, Please proceed to Login",
        });
      } else {
        toast({
          title: "Sign Up",
          description: "Signed Up Failed, Please try again",
        });
      }
    } catch (error) {
      toast({
        title: "Sign Up",
        description: `${error}, Please try again`,
      });
    } finally {
      resetForm();
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCaptcha(null);
  };

  return (
    <div className="flex flex-col mt-[140px]">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Student</TabsTrigger>
          <TabsTrigger value="password">Teacher</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Student</CardTitle>
              <CardDescription>Make an Account as Student.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={setCaptcha}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link href="/login">Login to existing account</Link>
              </Button>
              <Button onClick={() => handleSignupStudent()}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Teacher</CardTitle>
              <CardDescription>Make Account as a Teacher.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={setCaptcha}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link href="/login">Login to existing account</Link>
              </Button>
              <Button onClick={() => handleSignupTeacher()}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignupForm;
