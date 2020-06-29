import Router from 'express';
import usersRoutes from './user';
import rolesRoutes from './admin';
import productsRoutes from './products'

const router = new Router();

router.use('/auth', usersRoutes);
router.use('/admin', rolesRoutes);
router.use('/products', productsRoutes);

export default router;
