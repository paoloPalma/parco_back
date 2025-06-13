import express from 'express';
import { getAllShows, getShowById } from '../controllers/showController.js';

const showRouter = express.Router();

showRouter.get('/shows', getAllShows);
showRouter.get('/shows/:id', getShowById);

export default showRouter; 