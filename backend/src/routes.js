const { Router } = require("express");
const multer = require("multer");
const LivroController = require("./controllers/LivroController");
const uploadConfig = require("./config/upload");
const routes = new Router();

const upload = multer(uploadConfig);

routes.post("/livros", upload.single("image"), LivroController.create);
routes.get("/livros", LivroController.index);
routes.put("/livros/:id", upload.single("image"), LivroController.update);
routes.delete("/livros/:id", LivroController.destroy);

module.exports = routes;
