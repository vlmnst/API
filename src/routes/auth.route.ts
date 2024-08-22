import { Router } from "express";

import { AuthController } from "../controllers";
import { authValidator } from "../validators";
import { asyncHandler } from "../middlewares/handlers.middleware";

const router = Router();

router.post( "/login", authValidator.login, asyncHandler( AuthController.login ) );


export default router;
