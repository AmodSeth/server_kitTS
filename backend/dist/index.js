"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = require("./db/connection");
const routes_1 = __importDefault(require("./routes"));
//configurations
dotenv_1.default.config({
    path: '.env'
});
const app = (0, express_1.default)();
//middlewars
/* it passes all the data from the json parser */
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
//api routes
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = process.env.PORT || 5000;
//server runnings
(0, connection_1.connect_to_database)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map