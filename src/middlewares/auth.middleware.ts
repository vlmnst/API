import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
import { AuthUserRequest, access } from "../interfaces/auth.interface";
import { CustomError } from "../helper/customError.helper";



export const checkAuth = async ( req: AuthUserRequest, res: Response, next: NextFunction ) => {
  const token: string = req.headers[access.token] as string;
    if( token ){
      jwt.verify( token, config().secret, ( err, decoded ) => {
        if ( err ) {
          throw new CustomError( "Invalid Token. Please login again.", 401 );
        }
        req.user = decoded!;
        return next();
      } );
    } else {
      throw new CustomError( "The JWT is required.", 401 );
    }
};