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
exports.deleteCredentials = exports.getCredentialsById = exports.getAllCredentials = exports.checkTitle = exports.createCredencial = void 0;
const postgres_1 = require("../dbStrategy/postgres");
function createCredencial(credential) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.credentials.create({ data: credential });
    });
}
exports.createCredencial = createCredencial;
;
function checkTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.credentials.findFirst({ where: { title } });
        return result;
    });
}
exports.checkTitle = checkTitle;
;
function getAllCredentials(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.credentials.findMany({ where: { userId } });
        return result;
    });
}
exports.getAllCredentials = getAllCredentials;
;
function getCredentialsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.credentials.findFirst({ where: { id } });
        return result;
    });
}
exports.getCredentialsById = getCredentialsById;
;
function deleteCredentials(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.credentials.delete({ where: { id } });
    });
}
exports.deleteCredentials = deleteCredentials;
