"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("../controllers/server");
const router = express_1.default.Router();
router.route('/getGameCode/:id').get(server_1.getGameCode);
router.route('/').get(server_1.checkServerStatus);
exports.default = router;
//# sourceMappingURL=server.js.map