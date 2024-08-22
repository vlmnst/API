import { Router } from "express";
import { UserController } from "../controllers";
import { userValidator } from "../validators";
import { asyncHandler } from "../middlewares/handlers.middleware";

const router = Router()

router.post( "/", userValidator.createUser, asyncHandler(UserController.createUser) );

export default router;