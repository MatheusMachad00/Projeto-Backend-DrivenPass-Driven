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
exports.getUserData = exports.createUserToken = exports.createUser = exports.checkEmail = void 0;
const postgres_1 = require("../dbStrategy/postgres");
function checkEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield postgres_1.prisma.users.findFirst({ where: { email } });
        return result;
    });
}
exports.checkEmail = checkEmail;
;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.users.create({ data: user });
    });
}
exports.createUser = createUser;
;
function createUserToken(userId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        yield postgres_1.prisma.tokens.create({ data: { userId, token } });
    });
}
exports.createUserToken = createUserToken;
;
function getUserData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = postgres_1.prisma.users.findFirst({
            where: {
                id,
            },
            select: {
                id: true,
                tokens: {
                    select: {
                        token: true,
                    },
                },
            },
        });
        return result;
    });
}
exports.getUserData = getUserData;
;
/* export async function deleteToken(userId: number) {
  const result = await prisma.tokens.delete({ where: { userId } })
} */ 
