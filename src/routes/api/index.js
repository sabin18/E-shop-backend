import Router from 'express';
import usersRoutes from './user';
import rolesRoutes from './admin';
import productsRoutes from './products';
import salesRoutes from './sales';
import employeeRoutes from './employee'
import creditsRoutes from './credits'
import debitsRoutes from './debits'
import businessRoutes from './business'
import expensesRoutes from './expenses'

const router = new Router();

router.use('/auth', usersRoutes);
router.use('/admin', rolesRoutes);
router.use('/products', productsRoutes);
router.use('/sales', salesRoutes);
router.use('/employee', employeeRoutes);
router.use('/credits', creditsRoutes);
router.use('/debits', debitsRoutes);
router.use('/business',businessRoutes);
router.use('/expenses',expensesRoutes);


export default router;
