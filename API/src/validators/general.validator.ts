import { ValidationChain, param } from 'express-validator';

export const idChain: ValidationChain = param( "id" ).isDecimal().withMessage( "The id value must be a number." );