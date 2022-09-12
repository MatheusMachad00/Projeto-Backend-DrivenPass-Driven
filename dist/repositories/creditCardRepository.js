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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCreditCards = exports.getCreditCardsById = exports.getAllCreditCards = exports.checkTitle = exports.createCreditCard = void 0;
const postgres_1 = require("../dbStrategy/postgres");
function createCreditCard(card) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.cards.create({ data: card });
    });
}
exports.createCreditCard = createCreditCard;
function checkTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.cards.findFirst({ where: { title } });
        return result;
    });
}
exports.checkTitle = checkTitle;
;
function getAllCreditCards(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.cards.findMany({ where: { userId } });
        return result;
    });
}
exports.getAllCreditCards = getAllCreditCards;
;
function getCreditCardsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.cards.findFirst({ where: { id } });
        return result;
    });
}
exports.getCreditCardsById = getCreditCardsById;
;
function deleteCreditCards(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.cards.delete({ where: { id } });
    });
}
exports.deleteCreditCards = deleteCreditCards;
