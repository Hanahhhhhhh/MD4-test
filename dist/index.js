"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const route_1 = require("./src/route/route");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/employee_management1').then(() => {
    console.log('connect success');
}).catch(err => {
    console.log(err);
});
app.use((0, cors_1.default)());
app.use('', route_1.routes);
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
