"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCredentialSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createCredentialSchema = joi_1.default.object({
    password: joi_1.default.string().min(1).required(),
    url: joi_1.default.string().uri().required(),
    username: joi_1.default.string().min(1).required(),
    title: joi_1.default.string().min(1).required()
});
