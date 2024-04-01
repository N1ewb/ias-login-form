'use server'

import { db } from "@/lib/db"

export const getStudents = async () => {
    const users = await db.user.findMany({
      where: {
        role: "STUDENT",
      },
    });
  
    if (users.length === 0) {
      return null;
    }
  
    return users;
  };