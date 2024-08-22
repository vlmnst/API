import { Router } from "express";
import { ArticleController } from "../controllers";
import { articleValidator } from "../validators";
import { asyncHandler } from "../middlewares/handlers.middleware";
import { checkAuth } from "../middlewares/auth.middleware";



const router = Router()

router.use( [asyncHandler(checkAuth)] );

router.get( "/", articleValidator.getArticles, asyncHandler(ArticleController.getArticles) )

router.post( "/", articleValidator.createArticle, asyncHandler(ArticleController.createArticle) )

router.put( "/:id", articleValidator.udpateArticle, asyncHandler(ArticleController.updateArticle) )

router.delete( "/:id", articleValidator.deleteArticle, asyncHandler(ArticleController.deleteArticle) )

export default router;