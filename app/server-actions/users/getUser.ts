'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db"
import { getServerSession } from "next-auth";

export const getUser = async () => {
    const session = await getServerSession(authOptions);

    const user = await db.user.findUnique({
        where: {
            email:  session && session.user?.email || 'not logged in',
        }
    })

    if(!user){
        return null
    }
    
    return user
}