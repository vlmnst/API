import bcrypt from "bcrypt";
import { Response } from "express";
import { AuthRequest } from "../interfaces/auth.interface";
import { getUserByUsername } from "../methods/user.method";
import { generateJWT } from "../helper/jwtGenerator.helper";
import { CustomError } from "../helper/customError.helper";

export const login = async ( req: AuthRequest, res: Response ): Promise<void> => {
  const { user, password: input } = req.body;
  const userRes = await getUserByUsername( user );

  if ( userRes && userRes.results && !Array.isArray(userRes.results) ) {
      const { id, password } = userRes.results;
      if ( !bcrypt.compareSync( input, password ) ) throw new CustomError( "Incorrect password", 401 );
      const { token, code } = await generateJWT( user, id );
      
      const userData = {
          token,
          message: "Access granted."
        };
        
        res.status( code ).json( userData );
    }
  
};