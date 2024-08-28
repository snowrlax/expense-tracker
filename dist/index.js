"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EntryRoutes_1 = __importDefault(require("./routes/EntryRoutes"));
var cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use("/entry", EntryRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}!`);
});
app.listen(3000, () => {
    console.log("running on port 3000!");
});
