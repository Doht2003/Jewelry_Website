import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

export const uploadMulter = (req, res, next) => {
    cloudinary.config({
        cloud_name: "dttrmlnb3",
        api_key: "553226383486271",
        api_secret: "eI8bi_k7EYelqXamGxM0rB63zFU"
    });

    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: "Shoppi",
            format: "png",
            publicc_id: "some_unique_id",
        },
    });

    const upload = multer({ storage: storage });
    req.files = upload.array("images",10);
    next()
}