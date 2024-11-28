import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import toast from "react-hot-toast";
export async function POST(request: Request) {
    const { username, email, password } = await request.json()
    try {
        if (!username || !email || !password) {
            toast.error('provide all neccessary information.',{
                duration:2000
            });
            return
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        const token = jwt.sign({ id: data.id, username: data.username, email: data.email },
            process.env.SECRET_KEY as string,
            { expiresIn: "7d" }
        )
        return NextResponse.json({ token, message: "success" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ messsage: 'Error server' }, { status: 500 })
    }
}