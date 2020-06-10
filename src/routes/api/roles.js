import express from 'express';
import RolesController from '../../controllers/roles/roles';
import checkToken from '../../middlewares/checkToken'


const { GetRoles } = RolesController;
const router = express.Router();
router.get('/roles', checkToken ,GetRoles);

export default router;
