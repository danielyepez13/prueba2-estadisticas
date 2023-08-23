import { PrismaClient } from "@prisma/client";
// * Exporta el cliente de prisma para poder utilizarlo en otras funcioens de la aplicacion. Especialmente para consultas con una API
export const prisma = new PrismaClient();