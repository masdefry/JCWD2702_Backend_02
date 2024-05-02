"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleMiddleware = void 0;
const exampleMiddleware = (req, res, next) => {
    console.log('ExampleMiddleware');
    next();
};
exports.exampleMiddleware = exampleMiddleware;
