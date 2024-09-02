interface Error{
    statusCode?: number;
    message? : string;
    stack? : string;
}
import {NextFunction, Request, Response} from 'express'

export const errorHandler = (err : Error, req : Request, res : Response , next:NextFunction )=>{
    console.log("Middleware Error Hadnling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}