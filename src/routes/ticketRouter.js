import express from 'express';
import { getAllTickets, getTicketById } from '../controllers/ticketController.js';

const ticketRouter = express.Router();

ticketRouter.get('/tickets', getAllTickets);
ticketRouter.get('/tickets/:id', getTicketById);

export default ticketRouter; 