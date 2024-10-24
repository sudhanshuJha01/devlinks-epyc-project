import { connect } from "../../../../dbConfig/dcConfig.js";
import User from "../../../../models/userModel.js";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config'

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        const tokenData = {
            id: user._id,
            email: user.email,
        }
    
        if (!process.env.TOKEN_SECRET) {
            throw new Error("TOKEN_SECRET is not defined in environment variables");
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET)

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}