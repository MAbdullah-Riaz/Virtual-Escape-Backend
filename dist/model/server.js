"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tokenSchema = new mongoose_1.default.Schema({
    gameCode: { type: String, index: true, required: true },
});
exports.default = mongoose_1.default.model('tokenTable', tokenSchema);
//# sourceMappingURL=server.js.map