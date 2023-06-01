import express from 'express';
import middlewares from '../middlewares/login.meddlewares';
import loginController from '../controllers/login.controller';

const router = express.Router();

router.post('/', middlewares, loginController.login);

export default router;