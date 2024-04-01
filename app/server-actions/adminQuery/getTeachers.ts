'use server'

import { db } from "@/lib/db"

export const getTeachers = async () => {
    const users = await db.user.findMany({
      where: {
        role: "TEACHER",
      },
    });
  
    if (users.length === 0) {
      return null;
    }
  
    return users;
  };