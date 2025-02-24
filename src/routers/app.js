import express from 'express';
import * as appController from '../controllers/appController';
const appRouter = express.Router();
appRouter.get('/getData', appController.getAllAppData);
export default appRouter