'use server'

import { db } from "@/lib/db"

export const getComment = async () => {
    const comments = await db.comment.findMany({
      where: {
        
      },
    });
    if (comments.length === 0) {
      return null;
    }
  
    return comments;
  };