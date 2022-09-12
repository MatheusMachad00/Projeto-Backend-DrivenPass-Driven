"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const credentialRouter_1 = __importDefault(require("./credentialRouter"));
const safeNotesRouter_1 = __importDefault(require("./safeNotesRouter"));
const creditCardRouter_1 = __importDefault(require("./creditCardRouter"));
const wifiRouter_1 = __importDefault(require("./wifiRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(credentialRouter_1.default);
router.use(safeNotesRouter_1.default);
router.use(creditCardRouter_1.default);
router.use(wifiRouter_1.default);
exports.default = router;
