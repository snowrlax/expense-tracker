"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EntryController_1 = require("../controllers/EntryController");
const router = express_1.default.Router();
router.get("/", EntryController_1.getAllEntries);
router.get("/netbalance", EntryController_1.calculateNetBalance);
router.post("/", EntryController_1.createEntry);
router.delete("/:id", EntryController_1.deleteEntry);
exports.default = router;
