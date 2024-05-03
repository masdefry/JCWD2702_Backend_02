"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedUploadedFiles = void 0;
const fs_1 = require("fs");
const DeletedUploadedFiles = (files) => {
    if (files) {
        const uploadedFiles = Array.isArray(files) ? files : files['images'];
        if (Array.isArray(uploadedFiles)) {
            uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.forEach(item => {
                if (item.path)
                    (0, fs_1.rmSync)(item.path);
                if (item.url)
                    (0, fs_1.rmSync)(item.url);
            });
        }
    }
};
exports.DeletedUploadedFiles = DeletedUploadedFiles;
