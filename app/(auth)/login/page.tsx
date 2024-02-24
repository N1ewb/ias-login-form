import React from "react";
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

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
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
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/register">Register an Account</Link>
          </Button>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
