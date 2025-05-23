import { Router } from 'express';
import * as riwayatController from '../controllers/riwayatcontroller';
import { protect } from '../middlewares/authmiddleware';

const router: Router = Router();

router.get('/',protect, riwayatController.getAllRiwayat);

export default router;
