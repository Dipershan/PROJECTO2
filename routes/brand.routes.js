const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brand.controller");


router
  .route("/")
  .get(brandController.getAllBrands)
  .post(brandController.createBrands);

router.delete("/:id", brandController.deleteBrandById);

router.put("/:id", brandController.updateBrandById);

module.exports = router;
