"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configurations
dotenv_1.default.config({
    path: '.env'
});
const app = (0, express_1.default)();
//middlewars
/* it passes all the data from the json parser */
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
//server runnings
app.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
});
//# sourceMappingURL=index.js.map