import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (session && session.user?.email) {
    return <div>{children}</div>;
  }
  return (
    <div className="absolute top-[50%] left-[33%] border border-black border-l-4 px-[150px] py-[10px]">
      Login to access this page
    </div>
  );
};

export default ProtectedLayout;
