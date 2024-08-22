import dotenv from "dotenv";
import { Congif } from "../interfaces/config.interface";
dotenv.config()

const { PORT, USER_DATABASE, PASSWORD_DATABASE, NAME_DATABASE, HOST_DATABASE, SECRET } = process.env;

export const config = () :Congif => {

    if( PORT && USER_DATABASE && PASSWORD_DATABASE && NAME_DATABASE && HOST_DATABASE && SECRET ) {
        
        const config: Congif = {
            port: Number(PORT),
            userDatabase: USER_DATABASE,
            passwordDatabase: PASSWORD_DATABASE,
            nameDatabase: NAME_DATABASE,
            hostDatabase: HOST_DATABASE,
            secret: SECRET
        }
        return config
    } else {
        throw new Error( "Please ensure all environment variables are set" )
    }    
    
}
