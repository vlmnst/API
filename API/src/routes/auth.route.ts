import { Router } from "express";

import { AuthController } from "../controllers";
import { authValidator } from "../validators";
import { asyncHandler } from "../middlewares/handlers.middleware";
// import { checkAuth } from "../middlewares";

const router = Router();

router.post( "/login", authValidator.login, asyncHandler( AuthController.login ) );

// router.get( "/logout", [checkAuth] , asyncHandler( AuthController.logout ) );

export default router;
