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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameCode = exports.checkServerStatus = void 0;
const index_controller_1 = __importDefault(require("../model/index.controller"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const helpers_1 = require("../utils/helpers");
exports.checkServerStatus = (0, helpers_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header('Access-Control-Allow-Origin', '*');
    return res.sendStatus(200);
}));
exports.getGameCode = (0, helpers_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameCode = yield index_controller_1.default.findOne({ gameCode: req.params.id });
    res.header('Access-Control-Allow-Origin', '*');
    if (gameCode) {
        const jwtToken = jsonwebtoken_1.default.sign({ _id: gameCode._id }, config_1.default.get('jwtPrivateKey'));
        return res.status(200).send(jwtToken);
    }
    else {
        return res.sendStatus(404);
    }
}));
//# sourceMappingURL=index.controller.js.map