import { ValidationChain, body } from "express-validator";
import { RequestHandler } from "express-serve-static-core";
import { validateErrors } from "../middlewares";


const user: ValidationChain = body( "user" ).isLength( { max: 20 } )
  .withMessage( "The user's length should have a max length of 20 characters." ).optional();

const password: ValidationChain = body( "password" ).isString().withMessage( "The password must be a string." ).optional();

export const login: ValidationChain|RequestHandler[] = [
  user,
  body( "user" ).not().isEmpty().withMessage( "The user is required." ),
  password,
  body( "password" ).not().isEmpty().withMessage( "The password is required." ),
  validateErrors
];