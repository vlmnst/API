import { Response } from "express";
import { ArticleGetRequest, ArticlePostRequest, ArticleUpdateRequest } from "../interfaces/article.interface";
import { ArticleMethods } from "../methods";

export const createArticle = async ( req: ArticlePostRequest, res: Response): Promise<void> => {
    const { name, brand } = req.body;
    const { message, code, results } = await ArticleMethods.createArticle(name, brand)
    res.status( code ).json( { results, message } )

};

export const getArticles = async (req: ArticleGetRequest, res: Response ): Promise<void> => {
    const { search, brand, isActive } = req.query;
    const active = isActive === undefined || isActive === '' ? undefined : (isActive === 'true');


    const { message, code, results } = await ArticleMethods.getArticle(search, brand, active);

    res.status( code ).json( { results, message } )
};

export const updateArticle = async ( req: ArticleUpdateRequest, res: Response ): Promise <void> => {
    const { name, brand, active } = req.body;
    const id = Number(req.params.id)

    const payload = { name, brand, active };

    const { message, code } = await ArticleMethods.updateArticle( id, payload )

    res.status( code ).json( { message } )

}

export const deleteArticle = async ( req: ArticleUpdateRequest, res: Response ): Promise <void> => {
    const id = Number(req.params.id)

    const { code } = await ArticleMethods.updateArticle( id, { active: false } )

    res.status( code ).json( { message: "The article is inactive now" } )

}