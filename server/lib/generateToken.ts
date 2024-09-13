import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userId : string, res : any) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET as string,{
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge : 15*24*60*60*1000, //ms
        httpOnly : true,
        sameSite : "strict",
        secure: process.env.NODE_ENV !== "development",
    })
}