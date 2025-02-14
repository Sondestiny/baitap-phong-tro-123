import authRouter from './auth.js';
import insertRoute from './insert.js';
import express from 'express'; // load express vào ứng dụng
const rootRouter = express.Router();

rootRouter.get('', function(req, res){
	res.send('đây là page root');
})

rootRouter.use('/auth', authRouter)
rootRouter.use('/insert', insertRoute)
export default rootRouter