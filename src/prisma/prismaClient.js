import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); //ogni volta che faccio questo comando mi sto connettendo al db. Lo mettiamo in questo file perche cosi in ogni file che mi serve e la costante che fa la connessione lo scriviamo una volta sola.
//non riscriviamo questo in ogni file perchè sarebbe come riconnettersi al db in ogni file e non è corretto

export default prisma;