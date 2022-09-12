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
exports.deleteWifis = exports.getWifisById = exports.getAllWifis = exports.createWifis = void 0;
const wifiRepository = __importStar(require("../repositories/wifiRepository"));
const cryptr_1 = __importDefault(require("cryptr"));
function createWifis(wifi) {
    return __awaiter(this, void 0, void 0, function* () {
        const titleExists = yield wifiRepository.checkTitle(wifi.title);
        if (titleExists)
            throw { type: 'conflict' };
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        const { title, wifiName, wifiPassword, userId } = wifi;
        const encryptedPassword = cryptr.encrypt(wifiPassword);
        let objectData = {
            title,
            wifiName,
            wifiPassword: encryptedPassword,
            userId
        };
        yield wifiRepository.createWifi(objectData);
    });
}
exports.createWifis = createWifis;
;
function getAllWifis(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield wifiRepository.getAllWifis(userId);
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        let decryptedData = result.map((r) => {
            const { wifiPassword } = r;
            const decryptedPassword = cryptr.decrypt(wifiPassword);
            return Object.assign(Object.assign({}, r), { wifiPassword: decryptedPassword });
        });
        return decryptedData;
    });
}
exports.getAllWifis = getAllWifis;
;
function getWifisById(wifiId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield wifiRepository.getWifisById(wifiId);
        const CRYPTR_KEY = String(process.env.CRYPTR_SECRET);
        const cryptr = new cryptr_1.default(CRYPTR_KEY);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        const { wifiPassword } = result;
        const decryptedPassword = cryptr.decrypt(wifiPassword);
        const decryptedData = Object.assign(Object.assign({}, result), { wifiPassword: decryptedPassword });
        return decryptedData;
    });
}
exports.getWifisById = getWifisById;
;
function deleteWifis(wifiId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield wifiRepository.getWifisById(wifiId);
        if (!result)
            throw { type: 'not_found' };
        if ((result === null || result === void 0 ? void 0 : result.userId) !== userId)
            throw { type: 'unauthorized' };
        yield wifiRepository.deleteWifis(wifiId);
    });
}
exports.deleteWifis = deleteWifis;
;
