import { PrismaClient } from "@prisma/client";
import globalHandler from "../../lib/handler";
//======================================================

const handler = globalHandler();

handler.get(async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    res.json(categories);
  } catch (err) {
    console.log(err);
  }
  await prisma.$disconnect();
});

export default handler;
