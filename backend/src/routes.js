const { Router } = require("express");
const multer = require("multer");
const LivroController = require("./controllers/LivroController");
const uploadConfig = require("./config/upload");
const uuidv4 = require('uuid')
const DIR = './uploads/resizes';

const routes = new Router();

const upload = multer(uploadConfig);

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(" ").join("-");
//         cb(null, uuidv4() + "-" + fileName);
//     },
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (
//             file.mimetype == "image/png" ||
//             file.mimetype == "image/jpg" ||
//             file.mimetype == "image/jpeg"
//         ) {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//         }
//     },
// });

routes.post("/livros", upload.single("image"), LivroController.create);
routes.get("/livros", LivroController.index);
routes.put("/livros/:id", upload.single("image"), LivroController.update);
routes.delete("/livros/:id", LivroController.destroy);

module.exports = routes;
