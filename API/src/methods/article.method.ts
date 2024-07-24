import { Op } from "sequelize";
import { ResponseAttributes } from "../interfaces/response.interface";
import { ArticleModel } from "../models";
import { ArticleUpdateAttibutes } from "../interfaces/article.interface";
import { CustomError } from "../helper/customError.helper";
import { SqlError } from "../interfaces/error.interface";

export const getArticle = async (search: string = "", brand?: string, active?: boolean ): Promise<ResponseAttributes<ArticleModel>> => {

    const name =  { [Op.like]: `%${search}%` }
    const where = brand ? {
        name,
        brand,
        active
    } : {
        name,
        active
    }
    const resultArticle = await ArticleModel.findAll({ where })

    return {
        message: "Articles found.",
        results: resultArticle,
        code: 200,
    }
    
};


export const createArticle = async ( name: string, brand: string ): Promise<ResponseAttributes<ArticleModel>> => {
    try {
    const newArticle = await ArticleModel.create({ name, brand });
    return {
        results: newArticle,
        code: 200,
        message: "New article created succesfully",
    };
    } catch (error) {
        const err = error as SqlError;
        if ( err.parent?.sqlState == "23000" ) throw new CustomError( `${err.parent.sqlMessage}`, 403 );
        throw new CustomError( `${err.message}`, 500 );
    }
}

export const updateArticle = async ( id: number, updatedValues: ArticleUpdateAttibutes ): Promise<ResponseAttributes<ArticleModel>> => {
  try {
    const [ rowsAffected ] = await ArticleModel.update( (updatedValues), { where: { id }}  )

    if( rowsAffected === 0) throw new CustomError( `No article has been found with the id ${id} to be modified`, 404 );
    
    return {
        code: 200,
        message: "Article updated succesfully",
    };
  } catch (error) {
        const err = error as SqlError;
        if ( err.parent?.sqlState == "23000" ) throw new CustomError( `${err.parent.sqlMessage}`, 403 );
        throw new CustomError( `${err.message}`, 500 );
  }
}