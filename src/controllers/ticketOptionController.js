import prisma from "../prisma/prismaClient";


export const getAllTicketOptions = async (req, res) => {
  try {
    const ticketOptions = await prisma.ticketOption.findMany();
    res.json(ticketOptions);
  } catch (error) {
    console.error('Errore nel recupero delle opzioni ticket:', error);
    res.status(500).json({ error: 'Errore nel recupero delle opzioni ticket' });
  }
};

export const getTicketOptionById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticketOption = await prisma.ticketOption.findUnique({
      where: { id }
    });
    
    if (!ticketOption) {
      return res.status(404).json({ error: 'Opzione ticket non trovata' });
    }
    
    res.json(ticketOption);
  } catch (error) {
    console.error('Errore nel recupero dell\'opzione ticket:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'opzione ticket' });
  }
}; 