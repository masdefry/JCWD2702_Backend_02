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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerify = exports.createToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const createToken = ({ uid }) => {
    return jwt.sign({ uid }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
};
exports.createToken = createToken;
const tokenVerify = (req, res, next) => {
    try {
        const reqToken = req;
        const { accesstoken } = req.headers;
        console.log(accesstoken);
        if (!accesstoken)
            throw new Error('Token Must Provided!');
        const decodedPayload = jwt.verify(accesstoken, process.env.JWT_SECRET_KEY);
        console.log(decodedPayload);
        reqToken.payload = decodedPayload;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.tokenVerify = tokenVerify;
