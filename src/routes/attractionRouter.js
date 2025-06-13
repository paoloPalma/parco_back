import express from 'express';
import { getAllAttractions, getAttractionById } from '../controllers/attractionController.js';

const attractionsRouter = express.Router();

attractionsRouter.get('/attractions', getAllAttractions);
attractionsRouter.get('/attractions/:id', getAttractionById);


export default attractionsRouter;