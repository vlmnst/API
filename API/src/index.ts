import http from "http";
import { config } from "./config/config";
import app from "./server";
import { createSchema, sequelize } from "./config/sequelize";


const PORT: number = config()?.port ; 

createSchema()
.then( async () => {
    sequelize.authenticate();
    sequelize.sync()
    console.log( "Connection to the database success" );
} )
.catch((error) => {console.error( "Connect to the database failed", error )})

const server = http.createServer( app );

server.listen( PORT, async () => {
    console.log( `Server is running on port ${PORT}` );
})
