
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const generateJWT = ( name: string, id: number ) => {
    const token = jwt.sign(
      {
        name,
        userId: id
      },
      config().secret
    );
    return { token, code: 200 };
};