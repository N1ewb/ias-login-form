'use server'

import { db } from "@/lib/db"
import bcrypt from 'bcryptjs'

export const resetUserPassword = async (email: string,newpassword: string) => {
    const user = await db.user.findUnique({
        where: {
            email,
        }
    })
    if (!user) return "No User"

    const passwordHash = bcrypt.hashSync(newpassword, 10);

    await db.user.update({
        where: {
            email: email,
        },
        data: {
            email: email,
            password: passwordHash,
        }
    })

    return 'Account Sucessfully Created'

}