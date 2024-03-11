'use server'

import { db } from "@/lib/db"

export const getUser = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email,
        }
    })

    if(!user){
        return null
    }
    
    return user
}