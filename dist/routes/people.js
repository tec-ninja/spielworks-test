"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const people_1 = __importDefault(require("../controllers/people"));
const router = express_1.default.Router();
router.get('/', people_1.default.list);
router.get('/:id', people_1.default.get);
router.post('/', people_1.default.create);
exports.default = router;
