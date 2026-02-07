const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/", controller.getProducts);
router.get("/new", controller.newProductForm);
router.post("/", controller.createProduct);
router.get("/:id/edit", controller.editProductForm);
router.post("/:id", controller.updateProduct);
router.post("/:id/delete", controller.deleteProduct);

module.exports = router;
