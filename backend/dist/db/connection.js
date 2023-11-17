"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect_to_database = exports.connect_to_database = void 0;
const mongoose_1 = __importStar(require("mongoose"));
async function connect_to_database() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_DB || "");
    }
    catch (error) {
        throw new Error("Error connecting to database");
    }
}
exports.connect_to_database = connect_to_database;
//security step if anything goes wrong
async function disconnect_to_database() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
    }
}
exports.disconnect_to_database = disconnect_to_database;
//# sourceMappingURL=connection.js.map