import express from 'express';
import * as postController from '../controllers/postController';
const postRouter = express.Router();

postRouter.get('/getAll', postController.getAllPost);

export default postRouter