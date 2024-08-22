import { Response } from "express";
import { UserPostRequest } from "../interfaces/user.interface";
import { UserMethods } from "../methods";
import UserModel from "../models/user.model";
import { CustomError } from "../helper/customError.helper";

export const createUser = async ( req: UserPostRequest, res: Response): Promise<void> => {
    const { user, password } = req.body;

    const userDB = await UserModel.findOne( { where: { user } })
    if( userDB ) throw new CustomError( "This username already exists.", 400 )

    const { message, code, results } = await UserMethods.createUser(user, password)
    res.status( code ).json( { results, message } )

};