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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link href="/login">Login to existing account</Link>
              </Button>
              <Button>Register</Button>
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
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link href="/login">Login to existing account</Link>
              </Button>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
