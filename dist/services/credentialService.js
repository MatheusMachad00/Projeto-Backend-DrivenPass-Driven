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
exports.deleteCredential = exports.getCredentialById = exports.getAllUserCredentials = exports.createCredential = void 0;
const credentialRepository = __importStar(require("../repositories/credentialRepository"));
const cryptr_1 = __importDefault(require("cryptr"));
const decryptUtils = __importStar(require("../utils/decryptData"));
function createCredential(credential) {
    return __awaiter(this, void 0, void 0, function* () {
        const titleExists = yield credentialRepository.checkTitle(credential.title);
        if (titleExists)
            throw { type: 'conflict' };
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        const { userId, url, username, password, title } = credential;
        const encryptedPassword = cryptr.encrypt(password);
        let objectData = {
            userId,
            url,
            username,
            password: encryptedPassword,
            title
        };
        yield credentialRepository.createCredencial(objectData);
    });
}
exports.createCredential = createCredential;
;
function getAllUserCredentials(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield credentialRepository.getAllCredentials(userId);
        const decryptedData = yield decryptUtils.decryptPassword(result);
        return decryptedData;
    });
}
exports.getAllUserCredentials = getAllUserCredentials;
;
function getCredentialById(credentialId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield credentialRepository.getCredentialsById(credentialId);
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        const { password } = result;
        const decryptedPassword = cryptr.decrypt(password);
        const decryptedData = Object.assign(Object.assign({}, result), { password: decryptedPassword });
        return decryptedData;
    });
}
exports.getCredentialById = getCredentialById;
;
function deleteCredential(credentialId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield credentialRepository.getCredentialsById(credentialId);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        yield credentialRepository.deleteCredentials(credentialId);
    });
}
exports.deleteCredential = deleteCredential;
;
