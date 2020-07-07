import Router from 'express';
import usersRoutes from './user';
import rolesRoutes from './admin';
import productsRoutes from './products';
import salesRoutes from './sales';
import employeeRoutes from'./employee'

const router = new Router();

router.use('/auth', usersRoutes);
router.use('/admin', rolesRoutes);
router.use('/products', productsRoutes);
router.use('/sales', salesRoutes);
router.use('/employee', employeeRoutes);

export default router;
