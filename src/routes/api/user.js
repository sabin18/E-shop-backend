import express from 'express';
import AdminController from '../../controllers/admin';

const {
 GetAllusers
} = AdminController;
const router = express.Router();
router.get('/users', GetAllusers);

export default router;
