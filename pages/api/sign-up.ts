import globalHander from "../../lib/handler";
// import { PrismaClient } from "@prisma/client";
//======================================================

const handler = globalHander();

handler.post(async (req, res) => {
  //   const prisma = new PrismaClient();
  const { email, pass } = req.body;
  console.log(email);
  try {
    res.json({ email, pass });
  } catch (err: any) {
    console.log(err.message);
  }
});

export default handler;
