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
import { changePassword } from "@/app/server-actions/users/changePassword";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const ChangePassword = () => {
  const { status } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [oldpassword, setOldPassword] = useState("")
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangepassword = async () => {
    setMessage("Logging In...");
    try {
        if(newpassword !== confirmPassword) return "Password doesnt match"

        const message = await changePassword(email, oldpassword, newpassword)
        setMessage(message)
        toast({
            title: "Change Password",
            description: "Change Password Sucessfully!",
          });
    } catch (error) {
        toast({
            title: "Change Password",
            description: "Change Failed, Please try again",
          });
    }
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
          <CardTitle>Change Password</CardTitle>
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
                <Label htmlFor="old-password">Previous Password</Label>
                <Input
                  id="old-password"
                  type="password"
                  value={oldpassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="newpassword">Password</Label>
                <Input
                  id="newpassword"
                  type="password"
                  value={newpassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex justify-between w-full">
            <Link href="/register">Register an Account</Link>
            <Button onClick={() => handleChangepassword()}>Login</Button>
          </div>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChangePassword;
