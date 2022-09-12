"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreditCardSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const date_1 = __importDefault(require("@joi/date"));
const joi = joi_1.default.extend(date_1.default);
exports.createCreditCardSchema = joi.object({
    title: joi.string().max(50).required(),
    cardNumber: joi.string().pattern(/^\d{4} \d{4} \d{4} \d{4}$/).required(),
    cvv: joi.string().pattern(/^\d{3}$/).length(3).required(),
    expirationDate: joi.date().format('MM/YY').required(),
    password: joi.string().pattern(/^\d{4}$/).length(4).required(),
    isVirtual: joi.boolean().strict().required(),
    type: joi.string().valid('credit', 'debit', 'both').required(),
    cardName: joi.string().min(1).required()
});
