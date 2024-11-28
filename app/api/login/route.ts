import { prisma } from "@/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const { email, password } = await request.json()
    try {
        if (!email || !password) {
            console.log('provide all neccessary information.');
            return
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error('No user found with this email.')
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            throw new Error("Invalid password.");
        }

        const token = jwt.sign({ id: user.id, username: user.username, email: user.email },
            process.env.SECRET_KEY as string,
            { expiresIn: "7d" }
        )
        return NextResponse.json({ token, message: "success" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ messsage: 'Error server' }, { status: 500 })
    }
} 