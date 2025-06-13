import express from "express";
import cors from "cors"; // ✅ importa cors
import attractionsRouter from "./routes/attractionRouter.js";
import showRouter from "./routes/showRouter.js";
import ticketRouter from "./routes/ticketRouter.js";
import ticketOptionRouter from "./routes/ticketOptionRouter.js";
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// ✅ Abilita CORS per tutte le origini (solo per sviluppo)
app.use(cors());

// Middleware per il parsing del JSON
app.use(express.json());

// Route di test
app.get("/", (req, res) => {
  res.json({ message: "Server funzionante!" });
});

app.use(attractionsRouter);  
app.use(showRouter);  
app.use(ticketRouter);  
app.use(ticketOptionRouter);  

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
  console.log(`Database URL: ${process.env.DATABASE_URL}`);
});
