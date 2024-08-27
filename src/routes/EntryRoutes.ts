import express, { Request, Response } from "express";
import {
  calculateNetBalance,
  createEntry,
  deleteEntry,
  getAllEntries,
} from "../controllers/EntryController";

const router = express.Router();

router.get("/", getAllEntries);

router.get("/netbalance", calculateNetBalance);

router.post("/", createEntry);

router.delete("/:id", deleteEntry);

export default router;
