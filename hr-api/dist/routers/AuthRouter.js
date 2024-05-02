"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Define Router
const router = (0, express_1.Router)();
// Import Controller
const AuthController_1 = require("../controllers/AuthController");
router.post('/login', AuthController_1.login);
exports.default = router;
