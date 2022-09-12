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
exports.deleteSafeNotes = exports.getSafeNotesById = exports.getAllSafeNotes = exports.checkTitle = exports.createSafeNote = void 0;
const postgres_1 = require("../dbStrategy/postgres");
function createSafeNote(note) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.notes.create({ data: note });
    });
}
exports.createSafeNote = createSafeNote;
function checkTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.notes.findFirst({ where: { title } });
        return result;
    });
}
exports.checkTitle = checkTitle;
;
function getAllSafeNotes(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.notes.findMany({ where: { userId } });
        return result;
    });
}
exports.getAllSafeNotes = getAllSafeNotes;
;
function getSafeNotesById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.notes.findFirst({ where: { id } });
        return result;
    });
}
exports.getSafeNotesById = getSafeNotesById;
;
function deleteSafeNotes(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.notes.delete({ where: { id } });
    });
}
exports.deleteSafeNotes = deleteSafeNotes;
