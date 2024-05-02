"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorExpressValidator = void 0;
const express_validator_1 = require("express-validator");
const handleErrorExpressValidator = (req, res, next) => {
    const errorResult = (0, express_validator_1.validationResult)(req);
    if (errorResult.isEmpty() === false) {
        res.status(300).send({
            error: true,
            message: errorResult.array()[0].msg,
            data: null
        });
    }
    else {
        next();
    }
};
exports.handleErrorExpressValidator = handleErrorExpressValidator;
