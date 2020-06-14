import Router from 'express';
import usersRoutes from './user';
import rolesRoutes from './admin';

const router = new Router();

router.use('/auth', usersRoutes);
router.use('/admin', rolesRoutes);

export default router;
