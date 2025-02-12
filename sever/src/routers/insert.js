import express from 'express';
import * as insertController from '../controllers/insertController'
const insertRoute = express.Router();

insertRoute.get('/',insertController.insert)

export default insertRoute