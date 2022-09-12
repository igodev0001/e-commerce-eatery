import { PrismaClient } from "@prisma/client";
import globalHandler from "../../lib/handler";

const handler = globalHandler();

handler.get(async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
