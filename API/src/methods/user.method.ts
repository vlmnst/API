import bcrypt from "bcrypt";
import { ResponseAttributes } from "../interfaces/response.interface";
import UserModel from "../models/user.model";
import { CustomError } from "../helper/customError.helper";

export const createUser = async ( user: string, pass: string ): Promise<ResponseAttributes<UserModel>> => {
    const password = bcrypt.hashSync( pass, 10 );
    await UserModel.create( { user, password  })

    return {
        code: 200,
        message: "New user created succesfully"
    };
}

export const getUserByUsername = async ( user: string ): Promise<ResponseAttributes<UserModel>> => {
      const userDB = await UserModel.findOne( { where: { user } } );
      if ( !userDB ) {
        throw new CustomError( "There is no User registered with that username.", 404 );
      }
      return {
        results: userDB,
        message: "Success",
        code: 200
      };
  };