import { ModeToggle } from "@/components/theme-provider";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const auth = true;

  return (
    <nav className="flex w-full justify-around items-center h-[80px] bg-gray-100 fixed">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex justify-around">
        <Link href="/home">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
