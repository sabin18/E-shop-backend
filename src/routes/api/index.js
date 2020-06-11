import Router from 'express';
import usersRoutes from './user';

const router = new Router();

router.use('/auth', usersRoutes);

export default router;
