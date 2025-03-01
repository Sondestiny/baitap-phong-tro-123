import express from 'express';
import * as postController from '../controllers/postController';
const postRouter = express.Router();
postRouter.get('/', postController.getPostLimit);
postRouter.get('/getAll', postController.getAllPost);
postRouter.get('/getPostNewUpdateList', postController.getPostNewUpdateList);



export default postRouter