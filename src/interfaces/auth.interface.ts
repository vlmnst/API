import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface AuthAttributes {
    user: string;
    password: string;
}

export interface AuthRequest extends Request {
    body: AuthAttributes;
}

export interface AuthUserRequest extends Request {
    user?: string | JwtPayload;
}

export const enum access {
    token = "x-access-token"
}