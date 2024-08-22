import { ValidationChain, body } from "express-validator";
import { RequestHandler } from "express-serve-static-core";
import { validateErrors } from "../middlewares";

const user: ValidationChain = body( "user" ).notEmpty().withMessage( "The value user is required." )
.isLength( { max: 20 } ).withMessage( "The user can have a maximum of 20 characters." );

const password: ValidationChain = body( "password" ).notEmpty().withMessage( "The value password is required." )
.isLength( { max: 20 } ).withMessage( "The password can have a maximum of 20 characters." );


export const createUser: ValidationChain|RequestHandler[] = [
    user,
    password,
    validateErrors
  ]