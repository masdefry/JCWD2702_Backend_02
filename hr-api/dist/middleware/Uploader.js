"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const Multer_1 = require("../helpers/Multer");
const DeletedUploadedFiles_1 = require("../helpers/DeletedUploadedFiles");
const uploader = (req, res, next) => {
    const upload = Multer_1.multerUpload.fields([{ name: 'images', maxCount: 3 }]);
    upload(req, res, function (err) {
        try {
            if (err)
                throw err;
            if (req.files) {
                const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];
                if (Array.isArray(uploadedFiles)) {
                    uploadedFiles === null || uploadedFiles === void 0 ? void 0 : uploadedFiles.forEach(item => {
                        if (item.size > 1000000000) {
                            throw { message: `${item.originalname} is Too Large` };
                        }
                    });
                }
            }
            next();
        }
        catch (error) {
            (0, DeletedUploadedFiles_1.DeletedUploadedFiles)(req.files);
            next({
                status: 500,
                message: error.message
            });
        }
    });
};
exports.uploader = uploader;
