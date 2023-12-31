import insertRouter from './insert';
import postRouter from './post';
import authRouter from './auth';
import categoryRouter from './category';
import priceRouter from './price';
import provinceRouter from './province';
import areaRouter from './area';
import { errHandler, notFoundPath } from '../middlewares/errHandler';

const initRoutes = (app) => {
    app.use('/api/insert', insertRouter);
    app.use('/api/post', postRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/price', priceRouter);
    app.use('/api/provinces', provinceRouter);
    app.use('/api/area', areaRouter);

    app.use(notFoundPath);
    app.use(errHandler);
};

export default initRoutes;
