import { Request } from "express";

export interface UserAttributes {
    id?: number;
    user: string;
    password: string;
}

export interface UserPostRequest extends Request {
    body: {
        user: string;
        password: string;  
    }
}