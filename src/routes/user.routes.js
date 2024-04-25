import { Router } from "express";
import prisma from "../config/db.js";

const router = Router();

router.post("/users", async (req, res) => {
  try {
    const { name, edad } = req.body;
    const newUser = await prisma.user.create({ data: { name, edad } });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: [error.message] });
  }
});

router.get("/users", async (req, res) => {
  try {
    const rows = await prisma.user.findMany();
    res.status(200).json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: [error.message] });
  }
});

export default router;
