import { getDataFromToken } from "../../../../lib/utils/getDataFromToken.js";

import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dcConfig.js";
import User from "../../../../models/userModel.js";

connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}