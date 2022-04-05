"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
// connect to mongodb
const dbUrl = process.env.MONGO_DB || 'mongodb://localhost:27017';
mongoose_1.default
    .connect(dbUrl)
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.log(err));
const app = (0, express_1.default)();
const port = process.env.PORT || '8000';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
