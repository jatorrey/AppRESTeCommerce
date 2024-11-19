import { Router } from 'express';
import config from '../../../config/config.js';
import orderRoutes from './order.routes.js';

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;
    app.use(api, router);
    router.use('/orders', orderRoutes);
    return router;
};

export default routerAPI;