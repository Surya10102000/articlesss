import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

// Extend the Request interface to include the 'decoded' property
interface CustomRequest extends Request {
    decoded?: string | JwtPayload; // Adjust this type based on the structure of your decoded token
  }

export let checkToken = (req : CustomRequest,res : Response, next : NextFunction) => {
    let token = req.headers['x-access-token'] as string || req.headers['authorization'] as string; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET as Secret, (err : any, decoded : any) => {
            if (err) {
                return res.json({
                    message: err.message
                });
            } else {
                req.decoded= decoded;
                next();
            }
        });
    } else {
        return res.json({
            message: 'Auth token is not supplied'
        });
    }
};

