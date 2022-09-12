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
exports.deleteWifis = exports.getWifisById = exports.getAllWifis = exports.checkTitle = exports.createWifi = void 0;
const postgres_1 = require("../dbStrategy/postgres");
function createWifi(wifi) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.wifis.create({ data: wifi });
    });
}
exports.createWifi = createWifi;
;
function checkTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.wifis.findFirst({ where: { title } });
        return result;
    });
}
exports.checkTitle = checkTitle;
;
function getAllWifis(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.wifis.findMany({ where: { userId } });
        return result;
    });
}
exports.getAllWifis = getAllWifis;
;
function getWifisById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.wifis.findFirst({ where: { id } });
        return result;
    });
}
exports.getWifisById = getWifisById;
;
function deleteWifis(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.wifis.delete({ where: { id } });
    });
}
exports.deleteWifis = deleteWifis;
;
