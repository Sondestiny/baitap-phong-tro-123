import authRouter from './auth.js';
import postRouter from './post.js'
import insertRoute from './insert.js';
import express from 'express'; // load express vào ứng dụng
const rootRouter = express.Router();

rootRouter.get('', function(req, res){
	res.send('đây là page root');
})

rootRouter.use('/auth', authRouter)
rootRouter.use('/post', postRouter)
rootRouter.use('/insert', insertRoute)
export default rootRouter