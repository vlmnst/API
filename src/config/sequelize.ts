import { Sequelize } from "sequelize-typescript";
import { config } from "./config";
import { ArticleModel } from "../models";
import UserModel from "../models/user.model";


const { userDatabase, passwordDatabase, hostDatabase, nameDatabase } = config();

const createSchema = async () => {
    try {
        const tempSequelize = new Sequelize( {
            username: userDatabase,
            password:passwordDatabase,
            host: hostDatabase,
            dialect: "mysql",
            logging: false
        } );
        
        await tempSequelize.query( `CREATE DATABASE IF NOT EXISTS ${nameDatabase} ` );
        tempSequelize.close();
    
    } catch (error) {
        console.error(error)
    }
}

const sequelize = new Sequelize( {
    username: userDatabase,
    password:passwordDatabase,
    host: hostDatabase,
    database: nameDatabase,
    dialect: "mysql",
    logging: false
} );

sequelize.addModels( [ArticleModel, UserModel ] )

export { sequelize, createSchema };