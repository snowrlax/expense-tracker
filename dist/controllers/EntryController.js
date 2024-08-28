"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntry = void 0;
exports.calculateNetBalance = calculateNetBalance;
exports.getAllEntries = getAllEntries;
exports.deleteEntry = deleteEntry;
const database_1 = require("../config/database");
const createEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntry = req.body;
        const response = yield database_1.prisma.entry.create({
            data: newEntry,
        });
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(500).json({ msg: "couldn't create a new Entry : " + e.message });
    }
});
exports.createEntry = createEntry;
function calculateNetBalance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allEntries = yield database_1.prisma.entry.findMany();
            const netBalance = allEntries.reduce((acc, entry) => {
                if (entry.type === "EXPENSE") {
                    return acc - entry.amount;
                }
                else {
                    return acc + entry.amount;
                }
            }, 0);
            res.status(200).json({ "NetBalance : ": netBalance });
        }
        catch (e) {
            res
                .status(500)
                .json({ msg: "couldn't calculate net balance : " + e.message });
        }
    });
}
function getAllEntries(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield database_1.prisma.entry.findMany();
            console.log(response);
            res.status(200).json(response);
        }
        catch (e) {
            res.status(500).json({ msg: "couldn't fetch all Entry : " + e.message });
        }
    });
}
function deleteEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield database_1.prisma.entry.delete({
                where: {
                    id: parseInt(id),
                },
            });
            console.log(response);
            res.status(200).json({ "Entry deleted : ": response });
        }
        catch (e) {
            res.status(500).json({ msg: "couldn't delete Entry : " + e.message });
        }
    });
}
