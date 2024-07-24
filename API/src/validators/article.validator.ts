import { ValidationChain, body, query } from "express-validator";
import { RequestHandler } from "express-serve-static-core";
import { validateErrors } from "../middlewares";
import { idChain } from "./general.validator";


const isActiveQuery: ValidationChain = query( "isActive" ).toLowerCase().isIn(["true", "false"])
  .withMessage( "The value must be true or false")
  .optional( { nullable: true } );

const isActivebody: ValidationChain = body( "active" ).isIn([true, false])
  .withMessage( "The value must be true or false")
  .optional( { nullable: true } );

const search: ValidationChain = query( "search" ).isLength( { max: 15} )
  .withMessage( "The search can have a maximum of 15 characters." )
  .optional( { nullable: true } );

const brandQuery: ValidationChain = query( "brand" ).isLength( { max: 15} )
  .withMessage( "The search can have a maximum of 15 characters." )
  .optional( { nullable: true } );

const brandBody: ValidationChain = body( "brand" ).isLength( { max: 15} )
  .withMessage( "The brand can have a maximum of 15 characters." )
  .optional( { nullable: true } );

const nameBody: ValidationChain = body( "name" ).isLength( { max: 15} )
  .withMessage( "The name can have a maximum of 15 characters." )
  .optional( { nullable: true } );



export const getArticles: ValidationChain|RequestHandler[] = [
  isActiveQuery,
  search,
  brandQuery,
  validateErrors
]

export const createArticle: ValidationChain|RequestHandler[] = [
  body( "brand" ).notEmpty().withMessage( "The value brand is required." ),
  brandBody,
  body( "name" ).notEmpty().withMessage( "The value name is required." ),
  nameBody,
  validateErrors
]

export const udpateArticle: ValidationChain|RequestHandler[] = [
  idChain,
  brandBody,
  nameBody,
  isActivebody,
  validateErrors
]

export const deleteArticle: ValidationChain|RequestHandler[] = [
  idChain,
  validateErrors
]