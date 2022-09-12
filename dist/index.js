"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const chalk_1 = __importDefault(require("chalk"));
require("express-async-errors");
const index_1 = __importDefault(require("./routes/index"));
const errorHandlerMiddleware_1 = __importDefault(require("./middlewares/errorHandlerMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), express_1.default.json());
app.use(index_1.default);
app.use(errorHandlerMiddleware_1.default);
const PORT = Number(process.env.PORT) || 5001;
app.listen(PORT, () => {
    console.log(chalk_1.default.hex("#00ffff").bold(`Server is running on: http://localhost:${PORT}`));
});
