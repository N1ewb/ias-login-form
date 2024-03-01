'use server'

import { db } from "@/lib/db"
import bcrypt from 'bcryptjs'
import { Role } from '@prisma/client'

export const signUp = async (firstName: string, lastName: string, email: string, password: string, confirmPassword: string, role: Role) => {
    const user = await db.user.findUnique({
        where: {
            email,
        }
    })

    if(user){
        return 'Email aleady in use'
    }

    if(password.length < 9){
        return 'Password should be longer than 8 Characters'
    }

    if(password !== confirmPassword){
        return 'Password does not match'
    }

    if (!Object.values(Role).includes(role)) {
        return 'Invalid role';
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordHash,
            role: role
        }
    })

    return 'Account Sucessfully Created'

}