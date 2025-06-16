import prisma from "../prisma/prismaClient.js";


export const getAllShows = async (req, res) => {
  try {
    const shows = await prisma.show.findMany();
    res.json(shows);
  } catch (error) {
    console.error('Errore nel recupero degli show:', error);
    res.status(500).json({ error: 'Errore nel recupero degli show' });
  }
};

export const getShowById = async (req, res) => {
  try {
    const { id } = req.params;
    const show = await prisma.show.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!show) {
      return res.status(404).json({ error: 'Show non trovato' });
    }
    
    res.json(show);
  } catch (error) {
    console.error('Errore nel recupero dello show:', error);
    res.status(500).json({ error: 'Errore nel recupero dello show' });
  }
}; 