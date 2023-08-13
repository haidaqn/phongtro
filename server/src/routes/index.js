import insertRouter from "./insert";
import postRouter from "./post";
import authRouter from './auth';
import { errHandler, notFoundPath } from '../middlewares/errHandler';

const initRoutes = (app) => {
  app.use("/api/insert", insertRouter);
  app.use("/api/post", postRouter);
  app.use("/api/auth", authRouter);

  app.use(notFoundPath);
  app.use(errHandler); 
};

export default initRoutes;
