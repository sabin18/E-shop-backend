import Router from 'express';
import usersRoutes from './user';
import rolesRoutes from './admin';
import productsRoutes from './products';
import salesRoutes from './sales'

const router = new Router();

router.use('/auth', usersRoutes);
router.use('/admin', rolesRoutes);
router.use('/products', productsRoutes);
router.use('/sales', salesRoutes);

export default router;
