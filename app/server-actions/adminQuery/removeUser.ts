'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db"
import { getServerSession } from "next-auth";

export const deleteUser = async (email: string) => {
  const session = await getServerSession(authOptions);

  // If no session exists, return early
  if (!session || !session.user) {
    return null;
  }

  try {
    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return null;
    }
    await db.user.delete({ where: { email } });

    return true;
    
  } catch (error) {
    console.error("Error deleting user:", error.message);
    return false;
  }
};