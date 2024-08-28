import { prisma } from "../config/database";
import { Entry } from "../models/Entry";
import { Request, Response } from "express";

export const createEntry = async (req: Request, res: Response) => {
  try {
    const newEntry: Entry = req.body;
    const response = await prisma.entry.create({
      data: newEntry,
    });
    console.log(response);
    res.status(200).json(response);
  } catch (e: any) {
    res.status(500).json({ msg: "couldn't create a new Entry : " + e.message });
  }
};

export async function calculateNetBalance(req: Request, res: Response) {
  try {
    const allEntries = await prisma.entry.findMany();
    const netBalance = allEntries.reduce((acc, entry) => {
      if (entry.type === "EXPENSE") {
        return acc - entry.amount;
      } else {
        return acc + entry.amount;
      }
    }, 0);
    res.status(200).json({ NetBalance: netBalance });
  } catch (e: any) {
    res
      .status(500)
      .json({ msg: "couldn't calculate net balance : " + e.message });
  }
}

export async function getAllEntries(req: Request, res: Response) {
  try {
    const response = await prisma.entry.findMany();
    console.log(response);
    res.status(200).json(response);
  } catch (e: any) {
    res.status(500).json({ msg: "couldn't fetch all Entry : " + e.message });
  }
}

export async function deleteEntry(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await prisma.entry.delete({
      where: {
        id: parseInt(id),
      },
    });
    console.log(response);
    res.status(200).json({ "Entry deleted : ": response });
  } catch (e: any) {
    res.status(500).json({ msg: "couldn't delete Entry : " + e.message });
  }
}
