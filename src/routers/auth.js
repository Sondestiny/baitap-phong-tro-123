import express from 'express';
import * as authController from '../controllers/authController';
const authRouter = express.Router();

authRouter.get('/', function(req, res){
	res.send('đây là trang auth');
})
authRouter.post('/register', authController.register);
// authRouter.post('/login', authController);
authRouter.post('/login', authController.login);
// authRouter.post('/login', authController);
export default authRouter