"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteCreditCard = exports.getCreditCardsById = exports.getAllCreditCard = exports.createCreditCard = void 0;
const creditCardRepository = __importStar(require("../repositories/creditCardRepository"));
const cryptr_1 = __importDefault(require("cryptr"));
function createCreditCard(cardData) {
    return __awaiter(this, void 0, void 0, function* () {
        const titleExists = yield creditCardRepository.checkTitle(cardData.title);
        if (titleExists)
            throw { type: 'conflict' };
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        const { password, cvv } = cardData;
        const encryptedPassword = cryptr.encrypt(password);
        const encryptedCVV = cryptr.encrypt(cvv);
        yield creditCardRepository.createCreditCard(Object.assign(Object.assign({}, cardData), { password: encryptedPassword, cvv: encryptedCVV }));
    });
}
exports.createCreditCard = createCreditCard;
;
function getAllCreditCard(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield creditCardRepository.getAllCreditCards(userId);
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        let decryptedData = result.map((r) => {
            const { password, cvv } = r;
            const decryptedPassword = cryptr.decrypt(password);
            const decryptedCVV = cryptr.decrypt(cvv);
            return Object.assign(Object.assign({}, r), { password: decryptedPassword, cvv: decryptedCVV });
        });
        return decryptedData;
    });
}
exports.getAllCreditCard = getAllCreditCard;
;
function getCreditCardsById(cardId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield creditCardRepository.getCreditCardsById(cardId);
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        const { password, cvv } = result;
        const decryptedPassword = cryptr.decrypt(password);
        const decryptedCVV = cryptr.decrypt(cvv);
        const decryptedData = (Object.assign(Object.assign({}, result), { password: decryptedPassword, cvv: decryptedCVV }));
        return decryptedData;
    });
}
exports.getCreditCardsById = getCreditCardsById;
;
function deleteCreditCard(cardId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield creditCardRepository.getCreditCardsById(cardId);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        yield creditCardRepository.deleteCreditCards(cardId);
    });
}
exports.deleteCreditCard = deleteCreditCard;
;
