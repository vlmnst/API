import express, { Application } from "express";
import cors from "cors";
import { ArticleRoute, UserRoute, AuthRoute } from "./routes";
import { errorHandler } from "./middlewares/handlers.middleware";

const app: Application = express();

app.use( express.json() );
app.use( cors() );


app.use( "/api/user", UserRoute )
app.use( "/api/auth", AuthRoute );
app.use( "/api/article", ArticleRoute )


app.use( "*", errorHandler )


export default app;