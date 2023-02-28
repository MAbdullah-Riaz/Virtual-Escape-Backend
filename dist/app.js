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
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const database_1 = require("./config/database");
const config_1 = __importDefault(require("config"));
if (!config_1.default.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', index_routes_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.connectDb)();
        console.log(`Express is listening at http://localhost:${port}`);
    }
    catch (error) {
        console.error('Error Connecting Database', error);
    }
}));
//# sourceMappingURL=app.js.map