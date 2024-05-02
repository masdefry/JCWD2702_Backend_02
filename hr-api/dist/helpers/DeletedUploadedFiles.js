"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedUploadedFiles = void 0;
const fs_1 = require("fs");
const DeletedUploadedFiles = (files) => {
    if (files) {
        const uploadedFiles = Array.isArray(files) ? files : files['images'];
        if (Array.isArray(uploadedFiles)) {
            uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.forEach(item => {
                (0, fs_1.rmSync)(item.path);
            });
        }
    }
};
exports.DeletedUploadedFiles = DeletedUploadedFiles;
