import { Router } from 'express';
import productControlle from '../controllers/product.controller';

const router = Router();

router.post('/', productControlle.create);

export default router;
