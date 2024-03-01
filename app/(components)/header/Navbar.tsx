import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ModeToggle } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import Link from "next/link";

import UserButton from "../userbutton/UserButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex w-full justify-around items-center h-[80px] fixed ">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex justify-around">
        <Link href="/protected/dashboard">Dashboard</Link>
        {session && session.user?.email ? (
          <>
            <UserButton />
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
