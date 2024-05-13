'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db"
import { getServerSession } from "next-auth/next";

export const makeComment = async (commentTitle: string, commentText: string) => {
    const session = await getServerSession(authOptions);
    const user = await db.user.findUnique({
        where: {
            email: session && session.user?.email || 'not logged in',
        }
    })

    if (!user) return "No User"

    await db.comment.create({
        data: {
            comment_title: commentTitle,
            comment_content: commentText
        }
    })

    return 'Comment Sucessfully Created'

}