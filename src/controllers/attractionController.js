import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllAttractions = async (req, res) => {
  try {
    const attractions = await prisma.attraction.findMany();
    res.json(attractions);
  } catch (error) {
    console.error('Errore nel recupero delle attrazioni:', error);
    res.status(500).json({ error: 'Errore nel recupero delle attrazioni' });
  }
};

export const getAttractionById = async (req, res) => {
  try {
    const { id } = req.params;
    const attraction = await prisma.attraction.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!attraction) {
      return res.status(404).json({ error: 'Attrazione non trovata' });
    }
    
    res.json(attraction);
  } catch (error) {
    console.error('Errore nel recupero dell\'attrazione:', error);
    res.status(500).json({ error: 'Errore nel recupero dell\'attrazione' });
  }
}; 