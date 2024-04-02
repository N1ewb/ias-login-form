import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ModeToggle } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import Link from "next/link";

import UserButton from "../user/userbutton/UserButton";
import { db } from "@/lib/db";
import { getUser } from "@/app/server-actions/users/getUser";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  const user = await getUser()

  const dashboardLink = () => {
    const role = user && user?.role
    switch (role){
      case 'STUDENT':
        return '/protected/student-dashboard'
      case 'TEACHER':
        return '/protected/teacher-dashboard'
        case 'ADMIN':
        return '/protected/dashboard'
      default:
        return '/protected/dashboard'
    }
  }

  return (
    <nav className="flex w-full justify-around items-center h-[80px] fixed ">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex justify-around">
        <Link href={dashboardLink()}>Dashboard</Link>
        {session && session.user?.email ? (
          <>
            <UserButton />
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
