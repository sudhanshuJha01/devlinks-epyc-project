import jwt from "jsonwebtoken";
import 'dotenv/config'


export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken= jwt.verify(token, process.env.TOKEN_SECRET);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
        console.log("error in getDataToken");
        
    }
}