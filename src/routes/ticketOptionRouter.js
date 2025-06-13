import express from 'express';
import { getAllTicketOptions, getTicketOptionById } from '../controllers/ticketOptionController.js';

const ticketOptionRouter = express.Router();

ticketOptionRouter.get('/ticket-options', getAllTicketOptions);
ticketOptionRouter.get('/ticket-options/:id', getTicketOptionById);

export default ticketOptionRouter; 