import { PrismaClient } from "@prisma/client";
import globalHandler from "../../lib/handler";
//======================================================

const handler = globalHandler();

handler.get(async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: "nima@yahoo.com",
      },
    });
    res.json({ user, msg: "worked" });
  } catch (err) {
    console.log(err.message);
  }
});

export default handler;
