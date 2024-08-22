import { NextFunction, Request, Response } from "express";
import { CustomError } from "../helper/customError.helper";
import { ParamsDictionary, RequestHandler } from "express-serve-static-core";

export const errorHandler = async ( error: CustomError, req: Request, res: Response, next: NextFunction ) => {
    res.status( error.code || 500 ).json( { message : error.message } )
}

export const asyncHandler = <T extends ParamsDictionary> ( fn: RequestHandler<T> ) => 
    ( req: Request<T>, res: Response, next: NextFunction ) => 
        Promise.resolve( fn(req, res, next) ).catch( next );