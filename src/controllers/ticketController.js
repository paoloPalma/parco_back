import prisma from "../prisma/prismaClient";


export const getAllTickets = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  } catch (error) {
    console.error('Errore nel recupero dei ticket:', error);
    res.status(500).json({ error: 'Errore nel recupero dei ticket' });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await prisma.ticket.findUnique({
      where: { id }
    });
    
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket non trovato' });
    }
    
    res.json(ticket);
  } catch (error) {
    console.error('Errore nel recupero del ticket:', error);
    res.status(500).json({ error: 'Errore nel recupero del ticket' });
  }
}; 