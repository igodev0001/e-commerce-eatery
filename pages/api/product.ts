import { PrismaClient } from "@prisma/client";
import globalHandler from "../../lib/handler";

const handler = globalHandler();

handler.get(async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const product = await prisma.product.findFirst({
      where: {
        name: {
          contains: "Watermelon Slushie",
        },
      },
      include: {
        category: {},
      },
    });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
